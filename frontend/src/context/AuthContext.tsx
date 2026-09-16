import React, { createContext, useContext, useState, useEffect } from "react";

export type Role = "user" | "ngo_admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: Role;
  district?: string;
  businessType?: string;
  memberSince: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string, role?: Role) => Promise<boolean>;
  logout: () => void;
  toggleRole: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER: UserProfile = {
  id: "usr_101",
  name: "Lakshmi R.",
  email: "user@finsakhi.org",
  role: "user",
  district: "Madurai, TN",
  businessType: "Handicrafts & Tailoring",
  memberSince: "2024",
};

const DEMO_ADMIN: UserProfile = {
  id: "adm_501",
  name: "Pon Crystal Coordinator",
  email: "admin@finsakhi.org",
  role: "ngo_admin",
  district: "Chennai, TN",
  businessType: "NGO Program Director",
  memberSince: "2023",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem("finsakhi_user");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return null;
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("finsakhi_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("finsakhi_user");
      }
    } catch {
      // ignore
    }
  }, [user]);

  const login = async (email: string, _password?: string, preferredRole?: Role): Promise<boolean> => {
    // Simulate short network delay
    await new Promise((res) => setTimeout(res, 400));
    
    if (preferredRole === "ngo_admin" || email.includes("admin")) {
      setUser(DEMO_ADMIN);
    } else {
      const customUser: UserProfile = {
        ...DEMO_USER,
        email: email || DEMO_USER.email,
        name: email.split("@")[0].replace(".", " ") || DEMO_USER.name,
      };
      setUser(customUser);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const toggleRole = () => {
    if (!user) return;
    if (user.role === "user") {
      setUser({ ...user, role: "ngo_admin", name: "Pon Crystal Coordinator" });
    } else {
      setUser({ ...user, role: "user", name: "Lakshmi R." });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        toggleRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
