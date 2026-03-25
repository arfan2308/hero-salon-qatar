'use client'
console.log("🔥 TimeSlots Loaded")
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const TimeSlots = ({ selectedDate, selectedTime, onTimeSelect }) => {
  const [availableSlots, setAvailableSlots] = useState([])

  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots(selectedDate)
    }
  }, [selectedDate])

  // ✅ GET QATAR CURRENT TIME
  const getQatarNow = () => {
    const now = new Date()

    const qatarTime = new Date(
      now.toLocaleString('en-US', { timeZone: 'Asia/Qatar' })
    )

    return qatarTime
  }

  const generateTimeSlots = (date) => {
    const now = getQatarNow()

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const dayOfWeek = date.getDay()
    const isFriday = dayOfWeek === 5

    const startHour = isFriday ? 15 : 10
    const endHour = 26

    const slots = []

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {

        // ✅ SLOT IN QATAR TIME
        const slot = new Date(year, month, day, hour % 24, minutes, 0, 0)

        if (hour >= 24) {
          slot.setDate(slot.getDate() + 1)
        }

        // ✅ FINAL CHECK
        const isPast = slot.getTime() <= now.getTime()

        // 🧠 DEBUG LOGS
        console.log("------")
        console.log("NOW (QATAR):", now.toString())
        console.log("SLOT:", slot.toString())
        console.log("isPast:", isPast)

        // UI format
        let displayHour = hour > 23 ? hour - 24 : hour
        const period = hour >= 12 && hour < 24 ? 'PM' : 'AM'
        displayHour = displayHour > 12 ? displayHour - 12 : displayHour
        displayHour = displayHour === 0 ? 12 : displayHour

        const timeStr = `${displayHour}:${minutes
          .toString()
          .padStart(2, '0')} ${period}`

        slots.push({ time: timeStr, disabled: isPast })
      }
    }

    setAvailableSlots(slots)
  }

  if (!selectedDate) {
    return (
      <div className="text-center py-8">
        <Clock className="w-10 h-10 text-gray-600 mx-auto mb-3" />
        <p className="text-gray-400 text-sm">Select a date first</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 text-white font-semibold mb-4 text-sm">
        <Clock className="w-5 h-5 text-red-500" />
        <span>Select Time</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-72 overflow-y-auto">

        {availableSlots.map((slot, index) => (
          <motion.button
            key={slot.time}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01 }}

            onClick={(e) => {
              if (slot.disabled) return
              onTimeSelect(slot.time)
            }}

            disabled={slot.disabled}

            className={`
              py-2 px-3 rounded-lg text-xs transition-all

              ${
                slot.disabled
                  ? 'bg-zinc-900 text-gray-600 cursor-not-allowed pointer-events-none opacity-50'
                  : selectedTime === slot.time
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }
            `}
          >
            {slot.time}
          </motion.button>
        ))}

      </div>
    </div>
  )
}

export default TimeSlots