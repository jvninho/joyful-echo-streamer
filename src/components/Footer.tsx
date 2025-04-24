
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 text-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-6 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-bold text-lg mb-3 text-yellow-500">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-500 transition">Accueil</Link></li>
              <li><Link to="/#pricing" className="hover:text-yellow-500 transition">Devenir VIP</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-500 transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-bold text-lg mb-3 text-yellow-500">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/vip" className="hover:text-yellow-500 transition">Pronostics Football</Link></li>
              <li><Link to="/vip" className="hover:text-yellow-500 transition">Pronostics Tennis</Link></li>
              <li><Link to="/vip" className="hover:text-yellow-500 transition">Pronostics Basketball</Link></li>
              <li><Link to="/vip" className="hover:text-yellow-500 transition">Pronostics Rugby</Link></li>
            </ul>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-bold text-lg mb-3 text-yellow-500">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="hover:text-yellow-500 transition">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:text-yellow-500 transition">Politique de confidentialité</Link></li>
              <li><Link to="/conditions" className="hover:text-yellow-500 transition">Conditions d'utilisation</Link></li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-green-800 pt-6">
          <p>&copy; {new Date().getFullYear()} PRONOS STATS EMPIRE. Tous droits réservés.</p>
          <p className="mt-2 text-sm text-gray-300">Jeu responsable. Les paris comportent des risques.</p>
        </div>
      </div>
    </footer>
  );
};
