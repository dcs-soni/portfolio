import { NextRequest } from "next/server";
import redis from "@/lib/redis";
import crypto from "crypto";

// Force dynamic execution
export const dynamic = "force-dynamic";
export const runtime = "edge";

function hashIP(ip: string) {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

// POST handles the actual visitor tracking
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const shouldTrack = searchParams.get("track") === "true";

    // Get current date for key
    const today = new Date().toISOString().split("T")[0];
    const visitorKey = `visitors:${today}`;
    const totalVisitorKey = "total_unique_visitors";

    // If this is a new visit and we should track it
    if (shouldTrack) {
      // Get IP address (or a fingerprint if available)
      const ip =
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown";

      const hashedIP = hashIP(ip);

      // Add to Redis set (which automatically handles uniqueness)
      await redis.sadd(visitorKey, hashedIP);
      await redis.sadd(totalVisitorKey, hashedIP);
    }

    // Get current count regardless of whether we tracked or not
    const uniqueVisitors = await redis.scard(visitorKey);
    const totalUniqueVisitors = await redis.scard(totalVisitorKey);

    return new Response(
      JSON.stringify({
        success: true,
        uniqueVisitors,
        totalUniqueVisitors,
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
