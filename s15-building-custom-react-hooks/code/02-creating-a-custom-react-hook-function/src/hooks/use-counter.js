import { useState, useEffect } from 'react';

const useCounter = (action = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (action) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [action]);

  return counter;
};

export default useCounter;
