import React from 'react'

function Hero() {
  return (
    <div
      className="relative h-[400px] flex flex-col justify-end text-white pt-16"
      style={{
        backgroundImage: 'url(/path/to/your/dark-image.jpeg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumbs */}
        <p className="text-sm mb-4 text-gray-300">Home / Contacts</p>
        
        {/* Main Title */}
        <h1 className="text-6xl font-extrabold tracking-tight">
          Contacts
        </h1>
        
        {/* Scroll-to-top button simulation */}
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer">
            <span className="text-red-500 font-bold">^</span>
        </div>
      </div>
    </div>
  )
}

export default Hero