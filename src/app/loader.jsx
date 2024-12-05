"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // To detect route changes
import Loading from "./loading";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname(); // Current route path

  useEffect(() => {
    // Trigger the loader on route change
    const init = async () => {
      setIsLoading(true); // Start loading
      await wait(3000);
      setIsLoading(false); // Stop loading
    };

    init();
  }, [pathname]); // Re-run when the route changes

  if (isLoading) {
    return <Loading />; // Show loading screen
  }

  return <>{children}</>;
};

export default Loader;
