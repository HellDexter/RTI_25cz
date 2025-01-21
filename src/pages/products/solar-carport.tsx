import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Head from 'next/head'
import ProductHero from '@/components/ProductHero'

const features = [
  {
    title: 'Ochrana vozidla',
    description: 'Efektivní ochrana před sluncem, deštěm, sněhem a dalšími povětrnostními vlivy.'
  },
  {
    title: 'Solární energie',
    description: 'Integrované solární panely pro výrobu vlastní elektřiny a dobíjení elektromobilů.'
  },
  {
    title: 'Moderní design',
    description: 'Elegantní a nadčasový vzhled, který zvýší hodnotu vaší nemovitosti.'
  },
  {
    title: 'Variabilita',
    description: 'Možnost přizpůsobení velikosti a konfigurace podle vašich potřeb.'
  }
]

const specifications = {
  'Standardní rozměry': '3x5m, 3x6m, systém je modulární',
  'Výška': '2,2 - 2,8m',
  'Výkon solárních panelů': 'u modulu 3x5m až 3,2kWp',
  'Nosnost střechy': '150 kg/m²',
  'Záruka': '20 let na konstrukci',
  'Certifikace': 'CE'
}

const additionalFeatures = {
  'Solární systém': [
    'Vysoce účinné solární panely',
    'Inteligentní měnič napětí',
    'Monitoring výroby energie',
    'Možnost ukládání energie'
  ],
  'Konstrukce': [
    'Robustní ocelová konstrukce',
    'Střešní krytina ze solárních panelů',
    'LED osvětlení',
    'Odolnost proti větru a sněhu'
  ],
  'Příslušenství': [
    'Nabíjecí stanice pro elektromobily',
    'Dešťové okapy a svody',
    'Integrované osvětlení'
  ]
}

const applications = [
  {
    title: 'Komerční využití',
    description: 'Ideální pro obchodní domy, firmy a hotely s možností rychlonabíjecích DC stanic.'
  },
  {
    title: 'Rezidenční využití',
    description: 'Vhodné pro rodinné domy s AC nabíječkou pro elektromobily.'
  },
  {
    title: 'Parkoviště',
    description: 'Řešení pro zastřešení celých parkovišť s integrovaným solárním systémem.'
  }
]

export default function SolarCarport() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <Head>
        <title>Solární Carport | Robotech Innovation</title>
        <meta name="description" content="Moderní řešení pro parkování s integrovanými solárními panely" />
      </Head>
      
      <div className="bg-white" ref={ref}>
        <ProductHero
          title="Solární Carport"
          description="Moderní řešení pro parkování s integrovanými solárními panely."
          imagePath="/images/products/rti_carport/rti_carport.jpg"
        />

        {/* Hlavní obsah */}
        <div id="content" className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-24 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
            >
              <p className="text-xl text-gray-800 leading-relaxed m-0">
                Solární Carport představuje inovativní řešení pro parkování vozidel, které kombinuje ochranu před povětrnostními vlivy s výrobou čisté solární energie. Moderní design a kvalitní materiály zajišťují dlouhou životnost a estetický vzhled.
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
                Systém je vybaven vysoce účinnými solárními panely a inteligentním řízením, které optimalizuje výrobu a využití energie. Volitelně lze doplnit o nabíjecí stanici pro elektromobily nebo systém pro ukládání energie.
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
                Carport je navržen a certifikován ke komerčnímu využití. Je vhodný k zastřešení celých parkovišť například u obchodních domů, firem, nebo hotelů s provozováním rychlonabíjecích DC stanic. Lze jej také umístit k rodinným domům s AC nabíječkou.
              </p>
            </motion.div>
          </motion.div>

          {/* Oblasti využití */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                Oblasti využití
              </h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={application.title}
                  className="bg-white p-10 rounded-xl border-2 border-transparent hover:border-[#0aef0b] transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0aef0b] transition-colors duration-300">{application.title}</h3>
                  <p className="text-gray-600 text-lg">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hlavní výhody */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                Hlavní výhody
              </h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-xl border-2 border-transparent hover:border-[#0aef0b] transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#0aef0b] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technické parametry */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                Technické parametry
              </h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
            </div>
            <motion.div 
              className="bg-white rounded-xl p-12 border-2 border-transparent hover:border-[#0aef0b] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="flex flex-col text-center p-4 hover:bg-[#0aef0b]/5 rounded-lg transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-gray-600 text-lg mb-2">{key}</span>
                    <span className="text-2xl font-bold text-gray-600">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vlastnosti a příslušenství */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 hover:text-[#0aef0b] transition-colors duration-300">
                Vlastnosti a příslušenství
              </h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(additionalFeatures).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="bg-white rounded-xl p-10 border-2 border-transparent hover:border-[#0aef0b] transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-center group-hover:text-[#0aef0b] transition-colors duration-300">{category}</h3>
                  <ul className="space-y-6">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center group/item">
                        <span className="text-gray-600 mr-4 text-xl group-hover/item:scale-110 transition-transform duration-300">✓</span>
                        <span className="text-gray-600 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
