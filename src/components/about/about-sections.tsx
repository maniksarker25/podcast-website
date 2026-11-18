import {
  FavouriteIcon,
  HeadphonesIcon,
  Mic01Icon,
  Radio01Icon,
  SecurityCheckIcon,
  UserGroupIcon,
  Wifi01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { CoverArt } from "@/components/shared/cover-art";
import { Eyebrow, Section, SectionHeader, stagger } from "@/components/shared/section";
import type { Feature } from "@/types";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-page grid gap-14 pt-14 pb-20 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:pt-20 lg:pb-24">
        <div>
          <div data-reveal>
            <Eyebrow>About Preach Radio</Eyebrow>
          </div>
          <h1
            data-reveal
            style={stagger(1)}
            className="mt-6 font-heading text-[3.2rem] leading-[0.92] font-bold tracking-tight text-balance sm:text-7xl lg:text-[5.4rem]"
          >
            We&apos;re building a home for the voices that move people.
          </h1>
        </div>
        <div data-reveal style={stagger(2)} className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:pb-3">
          <p>
            Preach Radio is a streaming platform for radio, podcasts, video and live broadcasts — made for the
            preachers, teachers, artists and stations whose words carry weight, and for the people who tune in.
          </p>
          <p className="text-foreground">One app. Every format. A community at the centre.</p>
        </div>
      </div>
      {/* Editorial strip of artwork */}
      <div aria-hidden className="container-page pb-16">
        <div className="grid grid-cols-6 gap-3">
          {[0, 3, 1, 5, 4, 2].map((seed, i) => (
            <CoverArt
              key={seed}
              seed={seed}
              className={i % 2 ? "aspect-[3/4] translate-y-6" : "aspect-[3/4]"}
              rounded="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const audiences: Feature[] = [
  { icon: HeadphonesIcon, title: "For listeners", description: "A single place to hear teaching, worship, conversation and music — on air, on demand and live." },
  { icon: Mic01Icon, title: "For creators", description: "A profile for everything you make, the tools to go live, and the insight to grow your audience." },
  { icon: Radio01Icon, title: "For stations", description: "A modern home for your station: live streams, programmes and a direct line to your listeners." },
];

export function WhatWeAre() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What we are"
        title="A platform where stations, creators and audiences meet."
        description="Radio taught the world to gather around a voice. Podcasts let us listen on our own time. Video and live streaming brought us face to face. Preach Radio brings all of it together."
      />
      <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
        {audiences.map((a, i) => (
          <li key={a.title} data-reveal style={stagger(i)} className="bg-card p-8">
            <HugeiconsIcon icon={a.icon} className="size-7 text-primary" />
            <h3 className="mt-6 font-heading text-2xl font-semibold">{a.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{a.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function MissionVision() {
  const items = [
    {
      label: "Our mission",
      title: "Carry every meaningful message further.",
      text: "We help voices of faith, hope and culture reach the people who need to hear them — wherever they are, however they listen, on any connection.",
    },
    {
      label: "Our vision",
      title: "The world's home for live and on-demand ministry, music and conversation.",
      text: "A place where a local station, a first-time podcaster and a global ministry stand side by side, and where every listener can become part of the conversation.",
    },
  ];
  return (
    <Section className="bg-app text-app-text" id="mission">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-2">
        {items.map((item, i) => (
          <article key={item.label} data-reveal style={stagger(i)} className="bg-app p-8 sm:p-12">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-app-rose uppercase">
              <span className="font-heading text-4xl text-white/15 tabular-nums">0{i + 1}</span>
              {item.label}
            </p>
            <h2 className="mt-8 font-heading text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl">
              {item.title}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-app-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhyWeBuild() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="Why we're building it" title="Great messages deserve better than scattered platforms." />
          <div data-reveal className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Today a single ministry might stream on one service, post sermons on another, publish a podcast somewhere
              else and announce it all on social media. Listeners have to hunt for it. Creators lose the connection with
              their audience along the way.
            </p>
            <p>
              We believe the people speaking into others&apos; lives should be able to do it in one place — live and on
              demand, in audio and video — and still see who they&apos;re reaching.
            </p>
          </div>
        </div>
        <figure data-reveal className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <span aria-hidden className="absolute -top-6 right-6 font-heading text-[12rem] leading-none text-primary/10">
            &ldquo;
          </span>
          <blockquote className="relative font-heading text-3xl leading-[1.15] font-semibold tracking-tight text-balance sm:text-4xl">
            A message isn&apos;t finished when it&apos;s spoken. It&apos;s finished when it&apos;s heard.
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted-foreground">The idea behind Preach Radio</figcaption>
        </figure>
      </div>
    </Section>
  );
}

const eras = [
  { era: "Then", title: "Radio gathered us", text: "One voice, one broadcast, a whole community listening at the same moment." },
  { era: "Now", title: "On demand set us free", text: "Podcasts and video let us listen and watch on our own time — but scattered us across apps." },
  { era: "Next", title: "Live and on demand, together", text: "Broadcasts you can join, episodes you can return to, and creators you can talk back to — in one place." },
];

export function FutureOfMedia() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow="The future"
        title="Where radio, podcasts, video and live are heading."
        description="Audiences no longer think in formats. They follow people. The platforms that win will put the creator — and the community around them — at the centre."
        align="center"
      />
      <ol className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
        <span aria-hidden className="absolute top-[22px] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-border via-primary/50 to-primary md:block" />
        {eras.map((e, i) => (
          <li key={e.era} data-reveal style={stagger(i)} className="relative text-center">
            <span
              className={
                i === 2
                  ? "relative mx-auto grid size-11 place-items-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground ring-8 ring-surface"
                  : "relative mx-auto grid size-11 place-items-center rounded-full border border-border bg-card font-heading text-sm font-semibold ring-8 ring-surface"
              }
            >
              {e.era}
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold">{e.title}</h3>
            <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted-foreground">{e.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const nodes = [
  { icon: Radio01Icon, title: "Stations", text: "Broadcast live programmes and build a loyal listenership.", pos: "md:col-start-1 md:row-start-1" },
  { icon: Mic01Icon, title: "Creators", text: "Publish, go live and grow a community around their work.", pos: "md:col-start-3 md:row-start-1" },
  { icon: UserGroupIcon, title: "Audiences", text: "Listen, watch, take part — and support the voices they value.", pos: "md:col-start-2 md:row-start-3" },
];

export function HowItConnects() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How it comes together"
        title="Three communities. One frequency."
        description="Stations bring reach and rhythm. Creators bring fresh voices. Audiences bring life to both. Preach Radio is where they meet."
      />
      <div className="relative mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:gap-x-6 md:gap-y-4">
        {/* connectors (desktop) */}
        <svg aria-hidden className="pointer-events-none absolute inset-0 hidden size-full md:block" preserveAspectRatio="none" viewBox="0 0 300 300">
          <path d="M60 60 L150 150 L240 60 M150 150 L150 245" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
        </svg>
        {nodes.map((n, i) => (
          <div key={n.title} data-reveal style={stagger(i)} className={`relative rounded-3xl border border-border bg-card p-6 ${n.pos}`}>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={n.icon} className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-semibold">{n.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
          </div>
        ))}
        <div data-reveal className="relative grid place-items-center py-6 md:col-start-2 md:row-start-2 md:py-10">
          <span className="grid size-28 place-items-center rounded-full bg-app shadow-[0_0_0_10px_color-mix(in_oklab,var(--primary)_12%,transparent),0_20px_50px_-20px_var(--primary)]">
            <Image src="/favicon.png" alt="Preach Radio" width={195} height={124} className="w-20" />
          </span>
        </div>
      </div>
    </Section>
  );
}

const principles: Feature[] = [
  { icon: FavouriteIcon, title: "People first", description: "We build for the listener in the pew and the creator behind the mic — not for engagement at any cost." },
  { icon: SecurityCheckIcon, title: "Trustworthy by design", description: "Creator review, reporting and moderation keep Preach Radio a place families can rely on." },
  { icon: Wifi01Icon, title: "Built for every connection", description: "Adaptive streaming so a sermon plays smoothly on a city fibre line or rural mobile data." },
  { icon: UserGroupIcon, title: "Community over audience", description: "Comments, live participation and direct support turn listeners into a community." },
];

export function Principles() {
  return (
    <Section className="border-t border-border">
      <SectionHeader eyebrow="What we stand for" title="The principles behind every decision." />
      <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {principles.map((p, i) => (
          <li key={p.title} data-reveal style={stagger(i)} className="flex gap-5">
            <span className="font-heading text-3xl font-semibold text-primary/40 tabular-nums">0{i + 1}</span>
            <div>
              <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold">
                <HugeiconsIcon icon={p.icon} className="size-5 text-primary" />
                {p.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
