import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    title: 'Robotické svařovací pracoviště',
    description: 'Komplexní automatizovaná řešení pro svařování s využitím nejmodernějších průmyslových robotů.',
    image: '/images/products/rti_welding/rti_welding.png',
    href: '/products/robotic-welding',
    features: [
      'Plně automatizované svařování',
      'Vysoká přesnost a opakovatelnost',
      'Integrace s průmyslovými roboty',
      'Optimalizace výrobních procesů',
      'Monitoring kvality v reálném čase'
    ]
  },
  {
    id: 2,
    title: 'Robotické brousící pracoviště',
    description: 'Automatizované systémy pro přesné broušení a leštění s adaptivním řízením procesu.',
    image: '/images/products/rti_grinding/rti_grinding.png',
    href: '/products/robotic-grinding',
    features: [
      'Automatické broušení a leštění',
      'Adaptivní řízení procesu',
      'Pokročilá senzorika',
      'Flexibilní programování',
      'Vysoká kvalita povrchu'
    ]
  },
  {
    id: 3,
    title: 'Svařovací lasery',
    description: 'Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů.',
    image: '/images/products/rti_welding_laser/rti_welding_laser.png',
    href: '/products/welding-lasers',
    features: [
      'Vysokovýkonné laserové svařování',
      'Přesné řízení procesu',
      'Minimální tepelné ovlivnění',
      'Svařování různých materiálů',
      'Vysoká produktivita'
    ]
  },
  {
    id: 4,
    title: 'Čisticí lasery',
    description: 'Ekologické a efektivní řešení pro čištění povrchů pomocí laserové technologie.',
    image: '/images/products/rti_cleaning_laser/rti_cleaning_laser.png',
    href: '/products/cleaning-lasers',
    features: [
      'Ekologické čištění povrchů',
      'Bez chemikálií a abraziv',
      'Selektivní odstranění vrstev',
      'Šetrné k základnímu materiálu',
      'Vysoká efektivita procesu'
    ]
  },
  {
    id: 5,
    title: 'Solární Carport',
    description: 'Inovativní řešení pro parkování s integrovanou solární elektrárnou.',
    image: '/images/products/rti_carport/rti_carport.jpg',
    href: '/products/solar-carport',
    features: [
      'Integrované solární panely',
      'Moderní design',
      'Ochrana vozidel',
      'Dobíjení elektromobilů',
      'Energetická soběstačnost'
    ]
  }
]

const ProductCard = ({ product, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="h-full bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] hover:border-[#0aef0b] hover:border-2"
    >
      <Link href={product.href} className="flex flex-col h-full">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 opacity-50 group-hover:opacity-70 transition-all duration-500" />
          <div className="absolute inset-0 bg-[#0aef0b]/0 mix-blend-overlay group-hover:bg-[#0aef0b]/10 transition-all duration-500" />
        </div>
        <div className="p-8 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50">
          <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#0aef0b] transition-all duration-300">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-6 flex-grow group-hover:text-gray-700 transition-all duration-300">
            {product.description}
          </p>
          <ul className="space-y-3 mb-8">
            {product.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-all duration-300"
              >
                <span className="w-2 h-2 bg-[#0aef0b] rounded-full mr-3 group-hover:scale-125 transition-all duration-300" />
                {feature}
              </motion.li>
            ))}
          </ul>
          <button className="w-full bg-[#0aef0b] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-500 hover:shadow-lg hover:shadow-[#0aef0b]/20 group-hover:bg-[#09d60a]">
            <span className="flex items-center justify-center">
              Prozkoumat řešení
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (window.location.hash === '#products') {
      const productsSection = document.getElementById('products')
      if (productsSection) {
        const navbarHeight = 80
        const offset = productsSection.offsetTop - navbarHeight
        setTimeout(() => {
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [])

  const nextSlide = () => {
    const maxIndex = isMobile ? products.length - 1 : products.length - 3
    setCurrentIndex(current => Math.min(current + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(current => Math.max(current - 1, 0))
  }

  return (
    <section id="products" ref={ref} className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden scroll-mt-[4.5rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Naše řešení
            </h2>
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Inovativní robotická a laserová řešení pro moderní průmysl
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-8"
              animate={{ 
                x: `-${currentIndex * (isMobile ? 100 : 33.333)}%`
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="w-full min-w-full md:min-w-[calc(33.333%-1.333rem)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-[#0aef0b] p-2 sm:p-4 rounded-xl sm:rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#09d60a] transition-all duration-300 transform hover:-translate-x-3 group touch-manipulation"
            disabled={currentIndex === 0}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-[#0aef0b] p-2 sm:p-4 rounded-xl sm:rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#09d60a] transition-all duration-300 transform hover:translate-x-3 group touch-manipulation"
            disabled={currentIndex === (isMobile ? products.length - 1 : products.length - 3)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
            {Array.from({ length: isMobile ? products.length : products.length - 2 }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  i === currentIndex 
                    ? 'bg-[#0aef0b]' 
                    : 'bg-gray-400 hover:bg-[#0aef0b]'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
