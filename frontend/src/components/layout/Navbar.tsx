import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, User, LayoutDashboard, LogIn } from "lucide-react";
import { useLanguage, type Lang } from "@/i18n/language";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/ui/Logo";

const LINKS = [
  { to: "/", key: "home" },
  { to: "/learn", key: "learn" },
  { to: "/quiz", key: "quiz" },
  { to: "/survey", key: "survey" },
  { to: "/schemes", key: "schemes" },
  { to: "/resources", key: "resources" },
  { to: "/contact", key: "contact" },
] as const;

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-card p-1 text-xs sm:text-sm shadow-xs ${className}`}
      role="group"
      aria-label={t.nav.switchLang}
      data-testid="language-switcher"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        data-testid="lang-option-en"
        className={`rounded-full px-3 py-1 font-semibold transition-all duration-150 ${
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-xs"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        English
      </button>
      <span className="text-border px-0.5 font-light" aria-hidden>|</span>
      <button
        type="button"
        onClick={() => setLang("ta")}
        aria-pressed={lang === "ta"}
        data-testid="lang-option-ta"
        className={`rounded-full px-3 py-1 font-semibold transition-all duration-150 font-tamil ${
          lang === "ta"
            ? "bg-primary text-primary-foreground shadow-xs"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const { isAuthenticated, user } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md transition-all duration-200 ${
        scrolled ? "border-border shadow-xs" : "border-border/40"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4" aria-label="Main Navigation">
        <Link to="/" className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-primary rounded-lg" data-testid="nav-brand">
          <Logo size="md" />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {LINKS.map((l) => (
            <li key={l.key}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                {t.nav[l.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher className="hidden sm:inline-flex" />

          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-primary hover:bg-primary/20 transition-colors"
              data-testid="nav-dashboard-link"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">{user?.name?.split(" ")[0]}</span>
              <span className="sm:hidden">{t.nav.dashboard}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs sm:text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
              data-testid="nav-login-link"
            >
              <LogIn className="h-4 w-4" />
              <span>{t.nav.login}</span>
            </Link>
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground xl:hidden hover:bg-muted"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            data-testid="nav-menu-button"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card xl:hidden shadow-lg animate-page-in" data-testid="mobile-menu">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {LINKS.map((l) => (
              <li key={l.key}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-lg px-3.5 py-2.5 text-base font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {t.nav[l.key]}
                </NavLink>
              </li>
            ))}
            
            <li className="pt-3 pb-1 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground">{t.nav.switchLang}</span>
              <LanguageSwitcher />
            </li>

            {!isAuthenticated ? (
              <li className="pt-2">
                <Link
                  to="/login"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-base font-bold text-primary-foreground shadow-xs"
                >
                  <LogIn className="h-5 w-5" />
                  {t.nav.login}
                </Link>
              </li>
            ) : (
              <li className="pt-2">
                <Link
                  to="/dashboard"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary/10 py-3 text-base font-bold text-primary"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  {t.nav.dashboard} ({user?.name})
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
