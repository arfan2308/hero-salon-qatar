# 💈 Hero Gents Hair Cut - Premium Barber Booking Platform

A **fully functional, real-world premium barber booking website** built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🌟 Live Website
**https://barber-elite-web.preview.emergentagent.com**

---

## ✨ Key Features

### 🎯 Smart Booking System (Real Logic)
- **Date Picker**: Automatically disables all past dates
- **Dynamic Time Slots**: 
  - Generates slots every 30 minutes
  - Hides past times for current day
  - Shows all slots for future dates
- **Business Hours**:
  - Saturday - Thursday: 10:00 AM - 2:00 AM
  - Friday: 3:00 PM - 2:00 AM
- **WhatsApp Integration**: Sends formatted booking confirmation to +974 66995378

### 💈 Dynamic Barber System
- **Centralized Control**: All data managed from `/utils/barbersData.js`
- **3 Expert Barbers**: Dalim (8 services), Ujjol (4 services), Deep (4 services)
- **Unique Services**: Each barber has different services with prices and durations
- **Easy Management**: Add/remove barbers without touching UI code

### 🎨 Premium UI Features
- **Fixed Barber Images**: No cropping, using object-contain for full visibility
- **Smooth Animations**: Framer Motion throughout
- **Social Media Integration**: Instagram, Facebook, TikTok, WhatsApp
- **Real Testimonials**: Google review style with avatar letters
- **Google Maps**: Embedded real location
- **Dual-Row Carousel**: Infinite scroll in opposite directions

---

## 📋 Barber Services

### Dalim - Master Stylist & Senior Barber
1. **Haircut & Shaving** - 150 QAR (1 hr)
2. **VVIP Haircut & Shaving** - 250 QAR (1 hr)
3. **Haircut** - 50-100 QAR (1 hr)
4. **Hair Coloring** - 300-500 QAR (2 hr)
5. **Perm** - 300-500 QAR (1 hr)
6. **Protein Treatment** - 300-500 QAR (2 hr)
7. **Home Service** - 400 QAR (2 hr)
8. **Shaving** - 30-50 QAR (1 hr)

### Ujjol - Professional Barber
1. **Haircut (Teenager)** - 30-50 QAR (30 mins)
2. **Haircut** - 50-100 QAR (30 mins)
3. **Shaving** - 30-50 QAR (30 mins)
4. **Haircut & Shaving** - 70-100 QAR (1 hr)

### Deep - Skilled Barber
1. **Haircut (Teenager)** - 30-50 QAR (30 mins)
2. **Haircut** - 50-100 QAR (30 mins)
3. **Shaving** - 30-50 QAR (30 mins)
4. **Haircut & Shaving** - 70-100 QAR (1 hr)

---

## 🔄 Booking Flow

```
1. Home Page → Select Barber (Dalim/Ujjol/Deep)
2. Services Page → Choose Service
3. Booking Modal → 
   - Select Date (only future dates)
   - Choose Time (dynamic slots based on business hours)
   - Confirm via WhatsApp
4. WhatsApp opens with pre-filled message:

💈 Hero Gents Hair Cut Booking
👤 Barber: [Name]
✂️ Service: [Service Name]
⏱️ Duration: [Duration]
💰 Price: [Price]
📅 Date: [Selected Date]
⏰ Time: [Selected Time]

Please confirm my appointment.
```

---

## 📞 Contact Information

- **Phone & WhatsApp**: +974 66995378
- **Email**: herogentssalon@gmail.com
- **Location**: Hero Gents Hair Cut, Doha, Qatar

### Business Hours
- **Saturday - Thursday**: 10:00 AM - 2:00 AM
- **Friday**: 3:00 PM - 2:00 AM

---

## 🌐 Social Media

- **Instagram**: https://www.instagram.com/dalim_hero
- **Facebook**: https://www.facebook.com/share/1C2KSWu8oZ
- **TikTok**: https://www.tiktok.com/@dalimhero1

---

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js                    # Home (Hero, Barbers, Work, Testimonials, Contact)
│   ├── services/page.js           # Services filtered by barber
│   ├── gallery/page.js            # Gallery page
│   ├── layout.js                  # Root layout
│   └── globals.css                # Global styles & animations
│
├── components/
│   ├── Navbar.js                  # Navigation with logo
│   ├── BookingModal.js            # Smart booking with date/time logic
│   └── sections/
│       ├── Hero.js                # Hero with social media
│       ├── Barbers.js             # Fixed barber images
│       ├── OurWork.js             # Dual-row carousel
│       ├── Testimonials.js        # Real reviews
│       ├── Contact.js             # Google Maps + info
│       └── Footer.js              # Footer with social icons
│
└── utils/
    └── barbersData.js             # CENTRAL CONTROL FILE
