import { useEffect, useState } from "react";

export function useOrientation(): {
  type: string;
  angle: number;
} {
  const getOrientation = () => {
    const orientation = window.screen.orientation || {
      type: "unknown",
      angle: 0,
    };
    return {
      type: orientation.type,
      angle: orientation.angle,
    };
  };

  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handler = () => setOrientation(getOrientation());
    window.addEventListener("orientationchange", handler);
    return () => window.removeEventListener("orientationchange", handler);
  }, []);

  return orientation;
}
