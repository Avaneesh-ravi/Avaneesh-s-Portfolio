import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // We use your valid API Key and a unique ID
    const API_KEY = 'wTwJERsPqmNrUeIrg520MLNu6hclOZjQ6Jl25ULh';
    const COUNTER_ID = 'avaneesh_portfolio_final'; // Using a fresh ID to ensure it triggers

    fetch(`https://api.api-ninjas.com/v1/counter?id=${COUNTER_ID}&hit=true`, {
      method: 'GET',
      headers: { 'X-Api-Key': API_KEY }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.value !== undefined) {
          setCount(data.value);
        }
      })
      .catch((err) => console.error("Counter Error:", err));
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