```

---

## 🎯 Smart Booking Logic

### Date Validation
```javascript
// Only allow current date and future dates
const today = new Date().toISOString().split('T')[0]
<input type="date" min={today} />
```

### Time Slot Generation
```javascript
// Dynamic time slots based on:
1. Current system time (hides past times)
2. Selected date (show all for future dates)
3. Business hours (Sat-Thu: 10AM-2AM, Fri: 3PM-2AM)
4. 30-minute intervals
```

### Example:
If current time is **9:00 PM on March 23, 2026**:
- ❌ Cannot select dates before March 23
- ❌ Cannot select times before 9:00 PM for today
- ✅ Can select 9:30 PM, 10:00 PM, etc. for today
- ✅ Can select all slots for March 24+

---

## 🎨 Design Theme

```css
Primary:    #B11226 (Deep Red)
Secondary:  #0F0F0F (Black)
Accent:     #E63946 → #C1121F (Gradient)
Text:       #FFFFFF, #D1D1D1
```

### Design Elements
- Glassmorphism effects
- Smooth transitions
- Hover glow effects
- Premium card layouts
- Custom red scrollbar
- Red + Black theme throughout

---

## 🔧 How to Manage Barbers & Services

### Edit `/utils/barbersData.js`

```javascript
export const barbers = [
  {
    id: 1,
    name: "New Barber Name",
    image: "image_url",
    specialization: "Expert Title",
    services: [
      {
        id: 1,
        name: "Service Name",
        duration: "1 hr",
        price: "100 QAR",
        description: "Service description",
        image: "service_image_url"
      }
      // Add more services...
    ]
  }
  // Add more barbers...
];
```

**Changes automatically reflect on:**
- Home page barber cards
- Services page
- Booking modal
- All service counts

---

## 🚀 Getting Started

### Installation
```bash
yarn install
```

### Development
```bash
yarn dev
```

### Production
```bash
yarn build
yarn start
```

---

## ⭐ Real Testimonials

### Brook Yitbarek (5★)
"Haircut was very good, exceptional service, skilled barbers, nice interior. Definitely would recommend."

### Asnans Mohamed (5★)
"Workers very friendly and humorous gave the freshest cut ever and styled my hair properly I will definitely be coming back again"

### frizzylol (5★)
"Dalim best barber"

---

## 📱 Pages

1. **Home** (`/`) - Full landing page with all sections
2. **Services** (`/services?barber=NAME`) - Dynamic service filtering
3. **Gallery** (`/gallery`) - Masonry image gallery with lightbox

---

## 🎯 Technical Highlights

### Barber Image Fix
- Uses `object-contain` instead of `object-cover`
- No cropping or cutting of faces
- Soft gradient overlay at bottom
- Hover zoom effect preserved

### Smart Time Slot Algorithm
```javascript
function generateTimeSlots(selectedDate) {
  const now = new Date()
  const isToday = selectedDate === now.toDateString()
  const isFriday = selectedDate.getDay() === 5
  
  // Start time based on day
  const startHour = isFriday ? 15 : 10
  
  // Generate 30-min intervals
  // Skip past times if today
  // Return available slots
}
```

### WhatsApp Integration
```javascript
const message = `💈 Hero Gents Hair Cut Booking
👤 Barber: ${barber}
✂️ Service: ${service.name}
⏱️ Duration: ${service.duration}
💰 Price: ${service.price}
📅 Date: ${date}
⏰ Time: ${time}

Please confirm my appointment.`

window.open(`https://wa.me/97466995378?text=${encodeURIComponent(message)}`)
```

---

## ✅ Upgrades Completed

- ✅ Fixed barber images (no cropping)
- ✅ Smart booking system (real date/time logic)
- ✅ Updated all services with duration
- ✅ WhatsApp number changed to +974 66995378
- ✅ Real contact information
- ✅ Google Maps integration
- ✅ Real testimonials (Google review style)
- ✅ Social media links (Instagram, Facebook, TikTok)
- ✅ Business hours display
- ✅ Dynamic barber system
- ✅ Premium UI throughout

---

## 🎉 Final Result

A **production-ready, real-world barber booking platform** with:
- Smart booking logic (no past dates/times)
- WhatsApp confirmation
- Dynamic service management
- Premium design
- Fully responsive
- Real business data

**Ready for immediate deployment!**

---

Built with ❤️ for Hero Gents Hair Cut, Doha, Qatar
