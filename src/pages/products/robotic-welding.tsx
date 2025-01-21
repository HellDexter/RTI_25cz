import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import ProductHero from '@/components/ProductHero';
import ImageModal from '@/components/ImageModal';
import OptimizedImage from '@/components/OptimizedImage';

const technologies = [
  { name: 'MIG/MAG' },
  { name: 'TIG' },
  { name: 'LASER' }
];

const migmagSpecs = [
  { name: 'Svařovací proud', value: '30-400 A' },
  { name: 'Zatěžovatel 60%', value: '400 A' },
  { name: 'Zatěžovatel 100%', value: '310 A' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '32 A' },
  { name: 'Krytí', value: 'IP 23' },
  { name: 'Rychlost podávání drátu', value: '0,5-25 m/min' },
  { name: 'Průměr drátu', value: '0,6-1,6 mm' },
  { name: 'Chlazení hořáku', value: 'vodní' }
];

const tigSpecs = [
  { name: 'Svařovací proud', value: '3-350 A' },
  { name: 'Zatěžovatel 60%', value: '350 A' },
  { name: 'Zatěžovatel 100%', value: '300 A' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '25 A' },
  { name: 'Krytí', value: 'IP 23' },
  { name: 'Průměr elektrody', value: '1,0-4,0 mm' },
  { name: 'Průměr drátu', value: '0,6-1,6 mm' },
  { name: 'Chlazení hořáku', value: 'vodní' }
];

const laserSpecs = [
  { name: 'Výkon laseru', value: '2000 W' },
  { name: 'Vlnová délka', value: '1080 nm' },
  { name: 'Průměr vlákna', value: '50 μm' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '32 A' },
  { name: 'Krytí', value: 'IP 54' },
  { name: 'Průměr drátu', value: '0,8-1,2 mm' },
  { name: 'Chlazení', value: 'vodní' },
  { name: 'Spotřeba chladící vody', value: '15 l/min' }
];

const hSeriesSpecs = [
  'Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm',
  '2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg',
  'Bezpečnostní optické závory REER',
  'Bezpečnostní ocelové oplocení',
  'Dotykové vyhledávání dílů',
  'Automatická korekce dráhy'
];

