
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      if (location.pathname.startsWith("/projects/")) {
        setActiveSection("projects");
      } else {
        setActiveSection("");
      }

      return;
    }
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const pageBottom =
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 5;

      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      if (pageBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";
      const activationLine = 110;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= activationLine
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  const handleNavClick = (event, id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) return;

    setActiveSection(id);

    const navbarOffset = 84;
    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.history.replaceState(null, "", `/#${id}`);

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b font-serat border-white/10 bg-back/90 shadow-lg shadow-black/5 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-19 max-w-7xl items-center justify-between"
      >
        {/* Logo */}
        <a
          href="/#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="shrink-0 font-serat text-2xl font-bold tracking-wide text-white"
        >
          RIZWAN<span className="text-secondary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-4 py-2.5 text-sm transition-all duration-300 ${isActive
                  ? "bg-secondary/10 font-semibold text-secondary"
                  : "text-gray-300 hover:bg-white/5 hover:text-secondary"
                  }`}
              >
                {label}

                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-secondary transition-all duration-300 ${isActive
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                    }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}

        <a
          href="/rizwanali.PDF"
          download="rizwanali.pdf"
          className="hidden rounded-full border border-secondary px-5 py-2.5 text-sm font-semibold text-primary transition duration-300 hover:shadow-lg hover:shadow-secondary/25 md:inline-flex"
        >
          Download CV
        </a>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-secondary hover:text-secondary md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-white/10 bg-back transition-[grid-template-rows,opacity] duration-300 md:hidden ${menuOpen
          ? "grid-rows-[1fr] opacity-100"
          : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-5 pt-3 sm:px-8">
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id;

              return (
                <a
                  key={id}
                  href={`/#${id}`}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={(event) => handleNavClick(event, id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm transition-all duration-300 ${isActive
                    ? "bg-secondary/10 font-semibold text-secondary"
                    : "text-gray-300 hover:bg-white/5 hover:text-secondary"
                    }`}
                >
                  {label}
                  {isActive && (
                    <span className="ml-2 text-secondary">●</span>
                  )}
                </a>
              );
            })}


            <a
              href="/rizwanali.PDF"
              download="rizwanali.pdf"
              tabIndex={menuOpen ? 0 : -1}
              className="mt-2 rounded-xl border border-secondary px-4 py-3 text-center text-sm font-semibold text-primary"
            >
              Download CV
            </a>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
