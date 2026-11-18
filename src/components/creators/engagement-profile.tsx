import {
  Comment01Icon,
  FavouriteIcon,
  Link01Icon,
  LiveStreaming02Icon,
  Notification03Icon,
  WavingHand01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CoverArt } from "@/components/shared/cover-art";
import { Avatar } from "@/components/shared/media-bits";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { episodes, featuredCreator } from "@/content/showcase";

const engagementPoints = [
  { icon: Comment01Icon, title: "Conversations, not just comments", text: "Reply to listeners and keep threads going under every episode and clip." },
  { icon: WavingHand01Icon, title: "Live participation", text: "Listeners raise a hand during a broadcast; you choose who joins you on stage." },
  { icon: Notification03Icon, title: "Followers never miss you", text: "New episodes and live sessions reach your followers as notifications." },
  { icon: FavouriteIcon, title: "Signals that matter", text: "Likes, saves and shares show you what resonates — and help it reach more people." },
];

export function EngagementAndProfile() {
  return (
    <>
      <Section id="community" className="bg-surface">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Audience & community"
              title="Build a community that keeps coming back."
              description="Your audience isn't a number on a chart. On Preach Radio they comment, react, join you live and follow along week after week."
            />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {engagementPoints.map((p, i) => (
              <li key={p.title} data-reveal style={stagger(i)} className="bg-card p-6">
                <HugeiconsIcon icon={p.icon} className="size-6 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="profile">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Your profile & brand"
              title="One link for everything you make."
              description="Your profile is your channel, your station and your podcast feed in one — with your story, your work and a way for people to support you."
            />
            <ul className="mt-8 space-y-4 text-[15px]">
              {[
                "Your photo, cover, bio and handle",
                "All episodes, videos, clips and albums in one place",
                "Live status, so visitors can join instantly",
                "A support link for donations and giving",
              ].map((t, i) => (
                <li key={t} data-reveal style={stagger(i)} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile preview (in the app's dark UI) */}
          <div data-reveal className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-app text-app-text shadow-2xl">
            <div className="relative h-36">
              <CoverArt seed={featuredCreator.seed} className="absolute inset-0" rounded="rounded-none" />
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold">
                <HugeiconsIcon icon={LiveStreaming02Icon} className="size-3.5" /> Live now
              </span>
            </div>
            <div className="px-6 pb-6">
              <Avatar name={featuredCreator.name} seed={1} className="-mt-10 size-20 border-4 border-app text-xl" />
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-heading text-2xl font-semibold">{featuredCreator.name}</p>
                  <p className="text-sm text-app-muted">{featuredCreator.handle}</p>
                </div>
                <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-app">Follow</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-app-text/80">{featuredCreator.bio}</p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 py-2 text-xs font-semibold">
                  <HugeiconsIcon icon={FavouriteIcon} className="size-3.5 text-app-rose" /> Support Grace
                </span>
                <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 py-2 text-xs font-semibold">
                  <HugeiconsIcon icon={Link01Icon} className="size-3.5" /> Share profile
                </span>
              </div>
              <div className="mt-5 flex gap-5 border-b border-app-line text-sm">
                {["Episodes", "Clips", "Albums", "Live"].map((t, i) => (
                  <span key={t} className={i === 0 ? "border-b-2 border-brand pb-2 font-semibold" : "pb-2 text-app-muted"}>
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-3">
                {episodes.map((ep) => (
                  <li key={ep.title} className="flex items-center gap-3">
                    <CoverArt seed={ep.seed} className="size-11" rounded="rounded-lg" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{ep.title}</p>
                      <p className="text-xs text-app-muted">{ep.length}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
