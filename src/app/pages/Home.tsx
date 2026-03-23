import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowRight, Shield, TrendingUp, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import adaniLogo from "../../assets/clients/adaniLogo.svg";
import jindalLogo from "../../assets/clients/jindalLogo.svg";
import jswLogo from "../../assets/clients/JSWLogo.svg";
import lloydsLogo from "../../assets/clients/lloydsMetals.svg";
import tataSteelLogo from "../../assets/clients/tataSteelLogo.svg";
import miningOperationsImage from "../../assets/miningOperationsImage.png";

export function Home() {
  useEffect(() => {
    document.title = "RMR - Leading Mining & Resource Solutions | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#3D4539] to-[#2A2D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769240627842-1a3bd858695c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBleGNhdmF0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzIxNzgzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mining Operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Leading the Way in <span className="text-[#C9A961]">Logistics, Mineral Resources and Supply Chain Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Professionally managed mining and resource solutions company delivering integrated services across mineral sourcing, project execution, and logistics coordination.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A961] text-black px-8 py-4 hover:bg-[#B8984F] transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong operational expertise and a commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Committed to responsible resource development and reducing environmental impact through sustainable practices.
              </p>
            </div>

            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Disciplined project management with continuous operational improvement to enhance performance.
              </p>
            </div>

            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Efficiency</h3>
              <p className="text-gray-600">
                Optimized supply chains and cost control to deliver value while maintaining quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Integrated Mining & Resource Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RMR delivers comprehensive services across the entire mining and resources value chain. From mineral sourcing to logistics coordination, we manage every aspect with precision and expertise.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Mineral Sourcing & Exploration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Project Execution & Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Logistics & Supply Chain Coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Sustainable Resource Development</span>
                </li>
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[#3D4539] hover:text-[#2A2D26] transition-colors"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[500px] shadow-xl">
              <ImageWithFallback
                src={miningOperationsImage}
                alt="Mining Plant Operations"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-2">
              Our <span className="text-red-600">Clients</span>
            </h2>
          </div>

          <ClientCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Ready to Partner with RMR?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your mineral resource needs with our integrated solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C9A961] text-black px-8 py-4 hover:bg-[#B8984F] transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ClientCarousel Component
function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const clients = [
    { name: "TATA STEEL", logo: tataSteelLogo, color: "#004B87" },
    { name: "JSW", logo: jswLogo, color: "#E31E24" },
    { name: "Adani", logo: adaniLogo, color: "#0C4DA2" },
    { name: "Jindal Steel & Power", logo: jindalLogo, color: "#1B4D89" },
    { name: "Lloyds Metals and Energy Limited", logo: lloydsLogo, color: "#2C5AA0" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Desktop View - Show all clients */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-center h-32 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-6">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tablet View - Show 3 clients */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
        {clients.slice(0, 3).map((client, index) => (
          <div key={index} className="flex items-center justify-center h-32 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-6">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden relative px-12">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex items-center justify-center h-32 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-6">
          <img 
            src={clients[currentIndex].logo} 
            alt={clients[currentIndex].name} 
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots indicator for mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#C9A961]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
