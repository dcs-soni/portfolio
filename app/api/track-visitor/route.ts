import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET(request: Request) {
  try {
    // Get IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    // Use forwardedFor if available, but ensure we're getting the original client IP
    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("cf-connecting-ip") || // Cloudflare
        request.headers.get("x-real-ip") || // NGINX
        "unknown";

    console.log("Visitor IP:", ip);

    const key = `visitor:${ip}`;

    const exists = await redis.exists(key);
    console.log(exists);
    if (!exists) {
      // Set the IP with 1-day expiration
      await redis.setex(key, 86400, "1");

      await redis.incr("total_unique_visitors");

      await redis.persist("total_unique_visitors");
    }

    const totalVisitors = (await redis.get("total_unique_visitors")) || "0";

    return NextResponse.json({
      success: true,
      totalVisitors: parseInt(totalVisitors),
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to track visitor",
      },
      { status: 500 }
    );
  }
}
