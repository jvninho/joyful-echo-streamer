
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-akatsuki-black text-white py-8 text-center animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-6 gap-8">
          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-akatsuki-gold transition">Accueil</Link></li>
              <li><Link to="/#pricing" className="hover:text-akatsuki-gold transition">Devenir VIP</Link></li>
              <li><Link to="/faq" className="hover:text-akatsuki-gold transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-akatsuki-gold transition">Contact</Link></li>
            </ul>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/vip" className="hover:text-akatsuki-gold transition">Pronostics Football</Link></li>
              <li><Link to="/vip" className="hover:text-akatsuki-gold transition">Pronostics Tennis</Link></li>
              <li><Link to="/vip" className="hover:text-akatsuki-gold transition">Pronostics Basketball</Link></li>
              <li><Link to="/vip" className="hover:text-akatsuki-gold transition">Pronostics Rugby</Link></li>
            </ul>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="hover:text-akatsuki-gold transition">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:text-akatsuki-gold transition">Politique de confidentialité</Link></li>
              <li><Link to="/conditions" className="hover:text-akatsuki-gold transition">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p>&copy; {new Date().getFullYear()} PRONOS STATS EMPIRE. Tous droits réservés.</p>
          <p className="mt-2 text-sm text-gray-500">Jeu responsable. Les paris comportent des risques.</p>
        </div>
      </div>
    </footer>
  );
};
