import React from 'react'
import { Link } from 'react-router-dom'   // 🔥 Import Link
import heroImg from '../../assets/rabbit-hero.webp'

const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase leading-tight mb-4">
            Vacation <br /> Ready
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-lg mb-6 max-w-[90%] mx-auto">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>

          {/* Button */}
          <Link
            to="/shop" // 👉 Change route as per your setup
            className="bg-white text-gray-950 px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
