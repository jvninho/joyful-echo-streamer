
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const MentionsLegales = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>
          
          <div className="space-y-8 bg-gray-50 p-8 rounded-lg shadow">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Éditeur du site</h2>
              <p className="mb-2"><strong>PRONOS STATS EMPIRE</strong></p>
              <p className="mb-2">SIRET : 123 456 789 00010</p>
              <p className="mb-2">Adresse : 123 Avenue des Pronostics, 75000 Paris</p>
              <p className="mb-2">Téléphone : 01 23 45 67 89</p>
              <p className="mb-2">Email : contact@pronos-stats-empire.fr</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Directeur de la publication</h2>
              <p>Jean Dupont, Directeur Général</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Hébergement</h2>
              <p className="mb-2"><strong>Société d'hébergement</strong></p>
              <p className="mb-2">Raison sociale : CloudHost SAS</p>
              <p className="mb-2">Adresse : 1 rue du Cloud, 69000 Lyon</p>
              <p>Téléphone : 04 56 78 90 12</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Propriété intellectuelle</h2>
              <p>L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive de PRONOS STATS EMPIRE ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Données personnelles</h2>
              <p>Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion de notre clientèle. Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès et de rectification aux informations qui vous concernent. Pour en savoir plus, consultez notre politique de confidentialité.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
