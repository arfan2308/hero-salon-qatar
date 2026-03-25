'use client'

import { motion } from 'framer-motion'
import { barbers } from '@/utils/barbersData'
import { Scissors, ArrowRight, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Barbers = () => {
  const router = useRouter()

  const handleBookNow = (barberName) => {
    router.push(`/services?barber=${encodeURIComponent(barberName)}`)
  }

  return (
    <section id="barbers" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
            <Scissors className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">Our Experts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-red-600">Master Barbers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Skilled professionals dedicated to giving you the perfect look
          </p>
        </motion.div>

        {/* Barber Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Image Container - FIXED */}
              <div className="relative h-96 overflow-hidden bg-zinc-900">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                
                {/* Red Glow Effect */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {barber.name}
                </h3>
                <p className="text-gray-400 mb-4">{barber.specialization}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{barber.services.length} Services Available</span>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(barber.name)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all group/btn"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Scissors className="w-6 h-6 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Barbers