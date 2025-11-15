
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative py-20 md:py-32 text-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(34, 211, 238, 0.15) 0%, rgba(15, 23, 42, 1) 50%, rgba(168, 85, 247, 0.2) 100%)",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(15, 23, 42, 1) 50%, rgba(236, 72, 153, 0.15) 100%)",
            "linear-gradient(225deg, rgba(236, 72, 153, 0.15) 0%, rgba(15, 23, 42, 1) 50%, rgba(34, 211, 238, 0.2) 100%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a855f7' : '#ec4899',
            opacity: 0.3,
          }}
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 150 - 75, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3
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
            className="relative bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto border-2 border-primary/40 backdrop-blur-lg"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              borderColor: 'hsl(var(--secondary))',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.3), 0 0 100px rgba(168, 85, 247, 0.2)'
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
            >
              PRONOS STATS EMPIRE
            </motion.h1>
            
            {/* Glowing border animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee)',
                backgroundSize: '200% auto',
                opacity: 0.5,
                filter: 'blur(20px)',
                zIndex: -1,
              }}
              animate={{
                backgroundPosition: ['0%', '200%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.div 
            className="stars text-4xl md:text-5xl mt-6"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="inline-block" style={{ color: '#22d3ee' }}>★</span>
            <span className="inline-block mx-2" style={{ color: '#a855f7' }}>★</span>
            <span className="inline-block" style={{ color: '#ec4899' }}>★</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
          >
            Votre Expert en paris sportif
          </motion.h2>
          
          <motion.h3 
            className="text-xl md:text-3xl mb-10 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Analyses approfondies, statistiques précises
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-primary-foreground font-bold px-12 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              Découvrir nos offres
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[
            { number: "95%", label: "Taux de réussite", color: "#22d3ee" },
            { number: "+5000", label: "Paris gagnants", color: "#a855f7" },
            { number: "24/7", label: "Support disponible", color: "#ec4899" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border"
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: `0 20px 50px ${stat.color}40`
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-5xl font-black mb-2"
                style={{ color: stat.color }}
                animate={{ 
                  textShadow: [
                    `0 0 10px ${stat.color}80`,
                    `0 0 30px ${stat.color}ff`,
                    `0 0 10px ${stat.color}80`,
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground text-lg font-semibold">{stat.label}</div>
              
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-20 -z-10"
                style={{ 
                  background: `radial-gradient(circle at center, ${stat.color}, transparent)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
