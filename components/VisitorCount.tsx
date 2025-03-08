"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const VISITOR_KEY = 'last_visit';
    const VISITOR_COUNT_KEY = 'visitor_count';
    
    const fetchVisitorCount = async () => {
      try {
        // Check if we've already counted this visitor today
        const lastVisit = localStorage.getItem(VISITOR_KEY);
        const today = new Date().toDateString();
        const cachedCount = localStorage.getItem(VISITOR_COUNT_KEY);

        // If we have a cached count and it's not time to update, use it
        if (lastVisit === today && cachedCount) {
          setVisitorCount(parseInt(cachedCount));
          setIsLoading(false);
          return;
        }

        // Make a single POST request to track the visit and get the count
        const response = await fetch("/api/track-visitor", {
          method: lastVisit === today ? 'GET' : 'POST',
          cache: 'no-store'
        });

        const data = await response.json();
        if (data.success) {
          setVisitorCount(data.uniqueVisitors);
          // Cache the count and visit date
          localStorage.setItem(VISITOR_COUNT_KEY, data.uniqueVisitors.toString());
          localStorage.setItem(VISITOR_KEY, today);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        // If there's an error, use cached count if available
        const cachedCount = localStorage.getItem(VISITOR_COUNT_KEY);
        if (cachedCount) {
          setVisitorCount(parseInt(cachedCount));
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch once when component mounts
    fetchVisitorCount();
  }, []); // Empty dependency array ensures this only runs once

  if (isLoading) return null;

  return (
    <span className="text-zinc-700 dark:text-gray-400 text-sm">
      {visitorCount.toLocaleString()} unique visitors
    </span>
  );
}
