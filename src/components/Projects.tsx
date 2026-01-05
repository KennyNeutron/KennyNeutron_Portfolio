export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, Stripe, and Prisma.",
      href: "#",
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      description:
        "Real-time analytics dashboard using React, D3.js, and WebSockets.",
      href: "#",
    },
    {
      id: 3,
      name: "Social Media App",
      description:
        "A social networking application featuring real-time messaging and media sharing.",
      href: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            A selection of projects that showcase my skills and passion for
            development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group/card flex max-w-xl flex-col items-start justify-between p-6 rounded-2xl shadow-sm transition-all border border-white/10 bg-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(217,91%,60%,0.3)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2023-01-01" className="text-muted-foreground">
                  Jan 2026
                </time>
                <a
                  href={project.href}
                  className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground hover:bg-secondary/80"
                >
                  Full Stack
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-card-foreground group-hover:text-primary">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
