
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  return (
    <div id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Comment fonctionnent les pronostics ?
              </AccordionTrigger>
              <AccordionContent>
                Nos experts analysent en détail les statistiques, la forme des équipes, les conditions 
                météorologiques, et de nombreux autres facteurs pour vous fournir les pronostics les plus 
                précis possible. Chaque pronostic est accompagné d'une analyse détaillée qui vous explique 
                notre raisonnement.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Quel est le taux de réussite réel ?
              </AccordionTrigger>
              <AccordionContent>
                Notre taux de réussite moyen est de 80% sur l'ensemble de nos pronostics. 
                Nous publions régulièrement nos résultats et statistiques pour maintenir une transparence totale 
                avec notre communauté. Ce taux peut varier légèrement selon les périodes de l'année.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Comment accéder à l'Espace VIP ?
              </AccordionTrigger>
              <AccordionContent>
                Pour accéder à l'Espace VIP, il vous suffit de souscrire à l'un de nos abonnements. 
                Après votre inscription, vous recevrez immédiatement vos identifiants par email pour 
                vous connecter à la zone membre et accéder à tous les contenus premium.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                Puis-je annuler mon abonnement à tout moment ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument ! Vous pouvez annuler votre abonnement à tout moment depuis votre espace 
                membre. L'annulation prendra effet à la fin de votre période de facturation en cours,
                et vous conserverez l'accès jusqu'à cette date.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Sur quels sports proposez-vous des pronostics ?
              </AccordionTrigger>
              <AccordionContent>
                Nous couvrons principalement le football, le tennis, le basketball et le rugby. 
                Nos experts sont spécialisés dans ces sports et suivent quotidiennement l'actualité 
                et les performances des équipes et des joueurs pour vous proposer les meilleurs pronostics.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
