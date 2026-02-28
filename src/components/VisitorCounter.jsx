import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This API works without headers, so it won't be blocked by browser security (CORS)
    fetch("https://api.mojocounter.com/hit/avaneesh-ravi-portfolio/visits")
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        // MojoCounter returns { "value": 123 }
        if (data.value !== undefined) {
          setCount(data.value);
        }
      })
      .catch((err) => {
        console.error("Counter failed:", err);
        // Fallback: if API fails, show a static number or hide it
        setCount("---"); 
      });
  }, []);

  return (
    <div className="flex justify-center bg-black py-6">
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
