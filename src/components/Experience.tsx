import { useEffect, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";

export default function Experience() {
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

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Data Science Intern",
      company: "Unified Mentor",
      period: "November 2024 - December 2024",
      location: "Remote",
      type: "Internship",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Developed a machine learning model using Python and advanced techniques.",
        "Worked on data analysis and machine learning projects, gaining hands on experience in building predictive models.",
        "Improved accuracy by 3% through ensemble learning."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
    },
    {
      title: "Data Science Intern",
      company: "Renu Sharma Foundation",
      period: "May 2025 - Ongoing",
      location: "Remote",
      type: "Internship",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Assisted in building and optimizing machine learning models for classification and regression problems using Python and scikit-learn.",
        "Collaborated with the team to deploy models and build interactive dashboards.",
        "Documented code and results to ensure reproducibility and clarity for future use."
      ],
      technologies: ["Python", "Scikit-learn", "Dashboard Development", "Model Deployment"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">My professional journey</p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full shadow-xl z-10 flex items-center justify-center">
                    <FaBriefcase className="text-blue-500 text-sm" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}>
                    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}>
                            <FaBriefcase className="text-white text-lg" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <FaAward className="text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}