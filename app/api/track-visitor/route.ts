import { NextRequest } from "next/server";
import redis from "@/lib/redis";

// Force dynamic execution
export const dynamic = "force-dynamic";
export const runtime = "edge";

async function hashIP(ip: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

// handles the actual visitor tracking
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const shouldTrack = searchParams.get("track") === "true";

    // Get current date for key
    const today = new Date().toISOString().split("T")[0];
    const visitorKey = `visitors:${today}`;
    const totalVisitorKey = "total_unique_visitors";

    // const isLocalhost = process.env.NODE_ENV === "development";

    // If this is a new visit track it
    if (shouldTrack) {
      // Get IP address (or a fingerprint if available)
      const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ||
        request.headers.get("x-real-ip") ||
        "unknown";

      const hashedIP = await hashIP(ip);

      // Add to Redis set (which automatically handles uniqueness)
      await redis.sadd(visitorKey, hashedIP);
      await redis.sadd(totalVisitorKey, hashedIP);
    }

    // Get current count regardless of whether we tracked or not
    const uniqueVisitors = await redis.scard(visitorKey);

    console.log("Unique visitors ", uniqueVisitors);
    const totalUniqueVisitors = await redis.scard(totalVisitorKey);
    console.log("Total unique visitors", totalUniqueVisitors);

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
