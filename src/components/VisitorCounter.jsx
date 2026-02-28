import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This API is optimized for React and doesn't get blocked by CORS
    // Using your name as the 'namespace' to keep your count unique
    fetch("https://api.counterapi.dev/v1/avaneesh-ravi/portfolio/up")
      .then((res) => res.json())
      .then((data) => {
        // The API returns the new count in the 'count' field
        if (data.count) {
          setCount(data.count);
        }
      })
      .catch((err) => {
        console.error("Counter Error:", err);
        setCount("---"); // Fallback if the user has a very strict ad-blocker
      });
  }, []);

  return (
    <div className="flex justify-center bg-black py-10">
      <div className="bg-black text-green-400 px-5 py-2 rounded-full text-sm font-medium border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Visitors: {count}
      </div>
    </div>
  );
};

export default VisitorCounter;
