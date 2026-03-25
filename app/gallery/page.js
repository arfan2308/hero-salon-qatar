'use client'

import { motion } from 'framer-motion'
import { galleryImages } from '@/utils/barbersData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-2 mb-4"
            >
              <ZoomIn className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-sm font-medium">Our Premium Work</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-600">Gallery</span>
            </h1>
            <p className="text-gray-400 text-lg">Explore our finest work and transformations</p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(img)}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl border-2 border-zinc-800 hover:border-red-500/50 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20"
                  >
                    <ZoomIn className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-500 transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-red-600/20"
          >
            <X className="w-8 h-8" />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  )
}

export default GalleryPage
