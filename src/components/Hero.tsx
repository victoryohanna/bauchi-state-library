import Image from "next/image";
import { ArrowRight } from "lucide-react";
import library from "@/assets/images/library2.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full max-w-6xl h-full">
          <Image
            src={library}
            alt="Bauchi State Library Interior"
            className="object-cover"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-right from-primary/60 to-blue-900/50 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Welcome to Bauchi State Library
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Your gateway to knowledge, learning, and cultural enrichment.
                Discover a world of books, resources, and community programs
                designed to inspire and educate generations.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <button className="bg-yellow-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
                  Become a Member
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <button className="bg-white border-2 border-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-lg sm:text-xl backdrop-blur-sm ">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 sm:w-7 h-10 sm:h-12 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 sm:h-4 bg-white/80 rounded-full mt-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
