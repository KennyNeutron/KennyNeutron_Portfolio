import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-8 mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl">
              Building digital experiences that matter.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              I'm{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Kenny Walter Diolola
              </span>{" "}
              (Kenny Neutron), a developer with full-stack experience across
              Mobile, Web and Desktop applications, delivering end-to-end
              solutions from UI to backend and databases. I can also do embedded
              systems which was my first expertise.
            </p>
            <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg hover:shadow-primary/20 transition-all"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full border-4 border-background shadow-2xl overflow-hidden ring-1 ring-border/50">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Kenny Neutron"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Wash */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </section>
  );
}
