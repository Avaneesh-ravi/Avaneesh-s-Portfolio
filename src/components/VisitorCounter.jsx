import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  // Using your provided API Key and a unique ID for your portfolio
  const API_KEY = 'wTwJERsPqmNrUeIrg520MLNu6hclOZjQ6Jl25ULh';
  const COUNTER_ID = 'avaneesh_ravi_portfolio_hits';

  useEffect(() => {
    // API Ninjas Counter is a reliable alternative to the defunct countapi.xyz
    fetch(`https://api.api-ninjas.com/v1/counter?id=${COUNTER_ID}&hit=true`, {
      method: 'GET',
      headers: { 
        'X-Api-Key': API_KEY 
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch count');
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
      <span className="bg-black text-green-400 px-5 py-2 rounded-full text-sm font-medium border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.4)] flex items-center gap-2">
        {/* Simple green dot indicator */}
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        👀 Visitors: {count}
      </span>
    </div>
  );
};

export default VisitorCounter;
