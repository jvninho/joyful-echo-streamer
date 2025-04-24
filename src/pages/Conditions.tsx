
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const Conditions = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <h1 className="text-3xl font-bold mb-8 text-center">Conditions Générales d'Utilisation</h1>
          
          <div className="space-y-8 bg-gray-50 p-8 rounded-lg shadow">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Préambule</h2>
              <p>Les présentes conditions générales d'utilisation régissent l'utilisation du site PRONOS STATS EMPIRE. En accédant à ce site, vous acceptez ces conditions sans réserve. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Description des services</h2>
              <p>PRONOS STATS EMPIRE propose des services de pronostics sportifs sous forme d'abonnements. Nos pronostics sont réalisés par des experts du domaine sportif mais ne garantissent en aucun cas des gains financiers.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Accès aux services</h2>
              <p className="mb-3">L'accès aux services premium nécessite une inscription et un abonnement payant. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion.</p>
              <p>PRONOS STATS EMPIRE se réserve le droit de refuser l'accès aux services, de supprimer un compte ou d'annuler un abonnement en cas de violation des présentes conditions.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Propriété intellectuelle</h2>
              <p>Tous les contenus présents sur ce site (textes, graphismes, logos, analyses, etc.) sont la propriété exclusive de PRONOS STATS EMPIRE et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Responsabilité</h2>
              <p className="mb-3">Les pronostics et conseils fournis par PRONOS STATS EMPIRE le sont à titre informatif uniquement. Nous ne pouvons être tenus responsables des pertes financières liées aux paris sportifs effectués sur la base de nos pronostics.</p>
              <p className="mb-3">PRONOS STATS EMPIRE n'encourage pas les comportements addictifs et invite ses utilisateurs à parier de manière responsable.</p>
              <p>En cas d'addiction aux jeux, contactez "Joueurs Info Service" au 09 74 75 13 13.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Modalités d'abonnement et de paiement</h2>
              <p className="mb-3">Les tarifs des abonnements sont indiqués sur notre site. Le paiement s'effectue par carte bancaire via notre système de paiement sécurisé.</p>
              <p>Nos abonnements sont sans engagement. Vous pouvez résilier votre abonnement à tout moment depuis votre espace membre.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Droit applicable</h2>
              <p>Les présentes conditions générales d'utilisation sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conditions;
