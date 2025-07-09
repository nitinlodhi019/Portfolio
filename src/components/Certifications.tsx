import { useEffect, useState } from "react";
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("certifications");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: "Machine Learning with Python",
      provider: "Coursera",
      issuer: "IBM",
      date: "13 May, 2024",
      status: "Completed",
      url: "https://www.coursera.org/account/accomplishments/verify/3Z3QJVHWQLKK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      color: "from-blue-500 to-cyan-500",
      icon: "🤖",
      skills: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      credentialId: "3Z3QJVHWQLKK",
      featured: true
    },
    {
      title: "Machine Learning A-Z",
      provider: "Udemy",
      issuer: "SuperDataScience Team",
      date: "29 August, 2024",
      status: "Completed",
      url: "https://www.udemy.com/certificate/UC-c0ea0211-fb12-4f12-b082-cb875848a77b/",
      color: "from-purple-500 to-pink-500",
      icon: "📊",
      skills: ["Machine Learning", "Python", "R", "Deep Learning", "Data Science"],
      credentialId: "UC-c0ea0211-fb12-4f12-b082-cb875848a77b",
      featured: true
    },
    {
      title: "Deep Learning for Computer Vision",
      provider: "CampusX",
      issuer: "CampusX Team",
      date: "Ongoing",
      status: "In Progress",
      color: "from-orange-500 to-red-500",
      icon: "👁️",
      skills: ["Deep Learning", "Computer Vision", "CNN", "Image Processing"],
      progress: 75
    }
  ];

  return (
    <section id="certifications" className="py-20 px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Professional achievements and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  cert.featured ? 'ring-2 ring-blue-500/20' : ''
                } ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                    <FaAward className="text-sm" />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      cert.status === "Completed" 
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800" 
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800"
                    }`}>
                      {cert.status === "Completed" ? <FaCheckCircle className="mr-1" /> : <FaCertificate className="mr-1" />}
                      {cert.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.provider}</p>
                  {cert.issuer && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Issued by: {cert.issuer}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <FaCalendarAlt />
                  <span className="text-sm">{cert.date}</span>
                </div>

                {/* Progress Bar for In Progress */}
                {cert.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{cert.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${cert.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400">Credential ID</p>
                    <p className="text-sm font-mono text-gray-800 dark:text-gray-200">{cert.credentialId}</p>
                  </div>
                )}

                {/* Action Button */}
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r ${cert.color} text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full justify-center`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Certificate
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 font-medium cursor-not-allowed w-full justify-center">
                    <FaCertificate className="text-sm" />
                    In Progress
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "3+", label: "Certifications", icon: FaCertificate, color: "from-blue-500 to-cyan-500" },
              { number: "2", label: "Completed", icon: FaCheckCircle, color: "from-green-500 to-emerald-500" },
              { number: "1", label: "In Progress", icon: FaCertificate, color: "from-orange-500 to-red-500" },
              { number: "100%", label: "Commitment", icon: FaAward, color: "from-purple-500 to-pink-500" },
            ].map((stat, index) => (
              <div key={index} className={`bg-gradient-to-r ${stat.color} p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <stat.icon className="text-2xl mx-auto mb-2" />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}