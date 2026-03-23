import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Wrench, Truck, CheckCircle, Shield, Clock, Anchor, Ship } from "lucide-react";
import { useEffect } from "react";
import mineImage from "../../assets/process/MiningAndSourcingImg.png";
import railTransportImage from "../../assets/process/RailTransportImg.png";
import portStockpilingImage from "../../assets/process/PortHandlingImg.png";
import portLoadingImage from "../../assets/process/VesselLoading.png";
import techDrivenImage from "../../assets/process/techDrivenMining.jpg";
export function Process() {
  useEffect(() => {
    document.title = "Our Process - RMR | Rathore Minerals & Resources";
  }, []);

  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: "Mining & Sourcing",
      description: "Direct procurement from Odisha & Jharkhand mines under long-term contracts. We ensure quality and reliability right from the source.",
      details: [
        "Direct procurement from Odisha & Jharkhand mines",
        "Long-term contracts with trusted mining partners",
        "Quality checks at source for Fe content",
        "Verification of size and impurities",
      ],
      image: mineImage,
    },
    {
      icon: Wrench,
      number: "02",
      title: "Rail Transport to Ports",
      description: "Seamless transportation from mining sites to major ports using dedicated railway infrastructure and strategic partnerships.",
      details: [
        "Dedicated railway loading yards near mines",
        "Bulk transport capabilities",
        "Partnerships with Indian Railways",
        "Seamless movement from source to port",
      ],
      image: railTransportImage,
    },
    {
      icon: Anchor,
      number: "03",
      title: "Port Handling & Stockpiling",
      description: "Strategic port operations across major Indian ports with state-of-the-art facilities for efficient handling and storage.",
      details: [
        "Vizag Port (Andhra Pradesh)",
        "Paradip Port (Odisha)",
        "Krishnapatnam Port (Andhra Pradesh)",
        "Redi Port (Maharashtra)",
        "Mechanized unloading & stacking",
      ],
      image: portStockpilingImage,
    },
    {
      icon: Ship,
      number: "04",
      title: "Vessel Loading & Export",
      description: "Efficient vessel loading operations with comprehensive documentation and customs clearance handled in-house for smooth international delivery.",
      details: [
        "Bulk carrier loading via grab cranes",
        "Conveyor belt systems for efficiency",
        "In-house documentation handling",
        "Customs clearance management",
      ],
      image: portLoadingImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">Our Trading & Supply Chain Process</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A systematic approach to mining, logistics, and export built on decades of expertise
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-gray-900 mb-6">
            Excellence at Every Stage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At RMR, we follow a comprehensive four-stage process that ensures operational excellence, quality assurance, and client satisfaction. Each stage is carefully managed by our expert team with a focus on quality, efficiency, and timely delivery.
          </p>
          <p className="text-lg text-gray-600">
            From direct procurement at mines to final vessel loading and export, we maintain the highest standards throughout the entire supply chain of every project.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#3D4539] text-white flex items-center justify-center">
                          <step.icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <div className="text-5xl text-[#C9A961] opacity-20 mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-3xl text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {step.description}
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-white border border-[#C9A961] overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video relative bg-[#F5F3EF]">
                      <ImageWithFallback
                        src={step.image}
                        alt={`${step.title} - RMR Process`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-1 h-16 bg-[#C9A961]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core values that guide every decision and action throughout our process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Unwavering commitment to the safety of our team, partners, and communities.
              </p>
            </div>
            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Meeting and exceeding industry standards at every stage of operations.
              </p>
            </div>
            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3">Environmental Care</h3>
              <p className="text-gray-600">
                Minimizing environmental impact through sustainable practices.
              </p>
            </div>
            <div className="text-center p-8 bg-[#F5F3EF] border border-[#C9A961]">
              <h3 className="text-xl text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Always learning, adapting, and optimizing our processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Image Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] shadow-xl">
              <ImageWithFallback
                src={techDrivenImage}
                alt="Industrial Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Technology-Driven Operations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We leverage advanced technology and modern equipment throughout our operations to ensure efficiency, precision, and safety. From geological surveying tools to logistics management systems, technology enhances every aspect of our process.
              </p>
              <p className="text-lg text-gray-600">
                Our investment in technology allows us to optimize resource extraction, minimize waste, reduce environmental impact, and deliver superior results to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
