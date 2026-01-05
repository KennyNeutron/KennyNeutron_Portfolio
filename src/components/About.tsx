import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <Separator className="my-6" />
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My journey as an inventor and entrepreneur has been marked by a
            relentless pursuit of innovation and a passion for pushing the
            boundaries of what's possible.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-xl font-semibold leading-7 text-electric-green">
            What I Do 🛠️
          </h3>
          <ul className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
            <li className="flex gap-x-3">
              <strong className="text-foreground">Embedded Systems:</strong>
              Hardware (PCB Design, Microcontrollers), Firmware (C/C++, ASM), 3D
              Design.
            </li>
            <li className="flex gap-x-3">
              <strong className="text-foreground">Software Development:</strong>
              Desktop Apps (Python, C#), Mobile Apps (Flutter, Java, Kotlin).
            </li>
            <li className="flex gap-x-3">
              <strong className="text-foreground">Web Development:</strong>
              Full Stack (React, Next.js, Django, Node.js), Database Solutions
              (SQL/NoSQL).
            </li>
            <li className="flex gap-x-3">
              <strong className="text-foreground">Innovation:</strong>
              From concept to production, designing functional consumer
              electronics.
            </li>
          </ul>
        </div>

        {/* Experience / Career */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-xl font-semibold leading-7 text-foreground">
            Career Profile 🌟
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">
                Founder & Tech Lead
              </h4>
              <p className="text-sm text-electric-blue">
                PROFtech Consumer Electronics (2023)
              </p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">Co-Founder</h4>
              <p className="text-sm text-electric-blue">SIRENA AI (2021)</p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">
                Software Engineer
              </h4>
              <p className="text-sm text-electric-blue">
                BRINT Industrial Development Corp (2024)
              </p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <h4 className="font-semibold text-foreground">
                Embedded Systems Engineer
              </h4>
              <p className="text-sm text-electric-blue">
                GER-PER Engineering (2019-2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
