import React, { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="text-white text-sm md:text-base absolute top-5 right-5 bg-black/40 px-3 py-1 rounded-md z-50">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default LiveClock;
