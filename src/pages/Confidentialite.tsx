
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const Confidentialite = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
          
          <div className="space-y-8 bg-gray-50 p-8 rounded-lg shadow">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Collecte des informations personnelles</h2>
              <p className="mb-3">PRONOS STATS EMPIRE collecte les informations suivantes :</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Nom, prénom</li>
                <li>Adresse email</li>
                <li>Informations de paiement (lors d'un achat)</li>
                <li>Informations de connexion et d'utilisation du site</li>
              </ul>
              <p>Les informations personnelles sont collectées par le biais de formulaires et grâce à l'interactivité établie entre vous et notre site web.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Utilisation des informations</h2>
              <p className="mb-3">Les informations collectées nous permettent de :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Traiter vos commandes et abonnements</li>
                <li>Vous contacter au sujet de votre compte</li>
                <li>Vous envoyer des informations ou offres promotionnelles (avec votre consentement)</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Effectuer des analyses statistiques</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Partage des informations personnelles</h2>
              <p>Nous nous engageons à ne pas vendre, louer ou échanger vos informations personnelles à des tiers sans votre consentement, sauf dans le cas où la loi nous y oblige.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
              <p className="mb-3">Notre site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous aident à :</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Mémoriser vos préférences</li>
                <li>Comprendre comment vous utilisez notre site</li>
                <li>Améliorer nos services</li>
              </ul>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou vous alerter lorsque des cookies sont envoyés.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Droit d'accès et de rectification</h2>
              <p>Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse email : confidentialite@pronos-stats-empire.fr</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite;
