"use client";
import { useEffect, useState } from "react";

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [totalVisitorCount, setTotalVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Check if this is a new visit for today
        const lastVisit = getCookie("last_visit");
        const today = new Date().toDateString();
        const isNewVisit = lastVisit !== today;

        // Make a single API call with the visit status
        const response = await fetch(
          `/api/track-visitor${isNewVisit ? "?track=true" : ""}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        // Development
        // const response = await fetch("/api/track-visitor?track=true", {
        //   method: "GET",
        //   cache: "no-store",
        //   headers: {
        //     "x-forwarded-for": "192.168.1.120",
        //   },
        // });

        const data = await response.json();
        if (data.success) {
          setVisitorCount(data.uniqueVisitors);
          setTotalVisitorCount(data.totalUniqueVisitors);

          // Only set cookie if it was a new visit
          if (isNewVisit) {
            setCookie("last_visit", today, 1);
          }
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
    <>
      <span className="hidden md:hidden lg:hidden text-zinc-700 dark:text-gray-400 text-sm">
        {visitorCount.toLocaleString()} unique visitors today
      </span>
      <span className="text-zinc-700 dark:text-gray-400 text-sm">
        {totalVisitorCount.toLocaleString()} unique visitors
      </span>
    </>
  );
}
