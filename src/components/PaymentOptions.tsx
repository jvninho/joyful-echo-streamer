
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaymentOptionsProps {
  planName: string;
  price: string;
}

export const PaymentOptions = ({ planName, price }: PaymentOptionsProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simuler le traitement du paiement
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Paiement effectué avec succès !",
        description: `Vous êtes maintenant abonné au plan ${planName}`,
      });

      // Rediriger vers l'espace VIP après un court délai
      setTimeout(() => {
        // Simuler un utilisateur connecté en stockant des informations dans localStorage
        localStorage.setItem(
          "frg-user",
          JSON.stringify({
            isLoggedIn: true,
            plan: planName,
            expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          })
        );
        navigate("/vip");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Payer {price} pour {planName}</h2>

      <form onSubmit={handlePaymentSubmit} className="space-y-4 animate-fade-in">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de carte
          </label>
          <Input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full"
            required
            maxLength={19}
          />
        </div>

        <div>
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom sur la carte
          </label>
          <Input
            id="cardName"
            name="cardName"
            type="text"
            placeholder="Jean Dupont"
            value={cardDetails.cardName}
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
              Date d'expiration
            </label>
            <Input
              id="expiry"
              name="expiry"
              type="text"
              placeholder="MM/AA"
              value={cardDetails.expiry}
              onChange={handleInputChange}
              className="w-full"
              required
              maxLength={5}
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <Input
              id="cvc"
              name="cvc"
              type="text"
              placeholder="123"
              value={cardDetails.cvc}
              onChange={handleInputChange}
              className="w-full"
              required
              maxLength={3}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-akatsuki-gold hover:bg-yellow-500 text-black font-bold py-2 rounded transition-colors"
          disabled={isProcessing}
        >
          {isProcessing ? "Traitement en cours..." : "Payer maintenant"}
        </Button>
      </form>
    </div>
  );
};
