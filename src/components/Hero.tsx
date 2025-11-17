"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
import slide3 from "@/assets/images/slide3.jpg";
import { useState, useRef } from "react";

const slides = [
  { id: 1, image: slide1, alt: "Bauchi State Library Interior" },
  { id: 2, image: slide2, alt: "Bauchi State Library Collection" },
  { id: 3, image: slide3, alt: "Bauchi State Library Reading Area" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        <Carousel
          ref={carouselRef}
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
          transitionTime={1000}
          swipeable={true}
          emulateTouch={true}
          onChange={setCurrentSlide}
          selectedItem={currentSlide}
          className="h-full"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-screen">
              <Image
                src={slide.image}
                alt={slide.alt}
                className="object-cover"
                priority={slide.id === 1}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-right from-primary/60 to-blue-900/50 mix-blend-multiply"></div>
            </div>
          ))}
        </Carousel>
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
                <button className="bg-white border-2 border-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-lg sm:text-xl backdrop-blur-sm">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:block z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:block z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Custom Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 sm:w-7 h-10 sm:h-12 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 sm:h-4 bg-white/80 rounded-full mt-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