export default function RoboticWelding() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Robotické svařování | Robotech</title>
        <meta name="description" content="Automatizované svařovací systémy pro maximální efektivitu a přesnost. Komplexní řešení robotického svařování pro moderní průmyslovou výrobu." />
      </Head>

      <div className="min-h-screen">
        <ProductHero
          title="Robotické svařování"
          description="Automatizované svařovací systémy pro maximální efektivitu a přesnost."
          imagePath="/images/products/rti_welding/rti_welding.png"
        />

        {/* Image Modal */}
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage || ''}
          imageAlt="Detail obrázku"
        />

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* Dostupné technologie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-center mb-12 hover:text-[#0aef0b] transition-colors duration-300">Dostupné technologie svařování</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technologies.map((tech) => (
                  <div key={tech.name} className="text-center p-8 rounded-xl border-2 border-[#0aef0b] group hover:bg-[#0aef0b]/5 transition-all duration-300">
                    <h3 className="text-2xl font-bold group-hover:text-[#0aef0b] transition-colors duration-300">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popis technologií */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-24 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-xl text-gray-800 leading-relaxed m-0">
                  Všechny metody svařování máme vylepšené vlastním vývojem, upraveným softwarem, nebo i svařovacími zdroji.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-l from-[#0aef0b]/5 to-transparent border-r-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-xl text-gray-800 leading-relaxed m-0">
                  U laseru máme vyvinutou speciální laserovou odlehčenou hlavici. Díky tomu jsou naše pracoviště schopná opakovaně dodávat perfektní svařence, které projdou i nejnáročnějšími zkouškami kvality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-xl text-gray-800 leading-relaxed m-0">
                  Mechanická konstrukce pracoviště typu E s pojízdným robotem na dráze a parametricky řízenými polohovadly umožňuje vyrábět i ty nejnáročnější složité sestavy. Pro běžnější aplikace se hodí pracoviště typu H a pro jednodušší přesné opakování je vhodné pracoviště typu T. Do robotických pracovišť umíme integrovat i kombinovanou variantu svařovaní/čistící laser.
                </p>
              </motion.div>
            </motion.div>

            {/* Technické parametry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-center mb-12 hover:text-[#0aef0b] transition-colors duration-300">Technické parametry svařovacích technologií</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* MIG/MAG */}
                <div className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">MIG/MAG</h3>
                  <div className="space-y-4">
                    {migmagSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TIG */}
                <div className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">TIG</h3>
                  <div className="space-y-4">
                    {tigSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LASER */}
                <div className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">LASER</h3>
                  <div className="space-y-4">
                    {laserSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modelové řady - hlavní nadpis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold mb-6 hover:text-[#0aef0b] transition-colors duration-300">Modelové řady</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nabízíme tři specializované modelové řady svařovacích pracovišť, každá navržená pro specifické potřeby výroby
              </p>

              {/* Navigační dlaždice */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-h');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">H</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0aef0b] transition-colors duration-300">Modelová řada H</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H</p>
                </motion.button>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-e');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">E</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0aef0b] transition-colors duration-300">Modelová řada E</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E</p>
                </motion.button>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-t');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">T</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0aef0b] transition-colors duration-300">Modelová řada T</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelovém svařovacím stole</p>
                </motion.button>
              </div>
            </motion.div>

            {/* Modelová řada H */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-32 pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-h" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                        Modelová řada H
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative h-[400px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/model-h/frame-1.jpg")}
                    >
                      <OptimizedImage
                        src="/images/model-h/frame-1.jpg"
                        alt="H-rám pohled 1"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={600}
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H. Robot je umístěn ve středu a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center lg:order-2"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště H se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu. Délka svařovací stanice 3000 mm, průměr protočení 1200 mm.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="relative h-[400px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 lg:order-1 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/model-h/frame-2.jpg")}
                    >
                      <OptimizedImage
                        src="/images/model-h/frame-2.jpg"
                        alt="H-rám pohled 2"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Technické parametry */}
                <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20">
                  <h3 className="text-3xl font-bold text-center mb-12 hover:text-[#0aef0b] transition-colors duration-300">Technické parametry řady H</h3>
                  <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Automatická korekce dráhy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Poslední obrázek */}
                <motion.div 
                  className="relative h-[600px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedImage("/images/model-h/main-frame.jpg")}
                >
                  <OptimizedImage
                    src="/images/model-h/main-frame.jpg"
                    alt="H-rám hlavní pohled"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Modelová řada E */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-32 pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-e" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                        Modelová řada E
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative h-[400px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/model-e/frame-1.jpg")}
                    >
                      <OptimizedImage
                        src="/images/model-e/frame-1.jpg"
                        alt="E-rám pohled 1"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={600}
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E. Robot je umístěn na dráze, zavěšen na věži a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další. Délka stanice je 2850 mm, průměr protočení 1200 mm.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center lg:order-2"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Snadnou demontáží středové přepážky je možné spojit pracovní stanice v jednu dlouhou 6200 mm. Robotické svařovací pracoviště E se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="relative h-[400px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 lg:order-1 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/model-e/frame-2.jpg")}
                    >
                      <OptimizedImage
                        src="/images/model-e/frame-2.jpg"
                        alt="E-rám pohled 2"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Technické parametry */}
                <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20">
                  <h3 className="text-3xl font-bold text-center mb-12 hover:text-[#0aef0b] transition-colors duration-300">Technické parametry řady E</h3>
                  <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Automatická korekce dráhy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Poslední obrázek */}
                <motion.div 
                  className="relative h-[600px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedImage("/images/model-e/main-frame.jpg")}
                >
                  <OptimizedImage
                    src="/images/model-e/main-frame.jpg"
                    alt="E-rám hlavní pohled"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Modelová řada T */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-t" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                        Modelová řada T
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative h-[400px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/model-t/table-1.jpg")}
                    >
                      <OptimizedImage
                        src="/images/model-t/table-1.jpg"
                        alt="Stůl pohled 1"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={600}
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště T je na ocelovém svařovacím stole. Robot je umístěn na stole. Stůl je o rozměru 1500 x 1000 mm s otvory 22 mm pro použití standartních upínek pro svařování.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s textem */}
                  <div className="mb-12">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Robotické svařovací pracoviště T má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.
                    </p>
                  </div>

                  {/* Technické parametry */}
                  <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20 mb-12">
                    <h3 className="text-3xl font-bold text-center mb-12 hover:text-[#0aef0b] transition-colors duration-300">Technické parametry řady T</h3>
                    <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Automatická korekce dráhy</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Poslední obrázek */}
                  <motion.div 
                    className="relative h-[600px] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage("/images/model-t/table-2.jpg")}
                  >
                    <OptimizedImage
                      src="/images/model-t/table-2.jpg"
                      alt="Stůl hlavní pohled"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      width={1200}
                      height={900}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
