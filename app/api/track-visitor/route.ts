import { NextRequest } from "next/server";
import redis from "@/lib/redis";

// Force dynamic execution
export const dynamic = "force-dynamic";
export const runtime = "edge";

// POST handles the actual visitor tracking
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const shouldTrack = searchParams.get("track") === "true";

    // Get current date for key
    const today = new Date().toISOString().split("T")[0];
    const visitorKey = `visitors:${today}`;

    // If this is a new visit and we should track it
    if (shouldTrack) {
      // Get IP address (or a fingerprint if available)
      const ip =
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown";

      // Add to Redis set (which automatically handles uniqueness)
      await redis.sadd(visitorKey, ip);
    }

    // Get current count regardless of whether we tracked or not
    const uniqueVisitors = await redis.scard(visitorKey);

    return new Response(
      JSON.stringify({
        success: true,
        uniqueVisitors,
        date: today,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to track visitor",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
