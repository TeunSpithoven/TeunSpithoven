"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Saves the scroll position to sessionStorage on scroll (debounced)
 * and on any click (to capture navigation clicks before the page unloads).
 * Restores the saved position when the component re-mounts (e.g. on back-navigation),
 * retrying across multiple animation frames and after window load to overcome
 * Next.js's automatic scroll-to-top and delayed content rendering.
 * Uses the current pathname as the storage key so each page keeps its own position.
 */
export function useScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const key = `scroll-${pathname}`;

    // ── Helper to write the current scroll position ──
    const saveScroll = () => {
      try {
        sessionStorage.setItem(key, window.scrollY.toString());
      } catch {
        // sessionStorage may be unavailable (private browsing, quotas)
      }
    };

    // ── Save immediately on any click (captures link clicks before navigation) ──
    const handleClick = () => saveScroll();
    document.addEventListener("click", handleClick, { passive: true });

    // ── Save on scroll (debounced) ──
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(saveScroll, 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── Restore saved position on mount ──
    const savedPosition = sessionStorage.getItem(key);
    if (savedPosition) {
      const scrollY = parseInt(savedPosition, 10);
      if (!isNaN(scrollY) && scrollY > 0) {
        // Immediately try to scroll …
        window.scrollTo(0, scrollY);
        // … and keep retrying on each frame to beat Next.js scroll-to-top
        let attempts = 0;
        const maxAttempts = 30; // ~500ms at 60fps
        const tryScroll = () => {
          window.scrollTo(0, scrollY);
          attempts++;
          if (attempts < maxAttempts) {
            requestAnimationFrame(tryScroll);
          }
        };
        requestAnimationFrame(tryScroll);

        // Also re-scroll once all resources have loaded
        const onLoad = () => window.scrollTo(0, scrollY);
        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad, { once: true });
        }
      }
    }

    return () => {
      saveScroll();
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);
}
