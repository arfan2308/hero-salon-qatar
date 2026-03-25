'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/utils/barbersData'
import { useState } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Real reviews from satisfied customers</p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                  display: activeIndex === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar with First Letter */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-4xl font-bold border-4 border-red-500/30">
                    {testimonial.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-300 text-lg mb-6 italic">
                      "{testimonial.review}"
                    </p>

                    {/* Name */}
                    <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm mt-1">Google Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-12 bg-red-600' : 'w-8 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials