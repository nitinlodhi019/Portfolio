import { useEffect, useState } from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaMedal } from "react-icons/fa";

export default function Education() {
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

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Babu Banarasi Das University",
      location: "Lucknow, India",
      period: "2022 – 2026",
      status: "Pursuing",
      gpa: "8.2/10",
      color: "from-blue-500 to-cyan-500",
      icon: "🎓",
      achievements: [
        "Relevant Coursework: Data Structures, Algorithms, Database Management, Machine Learning",
        "Active member of Computer Science Society",
        "Participated in multiple hackathons and coding competitions"
      ],
      skills: ["Programming", "Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
    },
    {
      degree: "10+2: PCM (Physics, Chemistry, Mathematics)",
      institution: "Babu Triloki Singh Inter College",
      location: "Kakori, Lucknow",
      period: "2021 – 2022",
      status: "Completed",
      percentage: "82%",
      color: "from-green-500 to-emerald-500",
      icon: "📚",
      achievements: [
        "Strong foundation in Mathematics and Physics",
        "Developed analytical and problem-solving skills",
        "Participated in science exhibitions and competitions"
      ],
      skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="py-20 px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">My academic journey and achievements</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full shadow-lg"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full shadow-xl z-10 flex items-center justify-center">
                    <FaGraduationCap className="text-blue-500 text-sm" />
                  </div>

                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8 md:w-5/12" : "md:ml-auto md:pl-8 md:w-5/12"}`}>
                    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} shadow-lg`}>
                          <span className="text-3xl">{edu.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              edu.status === "Pursuing" 
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                                : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">{edu.institution}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FaCalendarAlt className="text-blue-500" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FaMapMarkerAlt className="text-blue-500" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <FaMedal className="text-yellow-500" />
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </div>
                        )}
                        {edu.percentage && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <FaAward className="text-yellow-500" />
                            <span className="font-medium">Score: {edu.percentage}</span>
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <FaAward className="text-yellow-500" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                            >
                              {skill}
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