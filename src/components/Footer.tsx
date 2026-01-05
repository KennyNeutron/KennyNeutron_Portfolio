export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 border-t border-white/10 mt-auto">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div className="pb-6">
          <a
            href="#about"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            About
          </a>
        </div>
        <div className="pb-6">
          <a
            href="#projects"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            Projects
          </a>
        </div>
        <div className="pb-6">
          <a
            href="#contact"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {/* Add Social Icons here if needed */}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
        &copy; 2026 Kenny Neutron. All rights reserved.
      </p>
    </footer>
  );
}
