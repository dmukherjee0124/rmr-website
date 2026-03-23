import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Award, Users, Globe } from "lucide-react";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    document.title = "About Us - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">About RMR</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Rathore Minerals & Resources - Your trusted partner in mining and resource solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMG9wZXJhdGlvbnN8ZW58MXx8fHwxNzcyMjEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mining Operations"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Rathore Minerals & Resources (RMR) is a professionally managed mining and resource solutions company delivering integrated services across mineral sourcing, project execution, and logistics coordination.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Built on strong operational expertise, RMR combines disciplined project management with a clear commitment to sustainability and process efficiency. The company focuses on responsible resource development, optimized supply chains, cost control, and continuous operational improvement to enhance performance while reducing environmental impact.
              </p>
              <p className="text-lg text-gray-600">
                With operations spanning across multiple states and a dedicated team of professionals, RMR has established itself as a reliable partner for businesses seeking comprehensive mining and resource solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white border border-[#C9A961]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To deliver integrated mining and resource solutions that combine operational excellence with environmental responsibility, creating sustainable value for our clients and communities.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#C9A961]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become a globally trusted resource solutions company that not only delivers excellence in mineral sourcing and supply chain management but also pioneers sustainable growth through renewable energy and responsible environmental practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets RMR apart in the mining and resources industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F3EF] border border-[#C9A961] text-[#3D4539] mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Highly skilled professionals with deep industry knowledge and expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F3EF] border border-[#C9A961] text-[#3D4539] mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Wide Reach</h3>
              <p className="text-gray-600">
                Operations across multiple states ensuring comprehensive coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F3EF] border border-[#C9A961] text-[#3D4539] mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Precision</h3>
              <p className="text-gray-600">
                Disciplined approach to project management and execution.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F3EF] border border-[#C9A961] text-[#3D4539] mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Quality Focus</h3>
              <p className="text-gray-600">
                Unwavering commitment to quality and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-[#C9A961] mb-2">10+</div>
              <div className="text-xl text-gray-200">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl text-[#C9A961] mb-2">20+</div>
              <div className="text-xl text-gray-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl text-[#C9A961] mb-2">10</div>
              <div className="text-xl text-gray-200">States Coverage</div>
            </div>
            <div>
              <div className="text-5xl text-[#C9A961] mb-2">50+</div>
              <div className="text-xl text-gray-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
