import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import robotImage from '../../assets/robotLandig.png'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  const navigate = useNavigate()

  const handleSignUpClick = () => {
    navigate('/login')
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Crear refs y detectar si están visibles (once: true para animar solo la primera vez)
  const mainTextRef = useRef(null)
  const mainTextInView = useInView(mainTextRef, { once: true })

  const mainImageRef = useRef(null)
  const mainImageInView = useInView(mainImageRef, { once: true })

  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true })

  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true })

  const simpleSolutionsRef = useRef(null)
  const simpleSolutionsInView = useInView(simpleSolutionsRef, { once: true })

  const aboutUsRef = useRef(null)
  const aboutUsInView = useInView(aboutUsRef, { once: true })

  const clientsRef = useRef(null)
  const clientsInView = useInView(clientsRef, { once: true })

  return (
    <div id="home" className="min-h-screen bg-[#f7f7ec] px-16 py-10 flex flex-col">

      <nav className="flex items-center justify-between mb-20">
        <div className="text-teal-600 font-bold text-xl cursor-pointer">PyBot</div>
        <ul className="flex space-x-10 font-semibold text-lg">
          <li className="cursor-pointer hover:text-teal-600 transition" onClick={() => scrollToSection('home')}>Home</li>
          <li className="cursor-pointer hover:text-teal-600 transition" onClick={() => scrollToSection('about-us')}>About us</li>
          <li className="cursor-pointer hover:text-teal-600 transition" onClick={() => scrollToSection('services')}>Services</li>
          <li className="cursor-pointer hover:text-teal-600 transition" onClick={() => scrollToSection('contact-us')}>Contact us</li>
        </ul>
        <button
          onClick={handleSignUpClick}
          className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition"
        >
          Sign Up
        </button>
      </nav>

      <main className="flex items-center justify-between flex-1">
        <motion.div
          ref={mainTextRef}
          className="max-w-lg space-y-6"
          initial={{ opacity: 0, y: 60 }}
          animate={mainTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            We create <span className="text-teal-600">solutions</span> for your business
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Enter your personal details and start journey with us, Enter your personal details and start journey with us, Enter your personal details and start journey with us.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
            Get Started
          </button>
          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <div className="p-1 bg-white rounded-full shadow-md">
              <FaHeart className="text-red-500" />
            </div>
            <span className="font-semibold">Start now</span>
          </div>
        </motion.div>

        <motion.div
          ref={mainImageRef}
          className="max-w-xl"
          initial={{ opacity: 0, y: 80 }}
          animate={mainImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1.2 }}
        >
          <img src={robotImage} alt="Robot" className="w-full h-auto" />
        </motion.div>
      </main>

      <motion.footer
        ref={servicesRef}
        id="services"
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold">
          We Provide the best <span className="text-teal-600">services</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Enter your personal details and start journey with us.
        </p>
      </motion.footer>

      <section className="mt-24">
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          {[{ title: 'See/Saw', color: 'bg-yellow-400' },
            { title: 'Marketing', color: 'bg-green-500' },
            { title: 'Visual camping', color: 'bg-purple-600' },
            { title: 'Others', color: 'bg-red-600' },
          ].map((card, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md">
              <div className={`w-8 h-4 ${card.color} rounded-md mb-4`} />
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm">Enter your personal details and start journey with us.</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={simpleSolutionsRef}
          className="bg-[#c2e2de] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0"
          initial={{ opacity: 0, y: 40 }}
          animate={simpleSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={robotImage} alt="Robot Assistant" className="w-72 h-auto" />
          </div>
          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-4xl font-bold text-gray-700">
              <span className="text-gray-800">Simple</span>{' '}
              <span className="text-teal-600">Solutions!</span>
            </h2>
            <p className="text-gray-700">
              Enter your personal details and start journey with us.
            </p>
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {num}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Marketing</h4>
                  <p className="text-sm text-gray-600">Enter your personal details and start journey with us.</p>
                </div>
              </div>
            ))}
            <div className="flex space-x-4 mt-6">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">Get Started</button>
              <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-50">Get Started</button>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        ref={aboutUsRef}
        id="about-us"
        className="bg-[#f7f7ec] py-20 px-10"
        initial={{ opacity: 0, y: 60 }}
        animate={aboutUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 space-y-10 lg:space-y-0">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="text-teal-600">Agency</span>
            </h2>
            <p className="text-gray-600">
              Enter your personal details and start journey with us.
            </p>
            <p className="text-gray-600">
              Enter your personal details and start journey with us.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={robotImage} alt="Spy Robot" className="w-60 h-auto" />
          </div>
        </div>

        <div ref={clientsRef} className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 60 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1 }}
          >
            What <span className="text-teal-600">Clients</span> Say!
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-2"
            initial={{ opacity: 0, y: 60 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Enter your personal details and start journey with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[{ color: 'border-yellow-400', dot: 'bg-yellow-400' },
            { color: 'border-orange-400', dot: 'bg-orange-400' },
            { color: 'border-red-500', dot: 'bg-red-500' },
            { color: 'border-green-500', dot: 'bg-green-500' },
          ].map((style, index) => (
            <motion.div
              key={index}
              className={`relative bg-white shadow-md p-6 rounded-lg border-t-4 ${style.color}`}
              initial={{ opacity: 0, y: 30 }}
              animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`absolute -top-3 left-5 w-4 h-4 rounded-full ${style.dot}`}></div>
              <div className="flex items-center space-x-4 mb-4">
                <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-10 h-10 rounded-full border" />
                <div>
                  <h4 className="text-teal-600 font-semibold">Oscar Torres</h4>
                  <p className="text-gray-500 text-sm">Enter your personal details and start journey with us.</p>
                </div>
              </div>
              <div className="flex mt-4 text-yellow-400">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <div className={`absolute -bottom-3 right-5 w-4 h-4 rounded-full ${style.dot}`}></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div id="contact-us">
        <Footer />
      </div>
    </div>
  )
}
