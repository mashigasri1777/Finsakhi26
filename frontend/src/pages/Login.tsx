import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, LogIn, Sparkles, Lock, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { useAuth, type Role } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/ui/Logo";
import { toast } from "sonner";

export default function Login() {
  const { lang, t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error(t.auth.loginError);
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      toast.success(t.auth.loginSuccess);
      navigate("/dashboard");
    } catch {
      toast.error("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (role: Role) => {
    setLoading(true);
    try {
      const demoEmail = role === "ngo_admin" ? "admin@finsakhi.org" : "user@finsakhi.org";
      await login(demoEmail, "password123", role);
      toast.success(t.auth.loginSuccess);
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:py-16 animate-page-in">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex justify-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          {t.auth.loginTitle}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {t.auth.loginSubtitle}
        </p>
      </div>

      <Card className="p-6 sm:p-8 border-border shadow-md">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="login-email" className="text-xs font-semibold">
              {t.auth.emailLabel}
            </Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="login-email"
                type="email"
                required
                placeholder={t.auth.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="login-pass" className="text-xs font-semibold">
                {t.auth.passwordLabel}
              </Label>
              <button
                type="button"
                className="text-xs text-primary font-medium hover:underline"
                onClick={() => toast.info("Password reset link will be sent to your email.")}
              >
                {t.auth.forgotPassword}
              </button>
            </div>
            <div className="relative mt-1">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="login-pass"
                type={showPassword ? "text" : "password"}
                required
                placeholder={t.auth.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-12 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-semibold px-1 py-0.5"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(c) => setRememberMe(!!c)}
            />
            <Label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer">
              {t.auth.rememberMe}
            </Label>
          </div>

          <Button type="submit" disabled={loading} className="w-full font-bold py-2.5 shadow-xs">
            {loading ? (
              <span>{t.auth.loggingIn}</span>
            ) : (
              <>
                <LogIn className="h-4 w-4 mr-1.5" />
                {t.auth.loginButton}
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 border-t border-border pt-6 space-y-3 text-center text-xs">
          <p className="text-muted-foreground font-medium">
            {t.auth.noAccount}{" "}
            <button
              type="button"
              className="text-primary font-bold hover:underline"
              onClick={() => toast.info("Registration modal ready. Enter email above to test!")}
            >
              {t.auth.createAccount}
            </button>
          </p>

          <div className="rounded-xl bg-muted/50 p-4 space-y-2 border border-border/60">
            <p className="font-bold text-foreground flex items-center justify-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              {t.auth.demoNotice}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-[11px] font-semibold border-primary/30"
                onClick={() => handleDemoLogin("user")}
              >
                {t.auth.userDemo}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-[11px] font-semibold border-emerald-300 text-emerald-800"
                onClick={() => handleDemoLogin("ngo_admin")}
              >
                {t.auth.adminDemo}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
