
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import VipAccess from "./pages/VipAccess";
import Login from "./pages/Login";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import Conditions from "./pages/Conditions";
import AdminDashboard from "./pages/AdminDashboard";
import { useEffect } from "react";
import { initializeMongoClient } from "./lib/mongoClient";

const queryClient = new QueryClient();

// Fonction pour initialiser MongoDB de manière sécurisée
// Dans une vraie application de production, cette connexion devrait être
// gérée côté serveur et non côté client
const initMongoDB = () => {
  try {
    // ⚠️ Pour des raisons de sécurité, la chaîne de connexion ne devrait pas être exposée
    // dans le code source du frontend. Ceci est une solution temporaire pour le développement.
    // En production, cette logique devrait être dans une API backend sécurisée.
    const databaseUri = process.env.MONGODB_URI || 
      prompt("Veuillez entrer l'URI de connexion MongoDB (uniquement au premier chargement):");
    
    if (databaseUri) {
      initializeMongoClient(databaseUri);
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de MongoDB:", error);
  }
};

const App = () => {
  useEffect(() => {
    initMongoDB();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-[#0a0a0a] text-green-400">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vip" element={<VipAccess />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/conditions" element={<Conditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
