import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";

async function hashString(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  //   return Array.from(new Uint8Array(hashBuffer))
  //     .map((b) => b.toString(16).padStart(2, "0"))
  //     .join("");

  return Buffer.from(hashBuffer).toString("base64"); // Use Buffer to reduce string overhead
}

export async function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  // Combine IP & User-Agent for better uniqueness
  const uniqueIdentifier = `${ip}:${userAgent}`;
  const hashedIdentifier = await hashString(uniqueIdentifier);

  // Store in Redis HyperLogLog
  await redis.pfadd("unique_visitors", hashedIdentifier);

  await redis.sadd("visitor_ips", ip);

  return NextResponse.next();
}
export const config = {
  matcher: "/:path*",
};
