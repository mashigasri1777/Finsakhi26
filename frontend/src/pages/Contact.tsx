import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldAlert, Send, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { contactDetails } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error(
        lang === "en"
          ? "Please fill in your name and phone number."
          : "தயவுசெய்து உங்கள் பெயர் மற்றும் கைபேசி எண்ணை உள்ளிடவும்."
      );
      return;
    }
    setSubmitted(true);
    toast.success(t.contact.successMessage);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 animate-page-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">
          {lang === "en" ? "Community Support Desk" : "சமூக உதவி மையம்"}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.contact.title}
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Emergency Cyber Fraud Alert Card */}
      <div className="mt-8 rounded-2xl border border-rose-300 bg-rose-50/80 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-xs">
              <ShieldAlert className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold text-rose-950 text-base sm:text-lg">
                {t.contact.cyberAlertTitle}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-rose-900 leading-relaxed max-w-2xl">
                {t.contact.cyberAlertText}
              </p>
            </div>
          </div>
          <a
            href={`tel:${contactDetails.helplines.cyberFraud.number}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-rose-700 transition shadow-xs"
          >
            <Phone className="h-4 w-4" />
            {lang === "en"
              ? `Dial ${contactDetails.helplines.cyberFraud.number} Now`
              : `${contactDetails.helplines.cyberFraud.number}-ஐ அழையுங்கள்`}
          </a>
        </div>
      </div>

      {/* Main Grid: Contact Info & Message Form */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              {t.contact.getInTouch}
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t.contact.phone}</div>
                  <div className="text-muted-foreground mt-0.5">{contactDetails.phone} / {contactDetails.phoneAlt}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t.contact.email}</div>
                  <div className="text-muted-foreground mt-0.5">{contactDetails.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t.contact.address}</div>
                  <div className="text-muted-foreground mt-0.5 leading-relaxed">
                    {contactDetails.ngoName}, {contactDetails.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t.contact.hours}</div>
                  <div className="text-muted-foreground mt-0.5">{contactDetails.workingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-border">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Globe className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">NGO Website</div>
                  <a
                    href={contactDetails.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-0.5 block font-medium"
                  >
                    {contactDetails.website}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Contact Form */}
        <div>
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              {t.contact.sendMessage}
            </h2>

            {submitted ? (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-emerald-950 text-base">
                  {lang === "en" ? "Inquiry Sent!" : "செய்தி அனுப்பப்பட்டது!"}
                </h3>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {t.contact.successMessage}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 text-xs font-bold border-emerald-300"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", message: "" });
                  }}
                >
                  {lang === "en" ? "Send Another Inquiry" : "மற்றொரு செய்தியை அனுப்ப"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <Label htmlFor="c-name" className="font-semibold">
                    {t.contact.nameLabel} *
                  </Label>
                  <Input
                    id="c-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="c-phone" className="font-semibold">
                    {t.contact.phoneLabel} *
                  </Label>
                  <Input
                    id="c-phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.contact.phonePlaceholder}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="c-msg" className="font-semibold">
                    {t.contact.messageLabel}
                  </Label>
                  <Textarea
                    id="c-msg"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full font-bold py-2.5 shadow-xs">
                  <Send className="h-4 w-4 mr-1.5" />
                  {t.contact.submitButton}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
