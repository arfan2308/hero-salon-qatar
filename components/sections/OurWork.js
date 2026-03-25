'use client'

import { motion } from 'framer-motion'
import { galleryImages } from '@/utils/barbersData'
import { useEffect, useRef } from 'react'

const OurWork = () => {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  // Duplicate images for infinite scroll
  const row1Images = [...galleryImages.slice(0, 6), ...galleryImages.slice(0, 6), ...galleryImages.slice(0, 6)]
  const row2Images = [...galleryImages.slice(6, 12), ...galleryImages.slice(6, 12), ...galleryImages.slice(6, 12)]

  return (
    <section id="work" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Premium Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our finest cuts and styles
          </p>
        </motion.div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative mb-8">
        <div className="flex space-x-6 animate-scroll-left">
          {row1Images.map((img, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative">
        <div className="flex space-x-6 animate-scroll-right">
          {row2Images.map((img, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Work ${index + 7}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWork