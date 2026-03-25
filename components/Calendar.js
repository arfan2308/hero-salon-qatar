'use client'
console.log("🔥 calender Loaded")

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const days = []
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null)
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d))
    }
    return days
  }

  const isPast = (date) => {
    if (!date) return false
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    return d < today
  }

  const isSame = (a, b) =>
    a && b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

  return (
    <div className="p-4 bg-white-900 rounded-xl">

      {/* Header */}
      <div className="flex justify-between mb-3 text-white font-semibold">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="p-2 rounded-lg hover:bg-zinc-800"
        >
          <ChevronLeft className="text-white w-4 h-4" />
        </button>

        <div className="text-white font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>

        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="p-2 rounded-lg hover:bg-zinc-800"
        >
          <ChevronRight className="text-white w-4 h-4" />
        </button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-xs mb-2">
        {daysOfWeek.map(d => <div key={d}>{d}</div>)}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth(currentMonth).map((date, i) => {

          const past = isPast(date)
          const selected = isSame(date, selectedDate)

          return (
            <button
              key={i}
              disabled={!date || past}

              onClick={() => {
                if (!date || past) return

                const cleanDate = new Date(date)
                cleanDate.setHours(0, 0, 0, 0)

                console.log("✅ Selected Date:", cleanDate)

                onDateSelect(cleanDate)
              }}

              className={`
                h-8 rounded text-sm
                ${past ? 'text-gray-600 cursor-not-allowed' : 'text-white'}
                ${selected ? 'bg-red-600 text-white' : ''}
                ${!past && !selected ? 'hover:bg-zinc-800' : ''}
              `}
            >
              {date?.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar