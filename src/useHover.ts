import { useRef, useState, useEffect, RefObject } from "react";

export function useHover<T extends HTMLElement = HTMLElement>(): {
  ref: RefObject<T | null>;
  hovered: boolean;
} {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref.current]);

  return { ref, hovered };
}
