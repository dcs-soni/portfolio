import { Redis } from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

// Add connection handling
redis.on('error', (error) => {
  console.error('Redis connection error:', error);
});

redis.on('connect', () => {
  console.log('Successfully connected to Redis');
});

export default redis;
