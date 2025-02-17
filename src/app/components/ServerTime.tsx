"use client";

import { useEffect, useState } from "react";
import { getServerTime } from "../actions/getServerTime";

export default function ServerTime() {
  const [serverTime, setServerTime] = useState<string>("Loading...");

  useEffect(() => {
    const fetchServerTime = async () => {
      setServerTime((await getServerTime()).toLocaleTimeString());
    };

    // Fetch immediately on mount
    fetchServerTime();

    // Set up interval to fetch every second
    const interval = setInterval(fetchServerTime, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="server-time">
      <h2>Current Server Time</h2>
      <div className="time-display">{serverTime}</div>
    </div>
  );
}
