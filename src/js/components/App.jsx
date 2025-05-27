import { useState, useEffect } from "react";
import Counter from "./Counter";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Counter seconds={seconds} />;
};

export default App;
