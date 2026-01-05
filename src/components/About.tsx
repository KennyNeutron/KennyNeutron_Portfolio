import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I develop end-to-end applications with an emphasis on clean
            architecture, performance, and maintainability across mobile, web,
            and desktop platforms.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl lg:mx-0">
          <h3 className="text-xl font-semibold leading-7 text-electric-green mb-6">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mobile Stack */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Mobile Development
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                React Native, Expo, Java, Kotlin, XML, Swift,
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Databases:</span>{" "}
                Supabase, Firebase, MySQL, PostgreSQL, MongoDB, MITAI WebDB
              </div>
            </div>

            {/* Desktop Stack */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Desktop Development
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Electron, React (Vite), Python (PyQt), C#, Processing
                (ProcessingIDE)
              </p>
            </div>

            {/* Web Stack */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Web Development
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                HTML, CSS, JavaScript, TypeScript,React.js, NextJS, Tailwind
                CSS, Bootstrap
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Backend:</span>{" "}
                  Django, Flask, Node.js, FastAPI,
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Databases:
                  </span>{" "}
                  Supabase,Firebase, MongoDB, PostgreSQL, MySQL
                </div>
                <div>
                  <span className="font-medium text-foreground">Hosting:</span>{" "}
                  Hostinger, AWS, Oracle Cloud Infrastructure (OCI)
                </div>
              </div>
            </div>

            {/* Embedded Stack */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Embedded Systems
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Assembly (ASM), C, C++; PIC, Atmel, STM32, ESP32, Nordic SoCs
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Hardware:</span>{" "}
                  KiCad, Eagle (1–20 layer PCB work)
                </div>
                <div>
                  <span className="font-medium text-foreground">Tools:</span>{" "}
                  MicroPython, GPL; SketchUp, Fusion360; Proteus
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience / Career */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-xl font-semibold leading-7 text-electric-green">
            Career Profile
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">Co-Founder</h4>
              <p className="text-sm text-primary">SIRENA AI (2021)</p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">
                Software Engineer
              </h4>
              <p className="text-sm text-primary">
                BRINT Industrial Development Corp (2024)
              </p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">
                Applications Engineer
              </h4>
              <p className="text-sm text-primary">
                GER-PER Engineering (2019-2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
