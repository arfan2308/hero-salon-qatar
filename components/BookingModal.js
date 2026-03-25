'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar as CalendarIcon, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Calendar from './Calendar'
import TimeSlots from './TimeSlots'
import { socialMedia } from '@/utils/barbersData'

const BookingModal = ({ isOpen, onClose, barber, service }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')

  const handleDateSelect = (date) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time')
      return
    }

    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    const message = `💈 Hero Gents Hair Cut Booking\n\n👤 Barber: ${barber}\n✂️ Service: ${service.name}\n⏱️ Duration: ${service.duration}\n💰 Price: ${service.price}\n📅 Date: ${formattedDate}\n⏰ Time: ${selectedTime}\n\nPlease confirm my appointment.`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/97466995378?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const resetModal = () => {
    setSelectedDate(null)
    setSelectedTime('')
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl w-full max-w-4xl p-4 sm:p-6 relative my-8"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-white hover:bg-red-600/20 p-1.5 rounded-lg transition-all z-10"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  Book Appointment
                </h2>
                <p className="text-gray-400 text-sm">Select date and time</p>
              </div>

              {/* Service Info */}
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Barber</p>
                    <p className="text-white font-bold">{barber}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Service</p>
                    <p className="text-white font-semibold text-xs">{service.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Price</p>
                    <p className="text-red-500 font-bold">{service.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Duration</p>
                    <p className="text-gray-300 font-medium">{service.duration}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calendar Section */}
                <div>
                  <div className="flex items-center space-x-2 text-white font-semibold mb-3 text-sm">
                    <CalendarIcon className="w-4 h-4 text-red-500" />
                    <span>Select Date</span>
                  </div>
                  <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
                </div>

                {/* Time Slots Section */}
                <div>
                  <TimeSlots 
                    selectedDate={selectedDate} 
                    selectedTime={selectedTime} 
                    onTimeSelect={handleTimeSelect} 
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-zinc-950/30 border border-zinc-800/50 rounded-lg p-3 mt-6 mb-4">
                <p className="text-xs text-gray-400 mb-1">Business Hours:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <p className="text-white text-xs">Sat-Thu: 10:00 AM - 2:00 AM</p>
                  <p className="text-white text-xs">Fri: 3:00 PM - 2:00 AM</p>
                </div>
              </div>

              {/* Confirm Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                <span>Confirm via WhatsApp</span>
                <CheckCircle className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookingModal
