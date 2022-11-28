import { useEffect, useState } from "react";

export const CounterTask: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, []);

  return (
    <div>
      <p title="counterTask">{count}</p>
      <button title="counterTaskButton" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </div>
  );
};
