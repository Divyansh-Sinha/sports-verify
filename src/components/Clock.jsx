import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [utcTime, setUtcTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => {
      setUtcTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="currentTime" className="text-center mb-4 text-sm text-gray-700">
      {utcTime}
    </div>
  );
};

export default Clock;