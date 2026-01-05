import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Building digital experiences that matter
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm Kenny Neutron, a full-stack developer passionate about creating
            intuitive and performant web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#projects"
              className="rounded-md bg-zinc-900 dark:bg-zinc-50 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
            >
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
