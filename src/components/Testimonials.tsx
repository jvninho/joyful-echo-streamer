
export const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Ce que nos clients disent</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard 
            name="Thomas D."
            quote="Grâce aux conseils d'Akatsuki Pronos, j'ai augmenté mes gains de 200% en seulement 2 mois. Service impeccable !"
            rating={5}
          />
          <TestimonialCard 
            name="Marie L."
            quote="Je recommande vivement! L'analyse des matchs est toujours pertinente et le taux de réussite est impressionnant."
            rating={5}
          />
          <TestimonialCard 
            name="Julien B."
            quote="L'abonnement VIP est rentabilisé dès les premiers jours. Les pronos sont fiables et l'équipe est très réactive."
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, quote, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow">
      <div className="flex mb-4 text-akatsuki-gold">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-bold text-right">- {name}</p>
    </div>
  );
};
