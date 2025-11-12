import Image from "next/image"
import { ArrowRight, Users, BookOpen, Clock } from "lucide-react";
import library from "@/assets/images/library.jpg"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image with Local Image */}
      <div className="absolute inset-0">
        <Image
          src={library}
          alt="Bauchi State Library Interior"
          className="w-full h-full object-cove"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-right from-primary/80 to-blue-900/70 mix-blend-multiply"></div>
      </div>

      {/* Content - Same as above */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to <span className="text-accent">Bauchi State</span>{" "}
                Library
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Your gateway to knowledge, learning, and cultural enrichment.
                Discover a world of books, resources, and community programs
                designed to inspire and educate generations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white transition duration-200 flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200 text-lg backdrop-blur-sm bg-white/10">
                  Explore Collections
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <BookOpen className="h-12 w-12 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-white">50,000+</div>
                <div className="text-blue-200 font-medium">Books Available</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <Users className="h-12 w-12 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-white">15,000+</div>
                <div className="text-blue-200 font-medium">Active Members</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <Clock className="h-12 w-12 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-white">40+</div>
                <div className="text-blue-200 font-medium">Years Serving</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition duration-300">
                <div className="text-3xl font-bold text-white mb-2">7</div>
                <div className="text-blue-200 font-medium">Days a Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
