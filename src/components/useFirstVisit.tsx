// src/useFirstVisit.ts
import { useState, useEffect } from "react";

const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  return isFirstVisit;
};

export default useFirstVisit;
