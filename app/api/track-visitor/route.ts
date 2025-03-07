import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import redis from "@/lib/redis";

export async function GET() {
  try {
    // Get headers
    const headersList = await headers();
    
    // Get IP address - Vercel automatically sets x-forwarded-for
    const ip = headersList.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log({
        environment: process.env.NODE_ENV,
        isVercel: process.env.VERCEL === '1',
        detectedIp: ip,
        headers: Object.fromEntries(headersList.entries())
      });
      
      // Don't track in development
      return NextResponse.json({
        success: true,
        totalVisitors: 0,
        message: 'Development mode - not tracking visitors',
        debug: { ip }
      });
    }

    // Only track valid IPs in production
    if (ip && ip !== 'unknown') {
      const key = `visitor:${ip}`;
      const exists = await redis.exists(key);
      
      if (!exists) {
        // Set with 24h expiration
        await redis.multi()
          .setex(key, 86400, '1')
          .incr('total_unique_visitors')
          .exec();
      }

      const totalVisitors = await redis.get('total_unique_visitors') || '0';
      return NextResponse.json({ success: true, totalVisitors: parseInt(totalVisitors) });
    }

    return NextResponse.json({
      success: false,
      error: 'Could not detect visitor IP'
    }, { status: 400 });

  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to track visitor',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    }, { status: 500 });
  }
}
