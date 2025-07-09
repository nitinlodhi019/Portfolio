import { useEffect, useState } from "react";
import { FaPython, FaGitAlt, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy } from "react-icons/si";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming & Tools",
      color: "from-blue-500 to-cyan-500",
      icon: FaPython,
      skills: [
        { name: "Python", level: 90, icon: FaPython },
        { name: "Git & GitHub", level: 85, icon: FaGitAlt },
        { name: "SQL", level: 80, icon: FaDatabase },
        { name: "Power BI", level: 75, icon: FaChartBar }
      ]
    },
    {
      title: "Data Science & Analytics",
      color: "from-green-500 to-emerald-500",
      icon: SiPandas,
      skills: [
        { name: "Pandas", level: 90, icon: SiPandas },
        { name: "NumPy", level: 85, icon: SiNumpy },
        { name: "Data Analytics", level: 88, icon: FaChartBar },
        { name: "Data Visualization", level: 82, icon: FaChartBar },
        { name: "Data Preprocessing", level: 85, icon: FaDatabase },
        { name: "Statistics", level: 80, icon: FaChartBar }
      ]
    },
    {
      title: "Machine Learning",
      color: "from-purple-500 to-pink-500",
      icon: SiScikitlearn,
      skills: [
        { name: "Scikit-learn", level: 88, icon: SiScikitlearn },
        { name: "Machine Learning", level: 85, icon: FaChartBar },
        { name: "Supervised Learning", level: 90, icon: FaChartBar },
        { name: "Unsupervised Learning", level: 80, icon: FaChartBar },
        { name: "Clustering", level: 82, icon: FaChartBar },
        { name: "Ensemble Learning", level: 78, icon: FaChartBar }
      ]
    },
    {
      title: "Deep Learning & AI",
      color: "from-orange-500 to-red-500",
      icon: SiTensorflow,
      skills: [
        { name: "TensorFlow", level: 80, icon: SiTensorflow },
        { name: "Keras", level: 78, icon: SiTensorflow },
        { name: "Deep Learning", level: 75, icon: SiTensorflow },
        { name: "Computer Vision", level: 82, icon: SiTensorflow },
        { name: "NLP", level: 70, icon: SiTensorflow }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                <category.icon className="text-lg" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-xl text-gray-600 dark:text-gray-400" />
                      <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Problem Solving", desc: "Analytical thinking and creative solutions", icon: "🧩" },
              { title: "Team Collaboration", desc: "Effective communication and teamwork", icon: "🤝" },
              { title: "Continuous Learning", desc: "Always staying updated with latest trends", icon: "📚" }
            ].map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}