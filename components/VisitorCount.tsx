"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/track-visitor", {
          method: 'POST',
          cache: 'no-store',
          next: { revalidate: 0 }
        });
        const data = await response.json();
        if (data.success) {
          setVisitorCount(data.uniqueVisitors);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  if (isLoading) return null;

  return (
    <span className="text-zinc-700 dark:text-gray-400 text-sm">
      {visitorCount.toLocaleString()} unique visitors
    </span>
  );
}
