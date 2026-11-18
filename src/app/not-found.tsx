import { ButtonLink } from "@/components/shared/button-link";
import { Waveform } from "@/components/shared/media-bits";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70dvh] place-items-center py-20 text-center">
      <div>
        <Waveform bars={36} seed={9} progress={0} className="mx-auto h-12 max-w-xs text-muted-foreground" />
        <p className="mt-8 font-heading text-7xl font-bold tracking-tight sm:text-8xl">404</p>
        <h1 className="mt-3 font-heading text-3xl font-semibold">This station is off the air.</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/support" variant="secondary">
            Visit support
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
