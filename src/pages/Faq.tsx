
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const Faq = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
