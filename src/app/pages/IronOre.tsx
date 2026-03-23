import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export function IronOre() {
  useEffect(() => {
    document.title = "Iron Ore - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#3D4539] to-[#2A2D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602893631603-a4594886a96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcm9uJTIwb3JlJTIwbWluaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzMzMzE5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Iron Ore Mining"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6">Iron Ore</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            Iron ore is the essential raw material for steel production, driving infrastructure and industrial growth worldwide. At RMR, we specialize in supplying premium quality iron ore fines to meet the demanding needs of modern steel manufacturing.
          </p>
        </div>
      </section>

      {/* Iron Ore Supply Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">
                <span className="text-[#C9A961]">Our</span> Iron Ore Supply
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  We provide high-grade iron ore fines/lumps with 54-57% (export) and 60%+ (domestic) Fe content, featuring low impurities and optimal sizing.
                </p>
                <p>
                  Sourced from Odisha, Karnataka, Jharkhand, Goa (Maharashtra) mines, our product ensures consistent quality for blast furnace and pellet plant operations.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F3EF] p-8 border border-[#C9A961]">
              <h3 className="text-2xl text-gray-900 mb-6">Our Designated Ports</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 border border-[#C9A961] text-center">
                  <p className="text-xl font-semibold text-gray-900">Vizag</p>
                </div>
                <div className="bg-white p-4 border border-[#C9A961] text-center">
                  <p className="text-xl font-semibold text-gray-900">Paradip</p>
                </div>
                <div className="bg-white p-4 border border-[#C9A961] text-center">
                  <p className="text-xl font-semibold text-gray-900">Krishnapatnam</p>
                </div>
                <div className="bg-white p-4 border border-[#C9A961] text-center">
                  <p className="text-xl font-semibold text-gray-900">Redi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grades and Specifications Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            <span className="text-[#C9A961]">Grades</span> and Specifications
          </h2>
          
          {/* Chemical Specifications Table */}
          <div className="bg-white border border-[#C9A961] overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F5F3EF]">
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Specification</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 1 (Fines)</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 2 (Fines)</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 3 (Lumps)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Iron (Fe)</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">57%/56% basis</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">55%/54% basis</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">50%/49% basis</td>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900"></td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">Rejection ≤55%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">Rejection ≤53%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">Rejection &lt;49%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Alumina (Al₂O₃)</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤6.00%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤5.50%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤9.00%</td>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Silica (SiO₂)</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤9.00%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤8.50%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤9.00%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Phosphorus (P)</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.08%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.08%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.08%</td>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Sulfur (S)</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.05%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.05%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤0.05%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Moisture</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤8.00%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤10.00%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤10.00%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Size Distribution Table */}
          <div className="bg-white border border-[#C9A961] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#C9A961]">
                  <th colSpan={4} className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Size Distribution</th>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Size Fraction</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 1 (Fines)</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 2 (Fines)</th>
                  <th className="px-4 py-4 text-left border border-[#C9A961] font-semibold text-gray-900">Grade 3 (Lumps)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">0-10 mm</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≥85%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≥85%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤15% (fines)</td>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">&gt;10 mm</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤15%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤15%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤15%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Below 150 microns</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤35%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤35%</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤35%</td>
                </tr>
                <tr className="bg-[#F5F3EF]">
                  <td className="px-4 py-3 border border-[#C9A961] font-semibold text-gray-900">Max Lump Size</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">–</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">–</td>
                  <td className="px-4 py-3 border border-[#C9A961] text-gray-600">≤40 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Ready to Source Quality Iron Ore?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your iron ore requirements and get a competitive quote.
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
