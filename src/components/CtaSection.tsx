import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PaymentOptions } from "./PaymentOptions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Award, Crown } from "lucide-react";

export const CtaSection = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; price: string } | null>(null);

  const handlePlanSelection = (title: string, price: string) => {
    setSelectedPlan({ title, price });
    setIsPaymentModalOpen(true);
  };

  return (
    <div id="pricing" className="py-16 bg-gradient-to-r from-akatsuki-dark to-akatsuki text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre communauté VIP</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Accédez à nos meilleurs pronostics et multipliez vos gains avec nos offres exclusives
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <OfferCard 
            title="ESSENTIEL" 
            price="29,99€" 
            period="par mois"
            features={[
              "5 pronostics par semaine",
              "Analyse détaillée des matchs",
              "Support par email"
            ]}
            onSelect={handlePlanSelection}
          />
          
          <OfferCard 
            title="PREMIUM" 
            price="59,99€" 
            period="par mois"
            featured={true}
            features={[
              "15 pronostics par semaine",
              "Analyse détaillée des matchs",
              "Conseils personnalisés",
              "Accès groupe Telegram VIP",
              "Support prioritaire"
            ]}
            onSelect={handlePlanSelection}
          />
          
          <OfferCard 
            title="ULTIME" 
            price="99,99€" 
            period="par mois"
            features={[
              "Pronostics illimités",
              "Analyse détaillée des matchs",
              "Conseils personnalisés",
              "Accès groupe Telegram VIP",
              "Support 24/7",
              "Consultation téléphonique"
            ]}
            onSelect={handlePlanSelection}
          />
        </div>
      </div>

      {/* Modal de paiement */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choisissez votre méthode de paiement</DialogTitle>
            <DialogDescription>
              Sélectionnez comment vous souhaitez payer votre abonnement
            </DialogDescription>
          </DialogHeader>
          {selectedPlan && (
            <PaymentOptions planName={selectedPlan.title} price={selectedPlan.price} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface OfferCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  onSelect: (title: string, price: string) => void;
}

const OfferCard = ({ title, price, period, features, featured = false, onSelect }: OfferCardProps) => {
  const getIcon = (title: string) => {
    switch (title) {
      case "ESSENTIEL":
        return <Star className="h-8 w-8 text-green-500" />;
      case "PREMIUM":
        return <Award className="h-8 w-8 text-green-500" />;
      case "ULTIME":
        return <Crown className="h-8 w-8 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform ${featured ? 'scale-105 md:-mt-4 ring-2 ring-green-500' : ''}`}>
      <div className={`p-6 text-center ${featured ? 'bg-green-600 text-black' : 'bg-green-800 text-white'}`}>
        <div className="flex items-center justify-center gap-2">
          {getIcon(title)}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <div className="text-3xl font-bold text-green-500 mb-1">{price}</div>
        <div className="text-green-400 mb-6">{period}</div>
        
        <ul className="text-left space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-green-400">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button
          onClick={() => onSelect(title, price)}
          className={`w-full ${featured ? 'bg-green-600 hover:bg-green-700' : 'bg-green-800 hover:bg-green-900'} text-white font-bold py-2 rounded transition-colors`}
        >
          Sélectionner
        </Button>
      </div>
    </div>
  );
};
