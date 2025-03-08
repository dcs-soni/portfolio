import { NextResponse } from "next/server";
import { headers } from "next/headers";
import redis from "@/lib/redis";

// Force dynamic execution
export const dynamic = "force-dynamic";
export const runtime = "edge";

// GET only returns the count without incrementing
export async function GET() {
  try {
    const uniqueVisitors = await redis.pfcount("unique_visitors");
    return NextResponse.json({ success: true, uniqueVisitors });
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return NextResponse.json(
      { success: false, error: "Failed to get visitor count" },
      { status: 500 }
    );
  }
}

// POST handles the actual visitor tracking
export async function POST() {
  try {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";

    // Skip bots and crawlers
    const isBot = (() => {
      if (!userAgent) return true; // No user agent is suspicious

      const botPatterns =
        /bot|crawler|spider|headless|puppet|chrome-lighthouse|googlebot|bingbot|yandex|baidu/i;
      return botPatterns.test(userAgent);
    })();

    // Get the IP for additional verification
    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Only count if not a bot and has valid IP
    if (!isBot && ip !== "unknown") {
      const key = `visitor:${ip}`;
      const exists = await redis.exists(key);

      if (!exists) {
        // Store in Redis with 24h expiration
        await redis
          .multi()
          .pfadd("unique_visitors", ip)
          .setex(key, 86400, "1") // 24h rate limiting per IP
          .exec();

        // Log legitimate visits in development
        if (process.env.NODE_ENV === "development") {
          console.log("New visitor:", { ip, userAgent });
        }
      }
    } else if (process.env.NODE_ENV === "development") {
      // Log blocked attempts in development
      console.log("Blocked visitor:", {
        ip,
        userAgent,
        reason: isBot ? "Bot detected" : "Invalid IP",
      });
    }

    const uniqueVisitors = await redis.pfcount("unique_visitors");

    return NextResponse.json({
      success: true,
      uniqueVisitors,
      // Include debug info only in development
      debug:
        process.env.NODE_ENV === "development"
          ? {
              isBot,
              userAgent: userAgent.substring(0, 100), // Truncate for logging
              ip,
            }
          : undefined,
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to track visitor" },
      { status: 500 }
    );
  }
}
