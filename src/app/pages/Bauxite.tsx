import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export function Bauxite() {
  useEffect(() => {
    document.title = "Bauxite - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#3D4539] to-[#2A2D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760651913970-98e38bd28f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXV4aXRlJTIwYWx1bWludW0lMjBvcmUlMjBtaW5lcmFsfGVufDF8fHx8MTc3MzMzMTk5NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bauxite Mining"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#C9A961] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6">Bauxite</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            Bauxite is the primary ore of aluminum and the world's main source of this essential metal. It forms through the weathering of aluminum-rich rocks in tropical regions and is typically reddish-brown due to its iron content. Extracted through open-pit mining, bauxite is refined into alumina and then smelted to produce aluminum, which is used in everything from aircraft to beverage cans. While crucial for modern industry, bauxite mining poses environmental challenges, driving efforts toward more sustainable practices.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  We export Bauxite to Singapore, Hongkong, Dubai and China. We do that from our rich mines in Odisha, Maharastra and Rajasthan.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F3EF] p-8 border-l-4 border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-6">Key Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Al₂O₃ Content:</span>
                    <span className="text-gray-600"> 40% - 60%</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Types:</span>
                    <span className="text-gray-600"> Metallurgical, Refractory, Chemical Grade</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Sizes:</span>
                    <span className="text-gray-600"> Crushed (0-50mm), Lumps (50-150mm)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Origin:</span>
                    <span className="text-gray-600"> Odisha, Maharastra, Rajasthan</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Aluminum Production</h3>
              <p className="text-gray-600">
                Primary source for alumina extraction and aluminum smelting
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Refractories</h3>
              <p className="text-gray-600">
                Manufacturing of refractory bricks and castables for high-temperature applications
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Cement Industry</h3>
              <p className="text-gray-600">
                Used in calcium aluminate cement production
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Chemical Industry</h3>
              <p className="text-gray-600">
                Production of aluminum sulfate and other chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-gray-900 mb-6">Quality Assurance</h2>
            <p className="text-xl text-gray-600 mb-12">
              Rigorous testing protocols ensure consistent quality and specification compliance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chemical Analysis</h3>
                <p className="text-gray-600">
                  Al₂O₃, SiO₂, Fe₂O₃, TiO₂, and reactive silica testing
                </p>
              </div>
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Testing</h3>
                <p className="text-gray-600">
                  Moisture content, LOI, and particle size analysis
                </p>
              </div>
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
                <p className="text-gray-600">
                  Third-party inspection and quality certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Looking for Quality Bauxite?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your bauxite requirements and receive a detailed quotation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C9A961] text-black px-8 py-4 hover:bg-[#B8984F] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
