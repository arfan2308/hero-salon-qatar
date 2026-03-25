'use client'

import { useSearchParams } from 'next/navigation'
import { barbers } from '@/utils/barbersData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import BookingModal from '@/components/BookingModal'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { useState, Suspense } from 'react'
import Link from 'next/link'

function ServicesContent() {
  const searchParams = useSearchParams()
  const barberName = searchParams.get('barber')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  // Find the selected barber
  const barber = barbers.find(b => b.name === barberName)

  if (!barber) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Barber Not Found</h1>
          <Link href="/" className="text-red-500 hover:text-red-400">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleBookService = (service) => {
    setSelectedService(service)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/#barbers"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Barbers</span>
          </Link>

          {/* Barber Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-16"
          >
            <img
              src={barber.image}
              alt={barber.name}
              className="w-48 h-48 rounded-2xl object-cover border-4 border-red-600/50"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{barber.name}</h1>
              <p className="text-xl text-gray-400 mb-4">{barber.specialization}</p>
              <p className="text-gray-500">{barber.services.length} Services Available</p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Available <span className="text-red-600">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {barber.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>

                  {/* Service Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    <p className="text-gray-500 text-sm mb-4">Duration: {service.duration}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-500">{service.price}</span>
                      <button
                        onClick={() => handleBookService(service)}
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          barber={barber.name}
          service={selectedService}
        />
      )}
    </div>
  )
}

const ServicesPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  )
}

export default ServicesPage