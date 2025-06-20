import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";


const redis = new Redis({
    url : process.env.REDIS_URL,
    token : process.env.REDIS_TOKEN,
});


export const rateLimiter = new Ratelimit({
    redis,
    limiter : Ratelimit.slidingWindow(
        5, "10 s"), 
    prefix : "rate-limit",
});