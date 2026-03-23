import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export function Limestone() {
  useEffect(() => {
    document.title = "Limestone - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#3D4539] to-[#2A2D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1667260637672-cfb33668eefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBxdWFycnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MzMzMTk5NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Limestone Quarry"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6">Limestone</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            High-grade limestone for cement, steel, and construction industries
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
                  Limestone is a sedimentary rock composed primarily of calcium carbonate (CaCO₃). It is one of the most widely used minerals in construction, manufacturing, and industrial processes.
                </p>
                <p>
                  We supply high-quality limestone from premium quarries across India, suitable for cement production, steel manufacturing, agriculture, chemical industries, and construction applications.
                </p>
                <p>
                  Our limestone products are available in various grades and sizes, from crushed aggregates to fine powder, meeting specific requirements for different industrial applications.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F3EF] p-8 border-l-4 border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-6">Key Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">CaCO₃ Content:</span>
                    <span className="text-gray-600"> 85% - 98%</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Types:</span>
                    <span className="text-gray-600"> Calcitic, Dolomitic, High Calcium</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Sizes:</span>
                    <span className="text-gray-600"> Boulders, Lumps, Chips, Powder (0-300mm)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Origin:</span>
                    <span className="text-gray-600"> Rajasthan, MP, Gujarat, AP</span>
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
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Cement Industry</h3>
              <p className="text-gray-600">
                Primary raw material for Portland cement production
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Steel Manufacturing</h3>
              <p className="text-gray-600">
                Flux material in blast furnaces and BOF steelmaking
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Construction</h3>
              <p className="text-gray-600">
                Road base material, aggregate, and building stone
              </p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Chemical Industry</h3>
              <p className="text-gray-600">
                Production of lime, calcium compounds, and chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Available Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EF] p-8 border-t-4 border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-4">High Calcium</h3>
              <p className="text-gray-600 mb-4">Premium grade with maximum calcium content</p>
              <ul className="space-y-2 text-gray-600">
                <li>• CaCO₃: 95-98%</li>
                <li>• Low MgO content</li>
                <li>• High purity</li>
                <li>• Cement & steel grade</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EF] p-8 border-t-4 border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-4">Standard Grade</h3>
              <p className="text-gray-600 mb-4">General purpose limestone for various industries</p>
              <ul className="space-y-2 text-gray-600">
                <li>• CaCO₃: 90-95%</li>
                <li>• Moderate purity</li>
                <li>• Versatile use</li>
                <li>• Construction & industry</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EF] p-8 border-t-4 border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-4">Dolomitic</h3>
              <p className="text-gray-600 mb-4">Contains both calcium and magnesium carbonates</p>
              <ul className="space-y-2 text-gray-600">
                <li>• CaCO₃: 85-90%</li>
                <li>• MgO: 5-12%</li>
                <li>• Dual carbonates</li>
                <li>• Steel & agriculture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Product Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Boulders</h3>
              <p className="text-gray-600 mb-2">Large stones for primary crushing</p>
              <p className="text-sm text-gray-500">Size: 150-300mm</p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Lumps</h3>
              <p className="text-gray-600 mb-2">Medium-sized pieces for industrial use</p>
              <p className="text-sm text-gray-500">Size: 50-150mm</p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Chips/Aggregates</h3>
              <p className="text-gray-600 mb-2">Crushed stone for construction</p>
              <p className="text-sm text-gray-500">Size: 10-50mm</p>
            </div>
            <div className="bg-white p-6 border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">Powder</h3>
              <p className="text-gray-600 mb-2">Finely ground for chemical use</p>
              <p className="text-sm text-gray-500">Size: 0-10mm / mesh</p>
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
              Comprehensive quality control ensures product consistency and reliability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chemical Analysis</h3>
                <p className="text-gray-600">
                  CaCO₃, MgO, SiO₂, Al₂O₃, Fe₂O₃, and LOI testing
                </p>
              </div>
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Testing</h3>
                <p className="text-gray-600">
                  Size distribution, moisture, and bulk density analysis
                </p>
              </div>
              <div className="bg-[#F5F3EF] p-6 border border-[#C9A961]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
                <p className="text-gray-600">
                  Test reports and quality certificates for every batch
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
            Need Quality Limestone Supply?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your limestone requirements and receive a competitive quote.
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
