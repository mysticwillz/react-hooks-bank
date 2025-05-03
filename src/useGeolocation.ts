import { useEffect, useState } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setLocation(position.coords)
      );
    }
  }, []);

  return location;
}
