import {
  Clock01Icon,
  FavouriteIcon,
  Home01Icon,
  PauseIcon,
  Search01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { CoverArt } from "@/components/shared/cover-art";
import { Avatar, Equalizer } from "@/components/shared/media-bits";
import { nowPlaying, topFavorites } from "@/content/showcase";

/** A faithful, static recreation of the app's home screen (inside a PhoneFrame). */
export function AppHomeScreen() {
  return (
    <div className="flex h-full flex-col text-[11px]">
      <div className="flex items-center justify-between px-6 pt-3.5 text-[10px] font-semibold text-app-text/80">
        <span>9:41</span>
        <span className="tracking-widest">●●● ▮</span>
      </div>

      <div className="flex justify-center pt-5">
        <Image src="/favicon.png" alt="" width={195} height={124} className="h-10 w-auto" />
      </div>

      <div className="mx-4 mt-4 flex items-center gap-2 rounded-xl border border-app-line px-3 py-2.5 text-app-muted">
        <HugeiconsIcon icon={Search01Icon} className="size-3.5" />
        What would you like to hear?
      </div>

      <div className="mx-3 mt-3 grid grid-cols-2 gap-2">
        {[
          { label: "Sermons", seed: 0 },
          { label: "Music", seed: 1 },
        ].map((c) => (
          <div key={c.label} className="flex items-start justify-between rounded-lg bg-app-card p-2">
            <span className="font-heading text-sm font-semibold">{c.label}</span>
            <CoverArt seed={c.seed} className="size-11" rounded="rounded-md" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-baseline justify-between px-4">
        <span className="font-heading text-base font-semibold">Top Favorites</span>
        <span className="text-[10px] text-app-lavender">See all</span>
      </div>
      <div className="mt-2.5 flex gap-3 px-4">
        {topFavorites.slice(0, 3).map((f) => (
          <div key={f.name} className="flex flex-col items-center gap-1.5">
            <span className="rounded-full p-[2px] ring-1 ring-white/25">
              {f.isBrand ? (
                <span className="grid size-12 place-items-center rounded-full bg-black">
                  <Image src="/favicon.png" alt="" width={195} height={124} className="w-8" />
                </span>
              ) : (
                <Avatar name={f.name} seed={f.seed} className="size-12 text-xs" />
              )}
            </span>
            <span className="text-[10px] text-app-text/85">{f.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-baseline justify-between px-4">
        <span className="font-heading text-base font-semibold">Just In</span>
        <span className="text-[10px] text-app-lavender">See all</span>
      </div>
      <div className="mt-2.5 flex gap-2 overflow-hidden pl-4">
        {[3, 5, 2].map((seed, i) => (
          <CoverArt
            key={seed}
            seed={seed}
            title={["Walk in purpose", "New mercies", "Rise"][i]}
            className="h-24 w-[38%] shrink-0 text-[13px]"
            rounded="rounded-lg"
          />
        ))}
      </div>

      {/* mini player */}
      <div className="mx-3 mt-auto mb-2 flex items-center gap-2 rounded-xl bg-app-raised p-2">
        <CoverArt seed={0} className="size-8" rounded="rounded-md" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{nowPlaying.show}</p>
          <p className="truncate text-[9px] text-app-muted">{nowPlaying.host}</p>
        </div>
        <Equalizer className="mr-1" />
        <span className="grid size-7 place-items-center rounded-full bg-white text-app">
          <HugeiconsIcon icon={PauseIcon} className="size-3.5" />
        </span>
      </div>

      <div className="flex items-center justify-around border-t border-app-line px-4 pt-2.5 pb-4">
        <HugeiconsIcon icon={Home01Icon} className="size-5 text-white" />
        <HugeiconsIcon icon={Clock01Icon} className="size-5 text-app-rose" />
        <HugeiconsIcon icon={FavouriteIcon} className="size-5 text-app-rose" />
        <HugeiconsIcon icon={UserCircleIcon} className="size-5 text-app-lavender" />
      </div>
    </div>
  );
}
