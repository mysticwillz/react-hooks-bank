import { useEffect, useState } from "react";

export function useInfiniteScroll(
  callback: () => void,
  threshold: number = 100
) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - threshold
      ) {
        if (!isLoading) {
          setIsLoading(true);
          callback();
          setTimeout(() => setIsLoading(false), 500); // mock delay
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, callback, threshold]);

  return isLoading;
}
