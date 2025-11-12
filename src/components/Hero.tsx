import Image from "next/image";
import { ArrowRight, Users, BookOpen, Clock } from "lucide-react";
import library from "@/assets/images/library.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Local Image */}
      <div className="absolute inset-0">
        <Image
          src={library}
          alt="Bauchi State Library Interior"
          className="w-full h-full object-cover"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-right from-primary/80 to-blue-900/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to <span className="text-accent">Bauchi State</span>{" "}
                Library
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your gateway to knowledge, learning, and cultural enrichment.
                Discover a world of books, resources, and community programs
                designed to inspire and educate generations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button className="bg-accent text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200 flex items-center justify-center text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200 text-base sm:text-lg backdrop-blur-sm bg-white/10">
                  Explore Collections
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <BookOpen className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 mx-auto mb-2 sm:mb-3 text-accent" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  50,000+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-200 font-medium">
                  Books Available
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <Users className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 mx-auto mb-2 sm:mb-3 text-accent" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  15,000+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-200 font-medium">
                  Active Members
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <Clock className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 mx-auto mb-2 sm:mb-3 text-accent" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  40+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-200 font-medium">
                  Years Serving
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                  7
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-200 font-medium">
                  Days a Week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
