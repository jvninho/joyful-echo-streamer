
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, PaypalIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaymentOptionsProps {
  planName: string;
  price: string;
}

export const PaymentOptions = ({ planName, price }: PaymentOptionsProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | null>(null);
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

  const handlePaypalSubmit = () => {
    setIsProcessing(true);

    // Simuler le traitement du paiement PayPal
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

      <div className="flex justify-center space-x-4 mb-6">
        <Button
          type="button"
          variant={paymentMethod === "card" ? "default" : "outline"}
          className={`flex items-center gap-2 ${
            paymentMethod === "card" ? "bg-akatsuki-gold text-black" : ""
          }`}
          onClick={() => setPaymentMethod("card")}
        >
          <CreditCard className="h-5 w-5" />
          Carte Bancaire
        </Button>
        <Button
          type="button"
          variant={paymentMethod === "paypal" ? "default" : "outline"}
          className={`flex items-center gap-2 ${
            paymentMethod === "paypal" ? "bg-akatsuki-gold text-black" : ""
          }`}
          onClick={() => setPaymentMethod("paypal")}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.975 22H4.25C3.561 22 3 21.439 3 20.75V8.75C3 8.061 3.561 7.5 4.25 7.5H19.75C20.439 7.5 21 8.061 21 8.75V20.75C21 21.439 20.439 22 19.75 22H13.025M6.975 22V17.5C6.975 16.121 8.095 15 9.475 15H13.025M6.975 22H13.025M13.025 22V17.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          PayPal
        </Button>
      </div>

      {paymentMethod === "card" && (
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
      )}

      {paymentMethod === "paypal" && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-700 mb-4">
              Vous allez être redirigé vers PayPal pour compléter votre paiement.
            </p>
            <Button
              onClick={handlePaypalSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              disabled={isProcessing}
            >
              {isProcessing ? "Redirection..." : "Continuer vers PayPal"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
