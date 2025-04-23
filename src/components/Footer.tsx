
export const Footer = () => {
  return (
    <footer className="bg-akatsuki-black text-white py-8 text-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-6 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-akatsuki-gold transition">Accueil</a></li>
              <li><a href="#pricing" className="hover:text-akatsuki-gold transition">Devenir VIP</a></li>
              <li><a href="#faq" className="hover:text-akatsuki-gold transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-akatsuki-gold transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-akatsuki-gold transition">Pronostics Football</a></li>
              <li><a href="#" className="hover:text-akatsuki-gold transition">Pronostics Tennis</a></li>
              <li><a href="#" className="hover:text-akatsuki-gold transition">Pronostics Basketball</a></li>
              <li><a href="#" className="hover:text-akatsuki-gold transition">Pronostics Rugby</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-akatsuki-gold">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-akatsuki-gold transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-akatsuki-gold transition">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-akatsuki-gold transition">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p>&copy; {new Date().getFullYear()} FRG PRONOS. Tous droits réservés.</p>
          <p className="mt-2 text-sm text-gray-500">Jeu responsable. Les paris comportent des risques.</p>
        </div>
      </div>
    </footer>
  );
};
