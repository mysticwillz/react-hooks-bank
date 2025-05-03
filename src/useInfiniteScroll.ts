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
          try {
            callback();
          } catch (error) {
            console.error("Error in callback:", error);
          } finally {
            setIsLoading(false);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, callback, threshold]);

  return isLoading;
}
