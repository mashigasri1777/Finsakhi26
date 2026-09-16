import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { LanguageSwitcher } from "./Navbar";
import Logo from "@/components/ui/Logo";
import { contactDetails } from "@/data/contact";

const LINKS = [
  { to: "/", key: "home" },
  { to: "/learn", key: "learn" },
  { to: "/quiz", key: "quiz" },
  { to: "/survey", key: "survey" },
  { to: "/schemes", key: "schemes" },
  { to: "/resources", key: "resources" },
  { to: "/contact", key: "contact" },
  { to: "/login", key: "login" },
] as const;

export default function Footer() {
  const { t, setLang, lang } = useLanguage();

  return (
    <footer className="border-t border-border bg-card text-card-foreground" data-testid="footer">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand & About */}
        <div className="sm:col-span-2 lg:col-span-2 space-y-4">
          <Link to="/" className="inline-block">
            <Logo size="lg" />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t.footer.about}</p>
          
          <div className="pt-2 text-xs text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{contactDetails.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{contactDetails.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{contactDetails.email}</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label={t.footer.links}>
          <h2 className="text-sm font-bold text-foreground tracking-wide uppercase">{t.footer.links}</h2>
          <ul className="mt-3.5 space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.key}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selection */}
        <div>
          <h2 className="text-sm font-bold text-foreground tracking-wide uppercase">{t.footer.language}</h2>
          <div className="mt-3.5">
            <LanguageSwitcher />
          </div>
          <div className="mt-4 flex gap-4 text-sm font-medium">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en" ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="footer-lang-en"
            >
              {lang === "en" ? "✓ " : ""}English
            </button>
            <button
              type="button"
              onClick={() => setLang("ta")}
              className={`transition-colors font-tamil ${lang === "ta" ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="footer-lang-ta"
            >
              {lang === "ta" ? "✓ " : ""}தமிழ்
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">{contactDetails.ngoName}</p>
            <p className="mt-0.5">{t.footer.attribution}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FinSakhi. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href={contactDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href={contactDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href={contactDetails.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
