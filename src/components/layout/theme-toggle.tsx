"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// True only after hydration, so the server and first client render match.
const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(subscribe, () => true, () => false);

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
        className
      )}
    >
      <HugeiconsIcon
        icon={Sun03Icon}
        className={cn("size-[18px] transition-all duration-300", isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")}
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className={cn("absolute size-[18px] transition-all duration-300", isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0")}
      />
    </button>
  );
}
