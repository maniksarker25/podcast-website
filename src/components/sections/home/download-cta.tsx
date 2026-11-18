import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/shared/store-buttons";

export function DownloadCta() {
  return (
    <section id="download" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[2rem] bg-app px-6 py-16 text-center text-app-text sm:px-12 sm:py-20"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/35 blur-[110px]" />
            <div className="absolute right-[-10%] bottom-[-30%] h-[360px] w-[420px] rounded-full bg-app-lavender/20 blur-[110px]" />
            <div className="grain absolute inset-0" />
          </div>
          <Image src="/favicon.png" alt="" width={195} height={124} className="mx-auto h-16 w-auto" />
          <h2 className="mx-auto mt-8 max-w-2xl font-heading text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl">
            Tune in. Turn up. Take part.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-app-muted">
            Stations, podcasts, video and live broadcasts — in one app, in your pocket.
          </p>
          <StoreButtons tone="inverted" className="mt-10 justify-center" />
          <p className="mt-8 text-sm text-app-muted">
            Have something to say?{" "}
            <Link href="/creators" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Start as a creator
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
