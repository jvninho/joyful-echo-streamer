
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative py-20 md:py-32 text-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-green-800/30"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(5, 46, 22, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(22, 101, 52, 0.3) 100%)",
            "linear-gradient(135deg, rgba(22, 101, 52, 0.3) 0%, rgba(0, 0, 0, 1) 50%, rgba(5, 46, 22, 0.2) 100%)",
            "linear-gradient(225deg, rgba(5, 46, 22, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(22, 101, 52, 0.3) 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="relative z-10">
        <motion.div 
          className="logo mb-12"
          initial={{ opacity: 0, y: -80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-black/90 to-green-900/80 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-green-500/40 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              shadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-400 via-green-500 to-green-300 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.8)",
                  "0 0 10px rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PRONOS STATS EMPIRE
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="stars text-green-400 text-4xl md:text-5xl mt-6"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ★ ★ ★
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
          >
            Votre Expert en paris sportif
          </motion.h2>
          
          <motion.h3 
            className="text-xl md:text-3xl mb-10 text-green-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Pronostiques sportifs{" "}
            <motion.span 
              className="text-green-400 font-black text-4xl md:text-5xl"
              animate={{ 
                scale: [1, 1.1, 1],
                color: ["#4ade80", "#22c55e", "#16a34a", "#22c55e", "#4ade80"]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                color: { duration: 3, repeat: Infinity }
              }}
            >
              80% de réussites
            </motion.span>
          </motion.h3>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              asChild 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold py-4 px-10 rounded-2xl text-xl shadow-2xl hover:shadow-green-500/25 transform transition-all duration-300 border-2 border-green-400"
            >
              <motion.a 
                href="#pricing"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.6)",
                    "0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 VOIR LES OFFRES VIP 🚀
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-r from-black/90 via-green-900/30 to-black/90 backdrop-blur-lg py-8 px-6 rounded-3xl max-w-6xl mx-auto border border-green-500/30 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, type: "spring" }}
          whileInView={{ 
            boxShadow: [
              "0 10px 30px rgba(34, 197, 94, 0.2)",
              "0 20px 60px rgba(34, 197, 94, 0.4)",
              "0 10px 30px rgba(34, 197, 94, 0.2)"
            ]
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "+5000", label: "Paris gagnants", icon: "🏆" },
              { number: "80%", label: "Taux de réussite", icon: "⚡" },
              { number: "+1000", label: "Clients satisfaits", icon: "🎯" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateY: 10,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-6xl mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-3"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-green-300 text-lg font-semibold group-hover:text-green-200 transition-colors"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
