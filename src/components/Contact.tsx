import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implementace odeslání formuláře
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kontaktujte nás
          </h2>
          <div className="w-24 h-1 bg-[#00ff00] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-900 leading-relaxed">
              Zjistěte, jak vám naše technologie mohou pomoci optimalizovat výrobní procesy a zvýšit efektivitu vašeho provozu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktní formulář */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Napište nám</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0aef0b] focus:border-[#0aef0b]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0aef0b] focus:border-[#0aef0b]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0aef0b] focus:border-[#0aef0b]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0aef0b] hover:bg-[#09d60a] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Odeslat zprávu
              </button>
            </form>
          </motion.div>

          {/* Kontaktní informace */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kde nás najdete</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MdLocationOn className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresa</h4>
                    <a 
                      href="https://maps.google.com/?q=Chudenická+1059/30,+Praha+Hostivař,+102+00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 block hover:text-[#00ff00] transition-colors duration-300"
                    >
                      Chudenická 1059/30<br />
                      Praha Hostivař<br />
                      102 00, Česká republika
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdEmail className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Obecný kontakt</h4>
                    <a 
                      href="mailto:info@robotech-innovation.cz"
                      className="text-gray-600 block hover:text-[#00ff00] transition-colors duration-300"
                    >
                      info@robotech-innovation.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaUserTie className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Jednatelka</h4>
                    <div className="text-gray-600">
                      <p>Monika Kerešťanová</p>
                      <div className="flex items-center mt-1">
                        <MdPhone className="text-[#00ff00] mr-2" />
                        <span>+420 776 803 155</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MdEmail className="text-[#00ff00] mr-2" />
                        <a 
                          href="mailto:monika.kerestanova@robotech-innovation.cz"
                          className="hover:text-[#00ff00] transition-colors duration-300"
                        >
                          monika.kerestanova@robotech-innovation.cz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <BsBuilding className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Obchodní oddělení</h4>
                    <div className="text-gray-600">
                      <p>Tomáš Nádvorník</p>
                      <div className="flex items-center mt-1">
                        <MdPhone className="text-[#00ff00] mr-2" />
                        <span>+420 775 265 819</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MdEmail className="text-[#00ff00] mr-2" />
                        <a 
                          href="mailto:tomas.nadvornik@robotech-innovation.cz"
                          className="hover:text-[#00ff00] transition-colors duration-300"
                        >
                          tomas.nadvornik@robotech-innovation.cz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <BsBuilding className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IČ</h4>
                    <span className="text-gray-600">22244018</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
