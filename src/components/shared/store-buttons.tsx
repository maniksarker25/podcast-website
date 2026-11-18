import { AppleIcon, PlayStoreIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { siteConfig } from "@/config/site";
import type { Icon } from "@/types";
import { cn } from "@/lib/utils";

const stores: { key: keyof typeof siteConfig.appLinks; icon: Icon; top: string; name: string }[] = [
  { key: "appStore", icon: AppleIcon, top: "Download on the", name: "App Store" },
  { key: "googlePlay", icon: PlayStoreIcon, top: "Get it on", name: "Google Play" },
];

/**
 * Store badges. A store without a link in siteConfig shows "Coming soon" and is
 * not a link, so nothing pretends to work.
 */
export function StoreButtons({ className, tone = "default" }: { className?: string; tone?: "default" | "inverted" }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {stores.map((store) => {
        const href = siteConfig.appLinks[store.key];
        const body = (
          <>
            <HugeiconsIcon icon={store.icon} className="size-6" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] opacity-70">{href ? store.top : "Coming soon to"}</span>
              <span className="block text-sm font-semibold">{store.name}</span>
            </span>
          </>
        );
        const cls = cn(
          "inline-flex h-12 items-center gap-2.5 rounded-xl px-4 transition-all",
          tone === "inverted"
            ? "bg-white text-[#141418] hover:bg-white/90"
            : "bg-foreground text-background hover:opacity-90",
          !href && "cursor-default opacity-80 hover:opacity-80"
        );
        return href ? (
          <a key={store.key} href={href} className={cls} rel="noopener noreferrer" target="_blank">
            {body}
          </a>
        ) : (
          <span key={store.key} className={cls} aria-label={`${store.name} — coming soon`}>
            {body}
          </span>
        );
      })}
    </div>
  );
}
