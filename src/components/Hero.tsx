import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Building digital experiences <br /> that matter.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I'm Kenny Neutron, a full-stack developer passionate about creating
            intuitive and performant web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              className="rounded-full bg-primary hover:bg-primary/80 transition-all shadow-[0_0_20px_-5px_hsl(217,91%,60%)]"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-neutral-300 hover:text-white"
            >
              <a href="#contact">
                Contact me{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
