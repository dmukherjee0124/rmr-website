import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Linkedin } from "lucide-react";
import { useEffect } from "react";
import aryamanImage from "../../assets/team/AryamanRathoreImg.png";
import sandipImage from "../../assets/team/SandipKumarImg.png";
import shahabImage from "../../assets/team/ShahabAhmed.png";

export function Team() {
  useEffect(() => {
    document.title = "Our Team - RMR | Rathore Minerals & Resources";
  }, []);

  const teamMembers = [
    {
      name: "Aryaman Rathore",
      position: "Chief Executive Officer",
      description: "Leading operational excellence and strategic growth initiatives at RMR with a focus on innovation and sustainable practices.",
      image: aryamanImage,
      linkedin: "https://www.linkedin.com/in/aryaman-rathore-8055072a3/",
    },
    {
      name: "Mr. Sandip Kumar Sinha",
      position: "Board Member",
      description: "A dynamic commerce professional with 6+ years of experience in accounting and operations management. After beginning his career at Kore Voyages LLP, he served as Chief Operating Officer at Trifecta Minerals Zambia, leading 100+ staff. Currently with RMR on the Advisory Board, he handles coal and iron ore trading. His expertise spans financial oversight, team leadership, and international business operations.",
      image: sandipImage,
      linkedin: "https://www.linkedin.com/in/sandip-kumar-sinha-a0468b373/",
    },
    {
      name: "Mr. Shahab Ahmed Khan",
      position: "Board Member",
      description: "Graduate in Science with post Graduate Diploma in Mass Communication. With over 20 Years of experience in Information Technology Business, Shahab is an active member of Team RMR and is parts of the Advisory Board.",
      image: shahabImage,
      linkedin: "",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">Our Leadership Team</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Meet the experienced professionals driving RMR's success
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-gray-900 mb-6">
            Built on Expertise and Experience
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our leadership team brings together decades of combined experience in mining operations, project management, sustainability, and logistics. Each member is committed to RMR's vision of delivering integrated mining solutions with operational excellence and environmental responsibility.
          </p>
          <p className="text-lg text-gray-600">
            Together, we drive innovation, maintain the highest standards of quality, and ensure that every project is executed with precision and care.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-[#C9A961] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-80 bg-gray-200">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-[#3D4539] mb-4">{member.position}</div>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#3D4539] transition-colors"
                        aria-label={`View ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjIwODcxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for talented professionals who share our commitment to excellence and sustainability. If you're passionate about mining and resource management, we'd love to hear from you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Collaborative work environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Professional growth opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Competitive compensation packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] mt-2"></div>
                  <span className="text-gray-700">Commitment to work-life balance</span>
                </li>
              </ul>
              <Link
                to="/careers"
                className="inline-block bg-[#3D4539] text-white px-8 py-4 hover:bg-[#2A2D26] transition-colors"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
