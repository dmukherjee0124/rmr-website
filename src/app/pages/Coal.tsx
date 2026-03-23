import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function Coal() {
  useEffect(() => {
    document.title = "Coal - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#3D4539] to-[#2A2D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740156118334-5ffeb7832eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwZXh0cmFjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzczMzMzMTk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coal Mining"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6">Coal</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            Coal is a combustible black or brownish-black sedimentary rock, formed as rock strata called coal seams. Coal is mostly carbon with variable amounts of other elements, chiefly hydrogen, Sulphur, oxygen, and nitrogen.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-gray-900 mb-6 text-center">
              <span className="text-[#C9A961]">Our</span> Coal Supply
            </h2>
            <div className="prose prose-lg text-gray-600 text-center space-y-4">
              <p>
                Thermal coal remains a fundamental energy source for power generation and industrial processes across Asia. We offer multiple grades from Indonesia, Australia and domestic sources, with controlled ash and Sulphur levels.
              </p>
              <p>
                Our GAR and NAR specifications cater to diverse energy requirements, supported by our integrated supply chain for reliable delivery to power plants and cement manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesian Grades */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            <span className="text-[#C9A961]">Indonesian</span> Grades
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 3400 GAR */}
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">3400 GAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">3400 Kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;3200 Kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">40-45%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Inherent Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">14-16%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">8%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">0.50%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;0.7%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">40-45%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">By Difference</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">Index</td>
                    <td className="px-4 py-3 border border-gray-300">55-60 (approx)</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">90%</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;90%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4200 GAR */}
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">4200 GAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">4200 Kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;4000 Kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">36-38%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;40%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Inherent Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">15%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">6-8%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">0.8-1%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;1.2%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">35-45%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">By Difference</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">Index</td>
                    <td className="px-4 py-3 border border-gray-300">45-50</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">90% (approx)</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5000 GAR */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">5000 GAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">5000 Kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;4800 Kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">28%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Inherent Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">14%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">8%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">0.8% (max)</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;0.1%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">40%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">By Difference</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">Index</td>
                    <td className="px-4 py-3 border border-gray-300">50</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">90%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* South Africa Grades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            <span className="text-[#C9A961]">South Africa</span> Grades
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 6000 NAR (RB1) */}
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">RB1 - 6000 NAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV</td>
                    <td className="px-4 py-3 border border-gray-300">NCB</td>
                    <td className="px-4 py-3 border border-gray-300">6,000 kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;5,800 kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">13%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Inherent Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">7.50%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;2%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">11%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;1.2%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">21%-24%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">By Difference</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">0-50</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5500 NAR (RB2) */}
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">RB2 - 5500 NAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">5500 kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;5200 kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">8.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;14.0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">20.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;23.0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">23.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;20.0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">62.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;60.0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">0.80%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;1.25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">AFT</td>
                    <td className="px-4 py-3 border border-gray-300">n/a</td>
                    <td className="px-4 py-3 border border-gray-300">1250°C (approx)</td>
                    <td className="px-4 py-3 border border-gray-300">n/a</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">n/a</td>
                    <td className="px-4 py-3 border border-gray-300">46-70 (approx)</td>
                    <td className="px-4 py-3 border border-gray-300">n/a</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">90%</td>
                    <td className="px-4 py-3 border border-gray-300">n/a</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4800 NAR (RB3) */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">RB3 - 4800 NAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">GCV (NCV)</td>
                    <td className="px-4 py-3 border border-gray-300">AR</td>
                    <td className="px-4 py-3 border border-gray-300">4,800 kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;4,500 kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">9.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;14.0% (wt. reduction)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">28.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;32.0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">21.00%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;18.0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Fixed Carbon</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">48.00%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">0.80%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;1.2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Fusion Temp</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                    <td className="px-4 py-3 border border-gray-300">1,250°C</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                    <td className="px-4 py-3 border border-gray-300">45-70</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                    <td className="px-4 py-3 border border-gray-300">90% (0-30mm)</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* U.S. Grades */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            <span className="text-[#C9A961]">U.S.</span> Grades
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[#C9A961] overflow-x-auto">
              <div className="bg-[#C9A961] p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900">7000 NAR</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-3 text-left border border-gray-300">Parameter</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Basis</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Guaranteed</th>
                    <th className="px-4 py-3 text-left border border-gray-300">Rejection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Net Calorific Value</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">7,000 kcal/kg</td>
                    <td className="px-4 py-3 border border-gray-300">&lt;6,800 kcal/kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Total Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ARB</td>
                    <td className="px-4 py-3 border border-gray-300">5%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Inherent Moisture</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">2-3%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Ash Content</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">7%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;9%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Sulphur</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">3%</td>
                    <td className="px-4 py-3 border border-gray-300">&gt;4%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Volatile Matter</td>
                    <td className="px-4 py-3 border border-gray-300">ADB</td>
                    <td className="px-4 py-3 border border-gray-300">36-40% (approx)</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 font-semibold">HGI</td>
                    <td className="px-4 py-3 border border-gray-300">Index</td>
                    <td className="px-4 py-3 border border-gray-300">50</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-semibold">Size (0 × 50)</td>
                    <td className="px-4 py-3 border border-gray-300">mm</td>
                    <td className="px-4 py-3 border border-gray-300">90%</td>
                    <td className="px-4 py-3 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Need Reliable Coal Supply?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your coal requirements and receive a competitive quotation.
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
