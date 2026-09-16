import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Learn from "@/pages/Learn";
import ModuleDetail from "@/pages/ModuleDetail";
import Quiz from "@/pages/Quiz";
import Survey from "@/pages/Survey";
import Schemes from "@/pages/Schemes";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:slug" element={<ModuleDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
