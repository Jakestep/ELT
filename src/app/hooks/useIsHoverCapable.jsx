import { useEffect, useState } from "react";

export const useIsHoverCapable = () => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    setCanHover(mql.matches);

    const handler = (e) => setCanHover(e.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  return canHover;
};