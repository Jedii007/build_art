"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HOME_PATHS = new Set(["/"]);

export default function RouteTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const theme = HOME_PATHS.has(pathname) ? "dark" : "light";
    document.documentElement.dataset.navTheme = theme;
  }, [pathname]);

  return null;
}
