import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "AIDme Smart Watch",
      description:
        "A smart wearable for emergency response, securing 3rd Place at the Regional Invention Contest (2021).",
      href: "https://www.facebook.com/share/p/17oMhEUYQd/",
      tag: "Embedded System",
    },
    {
      id: 2,
      name: "SIRENA AI",
      description:
        "An AI-powered drowning detection system. Co-founded this startup to save lives through technology.",
      href: "https://www.facebook.com/Sirena.fb",
      tag: "AI / Startup",
    },
    {
      id: 3,
      name: "PhlegmX",
      description:
        "AI-powered lung examination for Tuberculosis detection using YOLO via Roboflow.",
      href: "#",
      tag: "AI / MedTech",
    },
    {
      id: 4,
      name: "AquaMate",
      description:
        "Automated Aquaculture Monitoring and Aeration System with real-time sensors and mobile control to optimize pond health and energy.",
      href: "https://github.com/KennyNeutron/AquaMate",
      tag: "IoT / AgriTech",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From embedded systems to AI-powered applications, here are some of
            the innovations I've brought to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 border-muted bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="mb-2 bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/50 shadow-[0_0_10px_-3px_rgba(74,222,128,0.5)] transition-all">
                    {project.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Optional: Add image/tech stack here later */}
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white border border-blue-500/50 shadow-[0_0_10px_-3px_rgba(59,130,246,0.5)] transition-all"
                >
                  <a
                    href={project.href}
                    target={project.href !== "#" ? "_blank" : "_self"}
                  >
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
