import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-V1HH39BKFD", {
        page_path: location.pathname
      });
    }
  }, [location]);

  return null;
}
