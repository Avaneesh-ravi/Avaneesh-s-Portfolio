import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  
  // Your provided API Key
  const API_KEY = 'wTwJERsPqmNrUeIrg520MLNu6hclOZjQ6Jl25ULh'; 
  // Unique ID for your portfolio - you can change this string if you want to reset the count
  const COUNTER_ID = 'avaneesh_ravi_portfolio_hits'; 

  useEffect(() => {
    // We use id and hit=true to increment the count on every page load
    fetch(`https://api.api-ninjas.com/v1/counter?id=${COUNTER_ID}&hit=true`, {
      method: 'GET',
      headers: { 
        'X-Api-Key': API_KEY 
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data.value !== undefined) {
          setCount(data.value);
        }
      })
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <div className="flex justify-center bg-black py-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black text-green-400 px-5 py-2 rounded-full text-sm font-medium border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        👀 Live Visitors: {count}
      </motion.div>
    </div>
  );
};

export default VisitorCounter;
