import { Link, useNavigate } from "react-router";
import { Briefcase, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function Careers() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Careers - Join Our Team | RMR";
  }, []);

  return (
    <div>
      {/* Hero Section with Back Button */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-300 hover:text-[#C9A961] transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded px-2 py-1"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">Join Our Team</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Build your career with a leader in mining and resource solutions
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Current Openings</h2>
          </div>

          {/* No Openings State */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#F5F3EF] border-2 border-[#C9A961] p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-[#C9A961] rounded-full mb-6">
                <Briefcase className="w-10 h-10 text-[#3D4539]" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">No Open Positions at This Time</h3>
              <p className="text-lg text-gray-600 mb-8">
                We don't have any job openings at the moment, but we're always interested in hearing from talented professionals. If you believe you'd be a great fit for our team, please reach out.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#3D4539] text-white px-8 py-4 hover:bg-[#2A2D26] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why RMR Section - Simplified */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-[#C9A961]">
                <h3 className="text-xl text-gray-900 mb-3">Professional Growth</h3>
                <p className="text-gray-600">
                  Work with experienced professionals across mining and resource management.
                </p>
              </div>
              <div className="bg-white p-8 border border-[#C9A961]">
                <h3 className="text-xl text-gray-900 mb-3">Industry Impact</h3>
                <p className="text-gray-600">
                  Contribute to projects that shape infrastructure and industrial development.
                </p>
              </div>
              <div className="bg-white p-8 border border-[#C9A961]">
                <h3 className="text-xl text-gray-900 mb-3">Competitive Packages</h3>
                <p className="text-gray-600">
                  Industry-standard compensation with performance-based opportunities.
                </p>
              </div>
              <div className="bg-white p-8 border border-[#C9A961]">
                <h3 className="text-xl text-gray-900 mb-3">Multi-Location Presence</h3>
                <p className="text-gray-600">
                  Operations across Haryana, Andhra Pradesh, Goa, Odisha, and Maharashtra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
