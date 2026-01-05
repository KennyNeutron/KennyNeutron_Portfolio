import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Kenny Neutron</span>
          </Link>
          <div className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <div className="md:hidden">
            {/* Mobile Menu Placeholder - could use Sheet later if needed */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="#projects">Menu</Link>
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/KennyNeutron" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
