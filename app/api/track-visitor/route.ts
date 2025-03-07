import { NextResponse } from "next/server";

import redis from "@/lib/redis";

export async function GET() {
  const uniqueVisitors = await redis.pfcount("unique_visitors");

  return NextResponse.json({ success: true, uniqueVisitors });
}
