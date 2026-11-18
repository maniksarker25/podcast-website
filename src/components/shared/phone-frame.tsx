import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A phone bezel. The screen always uses the app's dark palette, as the real app does. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[280px] rounded-[2.6rem] bg-[#0c0c0e] p-[9px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6),0_0_0_1px_rgb(255_255_255/0.08)_inset]",
        className
      )}
    >
      <div className="relative h-full overflow-hidden rounded-[2.1rem] bg-app text-app-text">
        <div aria-hidden className="absolute top-2.5 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}
