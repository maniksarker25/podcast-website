import {
  FavouriteIcon,
  Location01Icon,
  SparklesIcon,
  UserAdd01Icon,
  Download04Icon,
  CheckmarkCircle02Icon,
  Rocket01Icon,
  VideoReplayIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonLink } from "@/components/shared/button-link";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { StoreButtons } from "@/components/shared/store-buttons";
import { siteConfig } from "@/config/site";
import type { Feature } from "@/types";

const opportunities: Feature[] = [
  { icon: SparklesIcon, title: "Get featured", description: "Standout shows and creators are highlighted across the app — on the home screen, in banners and in curated rows." },
  { icon: VideoReplayIcon, title: "Grow with clips", description: "Short clips are the easiest way for new listeners to discover you. Turn your best moments into followers." },
  { icon: Location01Icon, title: "Reach your city first", description: "Nearby discovery puts you in front of listeners around you — the start of a loyal local audience." },
  { icon: FavouriteIcon, title: "Be supported", description: "Add your support link so listeners can give directly to your ministry, show or project." },
];

const onboarding = [
  { icon: Download04Icon, title: "Get the app", text: "Download Preach Radio and create your account." },
  { icon: UserAdd01Icon, title: "Apply as a creator", text: "Set up your creator profile with your name, photo and bio." },
  { icon: CheckmarkCircle02Icon, title: "Get approved", text: "Our team reviews new creator profiles to keep the community trustworthy." },
  { icon: Rocket01Icon, title: "Publish and go live", text: "Upload your first episode or start a broadcast — your audience is waiting." },
];

export function Opportunities() {
  return (
    <Section id="growth">
      <SectionHeader
        eyebrow="Opportunities"
        title="Room to grow, at every stage."
        description="Whether you're starting with your first ten listeners or serving thousands every week, Preach Radio helps the right people find you."
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {opportunities.map((o, i) => (
          <li
            key={o.title}
            data-reveal
            style={stagger(i)}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={o.icon} className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold">{o.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Onboarding() {
  return (
    <section id="get-started" className="scroll-mt-20 pb-20 sm:pb-28">
      <div className="container-page">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[2rem] bg-app px-6 py-14 text-app-text sm:px-12 sm:py-16"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute -top-1/3 right-0 h-[420px] w-[560px] rounded-full bg-brand/30 blur-[110px]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-heading text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl">
                Your audience is ready when you are.
              </h2>
              <p className="mt-5 max-w-md text-lg text-app-muted">
                Becoming a creator takes a few minutes. Questions first? Our creator team is happy to help.
              </p>
              <StoreButtons tone="inverted" className="mt-8" />
              <div className="mt-4">
                <ButtonLink href={`mailto:${siteConfig.contact.creatorsEmail}`} variant="ghost" className="-ml-6 text-white hover:bg-white/10" arrow>
                  Talk to the creator team
                </ButtonLink>
              </div>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {onboarding.map((s, i) => (
                <li key={s.title} style={stagger(i)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <HugeiconsIcon icon={s.icon} className="size-5 text-app-rose" />
                    <span className="font-heading text-sm text-app-muted">Step {i + 1}</span>
                  </div>
                  <p className="mt-4 font-heading text-xl font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-app-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
