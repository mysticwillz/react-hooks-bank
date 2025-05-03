import { useEffect, useState } from "react";

export function useDeviceInfo(): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  userAgent: string;
  platform: string;
} {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    userAgent: "",
    platform: "",
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    setDeviceInfo({ isMobile, isTablet, isDesktop, userAgent, platform });
  }, []);

  return deviceInfo;
}
