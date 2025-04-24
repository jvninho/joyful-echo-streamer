
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="py-16 md:py-24 text-center bg-gradient-to-b from-green-900/90 to-black">
      <motion.div 
        className="logo mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cloud relative bg-black/80 p-6 rounded-full shadow-lg max-w-md mx-auto hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-2 border border-green-500/30">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500">PRONOS STATS EMPIRE</h1>
        </div>
        <div className="stars text-green-400 text-2xl md:text-3xl mt-4">★ ★ ★</div>
      </motion.div>

      <motion.div 
        className="text-center max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-green-400">Votre Expert et conseil en paris sportif PRONOS STATS EMPIRE</h2>
        <h3 className="text-xl md:text-2xl mb-8 text-green-300">Pronostiques sportifs <span className="text-green-500 font-bold">80% de réussites</span> avec PRONOS STATS EMPIRE</h3>
        <Button 
          asChild 
          className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transform hover:-translate-y-1"
        >
          <a href="#pricing">VOIR LES OFFRES VIP</a>
        </Button>
      </motion.div>
      
      <motion.div 
        className="mt-16 bg-black/80 backdrop-blur-sm py-6 px-4 rounded-lg max-w-4xl mx-auto border border-green-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-green-500 mb-2">+5000</div>
            <div className="text-green-400">Paris gagnants</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-green-500 mb-2">80%</div>
            <div className="text-green-400">Taux de réussite</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-green-500 mb-2">+1000</div>
            <div className="text-green-400">Clients satisfaits</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
