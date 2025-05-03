import { useEffect, useRef, useState, RefObject } from "react";

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
): {
  ref: RefObject<T | null>;
  entry: IntersectionObserverEntry | null;
} {
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref.current]);

  return { ref, entry };
}
