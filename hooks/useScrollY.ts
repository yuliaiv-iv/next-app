import { useEffect, useState } from "react";

export const useScrollY = (): number => {
  const isBrowser = typeof window !== "undefined"; // make sure we are not on the server side
  const [scrollY, setScrollY] = useState<number>(0);

  function handleScroll() {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};
