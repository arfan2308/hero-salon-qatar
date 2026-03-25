import './globals.css'

export const metadata = {
  title: 'Hero Gents Hair Cut | Premium Barber Shop in Qatar',
  description: 'Experience premium barbering services with expert stylists. Precision cuts, modern styles, and expert grooming in Doha, Qatar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}