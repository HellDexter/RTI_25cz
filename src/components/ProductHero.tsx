import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductHeroProps {
  title: string;
  description: string;
  imagePath: string;
}

const ProductHero = ({ title, description, imagePath }: ProductHeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  return (
    <div className="relative w-full" style={{ height: 'min(80vh, calc(100vw / 2.2))' }}>
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-black/50">
        <div className="container mx-auto text-center group">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-white hover:text-[#00ff00] transition-colors duration-300"
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block transition-colors duration-300 group-hover:text-[#00ff00]"
                variants={letterVariants}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl text-white max-w-4xl mx-auto"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="transition-colors duration-300 group-hover:text-[#00ff00]">
              {description}
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
