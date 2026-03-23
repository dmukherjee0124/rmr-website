import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Boxes, Truck, Mountain, Wrench } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export function Products() {
  useEffect(() => {
    document.title = "Products & Services - RMR | Rathore Minerals & Resources";
  }, []);

  const products = [
    {
      icon: Mountain,
      title: "Mineral Sourcing & Exploration",
      description: "Comprehensive mineral identification, sourcing, and exploration services. We leverage our extensive network and geological expertise to locate and secure high-quality mineral resources.",
      features: [
        "Geological surveying and analysis",
        "Resource identification and assessment",
        "Quality testing and verification",
        "Strategic sourcing partnerships",
      ],
      image: "https://images.unsplash.com/photo-1770834838955-25db4a642dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lcmFsJTIwcmVzb3VyY2VzJTIwZXh0cmFjdGlvbnxlbnwxfHx8fDE3NzIyMTA1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Wrench,
      title: "Project Execution & Management",
      description: "End-to-end project management services ensuring timely and efficient execution of mining operations. Our disciplined approach ensures projects stay on schedule and within budget.",
      features: [
        "Project planning and scheduling",
        "Resource allocation and optimization",
        "Risk management and mitigation",
        "Quality control and compliance",
      ],
      image: "https://images.unsplash.com/photo-1769240627842-1a3bd858695c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBleGNhdmF0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzIxNzgzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Optimized logistics coordination ensuring seamless transportation and delivery of mineral resources. We manage the entire supply chain from mine to destination.",
      features: [
        "Transportation management",
        "Inventory tracking and control",
        "Route optimization",
        "Timely delivery coordination",
      ],
      image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MjIxMDU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Boxes,
      title: "Sustainable Resource Development",
      description: "Environmentally responsible mining practices focused on sustainability and minimal environmental impact. We balance resource extraction with ecological preservation.",
      features: [
        "Environmental impact assessment",
        "Sustainable mining practices",
        "Waste management solutions",
        "Restoration and rehabilitation",
      ],
      image: "https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMG9wZXJhdGlvbnN8ZW58MXx8fHwxNzcyMjEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">Our Products & Services</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive mining and resource solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Minerals Section - MOVED UP */}
      <section className="py-16 md:py-24 bg-white border-b-4 border-[#C9A961]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-[#C9A961] text-black px-4 py-2 md:px-6 md:py-2 mb-4 font-semibold text-sm md:text-base">
              FEATURED MINERALS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">Minerals We Handle</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Click any mineral below to learn more about specifications, applications, and quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Iron Ore", path: "/products/iron-ore", description: "Fe 54-67% • Multiple Origins" },
              { name: "Coal", path: "/products/coal", description: "GAR/NAR 3400-7000 • Global Sources" },
              { name: "Bauxite", path: "/products/bauxite", description: "Al₂O₃ 40-60% • Aluminum Production" },
              { name: "Limestone", path: "/products/limestone", description: "CaCO₃ 85-98% • Cement Industry" },
            ].map((mineral, index) => (
              <Link
                key={index}
                to={mineral.path}
                className="group bg-[#F5F3EF] border-2 border-[#C9A961] p-6 md:p-8 text-center hover:border-[#3D4539] hover:bg-[#3D4539] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-white mb-2 md:mb-3 transition-colors">
                  {mineral.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-300 transition-colors">
                  {mineral.description}
                </p>
                <div className="mt-3 md:mt-4 text-sm md:text-base text-[#C9A961] group-hover:text-white transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every stage of the mining process
            </p>
          </div>
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4539] text-white mb-6">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl text-gray-900 mb-4">{product.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-[400px] shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We understand that every project is unique. Let's discuss how we can tailor our services to meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#3D4539] text-white px-8 py-4 hover:bg-[#2A2D26] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
