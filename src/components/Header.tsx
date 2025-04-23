
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-akatsuki-black text-white py-4 px-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/e77e5a53-8558-4ddf-b276-0b1ed3b20282.png" 
            alt="FRG Pronos Logo" 
            className="h-12 w-12"
          />
          <div className="text-2xl font-bold text-akatsuki">FRG PRONOS</div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-akatsuki-gold transition">Accueil</Link></li>
            <li><Link to="#pricing" className="font-bold text-akatsuki-gold hover:text-akatsuki transition">Devenir VIP</Link></li>
            <li><Link to="/vip" className="hover:text-akatsuki-gold transition">Espace VIP</Link></li>
            <li><Link to="/faq" className="hover:text-akatsuki-gold transition">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-akatsuki-gold transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-akatsuki-gold transition">Mon compte</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-3 px-2">
            <li><Link to="/" className="block py-2 hover:text-akatsuki-gold transition">Accueil</Link></li>
            <li><Link to="#pricing" className="block py-2 font-bold text-akatsuki-gold hover:text-akatsuki transition">Devenir VIP</Link></li>
            <li><Link to="/vip" className="block py-2 hover:text-akatsuki-gold transition">Espace VIP</Link></li>
            <li><Link to="/faq" className="block py-2 hover:text-akatsuki-gold transition">FAQ</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-akatsuki-gold transition">Contact</Link></li>
            <li><Link to="/login" className="block py-2 hover:text-akatsuki-gold transition">Mon compte</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
