import {
  Bookmark01Icon,
  Comment01Icon,
  FavouriteIcon,
  LiveStreaming02Icon,
  Notification03Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar } from "@/components/shared/media-bits";
import { Section, SectionHeader, stagger } from "@/components/shared/section";

const actions = [
  { icon: UserAdd01Icon, title: "Follow", text: "Keep up with the creators and stations you love." },
  { icon: FavouriteIcon, title: "Like", text: "Show appreciation and help great content travel." },
  { icon: Comment01Icon, title: "Comment", text: "Join the conversation under every episode and clip." },
  { icon: Bookmark01Icon, title: "Save", text: "Keep favourites for later in your own library." },
];

const thread = [
  { name: "Tolu Ade", text: "Listened twice this morning. The part about patience — exactly what I needed.", likes: 48, seed: 2 },
  { name: "Grace Adeyemi", text: "Thank you, Tolu! Part 3 drops on Sunday.", likes: 31, seed: 1, creator: true },
];

export function Community() {
  return (
    <Section id="community" className="bg-surface">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Community"
            title="Not just an audience. A community."
            description="Every podcast, clip and broadcast is a place to gather. Listeners respond, creators reply, and the conversation keeps going long after the episode ends."
          />
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {actions.map((a, i) => (
              <li key={a.title} data-reveal style={stagger(i)}>
                <HugeiconsIcon icon={a.icon} className="size-6 text-primary" />
                <p className="mt-3 font-heading text-xl font-semibold">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col justify-center gap-4">
          {/* comment thread */}
          <div data-reveal className="rounded-3xl border border-border bg-card p-5 shadow-xl shadow-black/5 sm:p-6">
            <p className="text-sm font-semibold">
              Comments <span className="font-normal text-muted-foreground">· 214</span>
            </p>
            <ul className="mt-4 space-y-5">
              {thread.map((c, i) => (
                <li key={c.name} className={i ? "ml-11 border-l-2 border-border pl-4" : ""}>
                  <div className="flex gap-3">
                    <Avatar name={c.name} seed={c.seed} className="size-8 text-[11px]" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        {c.name}
                        {c.creator && (
                          <span className="ml-2 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary uppercase">
                            Creator
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/85">{c.text}</p>
                      <p className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <HugeiconsIcon icon={FavouriteIcon} className="size-3.5" /> {c.likes}
                        </span>
                        <span>Reply</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* notification */}
          <div
            data-reveal
            style={stagger(3)}
            className="flex items-center gap-3 self-end rounded-2xl border border-white/10 bg-app p-3.5 pr-5 text-app-text shadow-2xl sm:-mr-4"
          >
            <span className="relative grid size-10 place-items-center rounded-xl bg-brand">
              <HugeiconsIcon icon={LiveStreaming02Icon} className="size-5" />
            </span>
            <div>
              <p className="text-[13px] font-semibold">Grace Adeyemi is live now</p>
              <p className="text-xs text-app-muted">“Sunday Evening Live” — tap to join</p>
            </div>
            <HugeiconsIcon icon={Notification03Icon} className="ml-2 size-4 text-app-muted" />
          </div>
        </div>
      </div>
    </Section>
  );
}
