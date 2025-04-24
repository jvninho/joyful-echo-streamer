
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-900 text-white py-4 px-4 md:px-6 sticky top-0 z-50 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="/lovable-uploads/ee4bcac4-2828-45d7-9260-48755b1e641e.png" 
            alt="Pronos Stats Empire Logo" 
            className="h-12 w-12"
          />
          <div className="text-2xl font-bold text-yellow-500">PRONOS STATS EMPIRE</div>
        </motion.div>
        
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
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/" className="hover:text-yellow-500 transition">Accueil</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="#pricing" className="font-bold text-yellow-500 hover:text-green-400 transition">Devenir VIP</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/vip" className="hover:text-yellow-500 transition">Espace VIP</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/faq" className="hover:text-yellow-500 transition">FAQ</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/contact" className="hover:text-yellow-500 transition">Nous contacter</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/login" className="hover:text-yellow-500 transition">Mon compte</Link>
            </motion.li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-3 px-2">
            <li><Link to="/" className="block py-2 hover:text-yellow-500 transition">Accueil</Link></li>
            <li><Link to="#pricing" className="block py-2 font-bold text-yellow-500 hover:text-green-400 transition">Devenir VIP</Link></li>
            <li><Link to="/vip" className="block py-2 hover:text-yellow-500 transition">Espace VIP</Link></li>
            <li><Link to="/faq" className="block py-2 hover:text-yellow-500 transition">FAQ</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-yellow-500 transition">Nous contacter</Link></li>
            <li><Link to="/login" className="block py-2 hover:text-yellow-500 transition">Mon compte</Link></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};
