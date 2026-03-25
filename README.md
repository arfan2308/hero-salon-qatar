# 🏪 Hero Gents Hair Cut - Premium Barber Website

A modern, high-end barber shop website built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎯 Core Features
- **Premium Hero Section** - Full-screen hero with image slideshow and smooth animations
- **Dynamic Barber System** - Centrally controlled via `/utils/barbersData.js`
- **Service Filtering** - Services dynamically filtered by selected barber
- **WhatsApp Booking** - Integrated booking flow with WhatsApp confirmation
- **Dual-Row Carousel** - Infinite scrolling work showcase (opposite directions)
- **Masonry Gallery** - Beautiful image grid with lightbox preview
- **Testimonials Slider** - Premium client reviews with animations
- **Contact Section** - Google Maps integration and contact information
- **Fully Responsive** - Mobile-first design, optimized for all devices

### 🎨 Design
- **Color Scheme**: Deep Red (#B11226) + Black (#0F0F0F)
- **Smooth Animations**: Powered by Framer Motion
- **Premium Effects**: Glassmorphism, gradients, hover effects
- **Custom Scrollbar**: Styled to match brand colors

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js                    # Home page
│   ├── services/page.js           # Services page (filtered by barber)
│   ├── gallery/page.js            # Full gallery page
│   ├── layout.js                  # Root layout
│   └── globals.css                # Global styles & animations
│
├── components/
│   ├── Navbar.js                  # Main navigation
│   ├── BookingModal.js            # Booking modal with WhatsApp
│   └── sections/
│       ├── Hero.js                # Premium hero section
│       ├── Barbers.js             # Barber cards section
│       ├── OurWork.js             # Dual-row carousel
│       ├── Testimonials.js        # Client testimonials
│       ├── Contact.js             # Contact & Google Maps
│       └── Footer.js              # Footer section
│
├── utils/
│   └── barbersData.js             # CENTRAL DATA FILE
│
└── package.json                   # Dependencies
```

## 🎯 Dynamic Barber System

All barbers, services, and content are controlled from a single file:

**`/utils/barbersData.js`**

```javascript
export const barbers = [
  {
    id: 1,
    name: "Dalim",
    image: "...",
    specialization: "Fade Master & Styling Expert",
    services: [
      {
        id: 1,
        name: "Classic Fade Haircut",
        price: "50 QAR",
        description: "...",
        image: "..."
      },
      // More services...
    ]
  },
  // More barbers...
];
```

### How to Add/Remove Barbers:
1. Open `/utils/barbersData.js`
2. Add/remove barber objects in the `barbers` array
3. Each barber automatically appears on the home page
4. Services are automatically filtered on the services page

## 📱 Pages

### Home Page (`/`)
- Hero Section (full-screen slideshow)
- Our Barbers (dynamic barber cards)
- Our Work (dual-row infinite carousel)
- Testimonials
- Contact (with Google Maps)
- Footer

### Services Page (`/services?barber=NAME`)
- Displays services for the selected barber
- Service cards with booking functionality
- Dynamic filtering based on URL parameter

### Gallery Page (`/gallery`)
- Masonry grid layout
- Lightbox image preview
- Smooth animations

## 🔄 Booking Flow

1. **Home Page** → Click on barber's "Book Now"
2. **Services Page** → Select a service and click "Book"
3. **Booking Modal** → Choose date and time slot
4. **WhatsApp** → Confirm appointment via WhatsApp message

### WhatsApp Message Format:
```
💈 Hero Gents Hair Cut Booking

👤 Barber: [Barber Name]
✂️ Service: [Service Name]
💰 Price: [Price]
📅 Date: [Selected Date]
⏰ Time: [Selected Time]

Please confirm my appointment.
```

## 🎨 Color Theme

```css
Primary Red:    #B11226
Secondary:      #0F0F0F (Black)
Accent:         #E63946 → #C1121F (Gradient)
Text White:     #FFFFFF
Text Gray:      #D1D1D1
```

## ⚙️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 🚀 Getting Started

### Install Dependencies
```bash
yarn install
```

### Run Development Server
```bash
yarn dev
```

### Build for Production
```bash
yarn build
yarn start
```

## 🎯 Key Animations

### Hero Section
- Smooth image slideshow (5-second intervals)
- Fade and scale transitions
- Text slide-up animations

### Dual-Row Carousel
- Top row: Left → Right (infinite)
- Bottom row: Right → Left (infinite)
- Pause on hover
- Smooth linear animation

### Barber Cards
- Hover lift effect
- Red glow border on hover
- Image zoom on hover
- Scale animation on load

## 📞 Contact Information

- **Phone**: +974 7102 3687
- **WhatsApp**: +974 7102 3687
- **Email**: info@herogents.com
- **Location**: Doha, Qatar

## 🔧 Customization

### Change Barber Information
Edit `/utils/barbersData.js`

### Change Colors
Update Tailwind classes in components:
- `from-red-600 to-red-700` → Your gradient
- `text-red-600` → Your primary color
- `border-red-500` → Your border color

### Change Hero Images
Replace slider images in `/utils/barbersData.js` or update URLs in Hero.js

### Modify Time Slots
Edit `timeSlots` array in `/components/BookingModal.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✅ Features Checklist

- ✅ Premium Hero Section with slideshow
- ✅ Dynamic Barber System (single file control)
- ✅ Services Page with filtering
- ✅ WhatsApp Booking Integration
- ✅ Dual-Row Infinite Carousel
- ✅ Masonry Gallery with Lightbox
- ✅ Testimonials Slider
- ✅ Google Maps Integration
- ✅ Fully Responsive Design
- ✅ Smooth Framer Motion Animations
- ✅ Red + Black Premium Theme
- ✅ Custom Scrollbar
- ✅ Hover Effects & Interactions

## 🌐 Live Website

**URL**: https://barber-elite-web.preview.emergentagent.com

---

Built with ❤️ for Hero Gents Hair Cut
