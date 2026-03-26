'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar as CalendarIcon, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Calendar from './Calendar'
import TimeSlots from './TimeSlots'

const BookingModal = ({ isOpen, onClose, barber, service }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')

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

    window.open(`https://wa.me/97466995378?text=${encodeURIComponent(message)}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* MODAL WRAPPER (FIXED MOBILE ISSUE) */}
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto pt-12 sm:pt-4">

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl w-full max-w-4xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto"
            >

              {/* CLOSE BUTTON (FIXED) */}
              <button
                onClick={onClose}
                className="absolute top-5 sm:top-3 right-3 z-20 text-gray-400 hover:text-white hover:bg-red-600/20 p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* HEADER */}
              <div className="mb-6 mt-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Book Appointment
                </h2>
                <p className="text-gray-400 text-sm">Select date and time</p>
              </div>

              {/* SERVICE INFO */}
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <Info label="Barber" value={barber} />
                  <Info label="Service" value={service.name} />
                  <Info label="Price" value={service.price} highlight />
                  <Info label="Duration" value={service.duration} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* CALENDAR */}
                <div>
                  <SectionTitle title="Select Date" />
                  <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                </div>

                {/* TIME SLOTS */}
                <div>
                  <SectionTitle title="Select Time" />
                  <TimeSlots
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onTimeSelect={setSelectedTime}
                  />
                </div>

              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-zinc-950/30 border border-zinc-800/50 rounded-lg p-3 mt-6 mb-4">
                <p className="text-xs text-gray-400 mb-1">Business Hours:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <p className="text-white text-xs">Sat-Thu: 10:00 AM - 2:00 AM</p>
                  <p className="text-white text-xs">Fri: 3:00 PM - 2:00 AM</p>
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-red-500/40 transition-all disabled:opacity-40"
              >
                Confirm via WhatsApp
              </motion.button>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* 🔹 SMALL COMPONENTS */

const Info = ({ label, value, highlight }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className={`font-semibold ${highlight ? 'text-red-500' : 'text-white'}`}>
      {value}
    </p>
  </div>
)

const SectionTitle = ({ title }) => (
  <div className="text-white font-semibold mb-3 text-sm">
    {title}
  </div>
)

export default BookingModal