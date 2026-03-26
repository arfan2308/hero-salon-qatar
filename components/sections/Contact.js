'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { socialMedia } from '@/utils/barbersData'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit <span className="text-red-600">Our Shop</span>
          </h2>
          <p className="text-gray-400 text-lg">We're here to serve you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Location</h3>
                <a
                  href="https://www.google.com/maps/place/Hero+Gents+Hair+Cut/@25.3127321,51.4921483,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45db400f475f89:0x793f1bd217f8b87f!8m2!3d25.3127321!4d51.4947232!16s%2Fg%2F11dxmn4frz?hl=en&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Hero Gents Hair Cut<br />
                  Doha, Qatar<br />
                  Click to open in Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Phone & WhatsApp</h3>
                <a
                  href={`tel:${socialMedia.phone}`}
                  className="text-gray-400 hover:text-red-500 transition-colors block mb-2"
                >
                  {socialMedia.phone}
                </a>
                <a
                  href={socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors text-sm"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                <a
                  href={`mailto:${socialMedia.email}`}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  {socialMedia.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Working Hours</h3>
                <p className="text-gray-400">Saturday - Thursday: 10:00 AM - 2:00 AM</p>
                <p className="text-gray-400">Friday: 3:00 PM - 2:00 AM</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7461334213!2d51.49214827516759!3d25.31273207763678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db400f475f89%3A0x793f1bd217f8b87f!2sHero%20Gents%20Hair%20Cut!5e0!3m2!1sen!2sqa!4v1774288598148!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact