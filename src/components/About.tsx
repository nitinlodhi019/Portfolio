import { useEffect, useState } from "react";
import { FaCode, FaRocket, FaBrain, FaHeart } from "react-icons/fa";

export default function About() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "5+", label: "Projects Completed", icon: FaRocket, color: "from-blue-500 to-cyan-500" },
    { number: "97%", label: "Model Accuracy", icon: FaBrain, color: "from-purple-500 to-pink-500" },
    { number: "3+", label: "Certifications", icon: FaCode, color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Passion", icon: FaHeart, color: "from-red-500 to-orange-500" },
  ];

  const skills = [
    { icon: "🤖", title: "Machine Learning", desc: "Building predictive models and algorithms", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
    { icon: "👁️", title: "Computer Vision", desc: "Image processing and pattern recognition", color: "hover:bg-purple-50 dark:hover:bg-purple-900/20" },
    { icon: "📊", title: "Data Analytics", desc: "Extracting insights from complex datasets", color: "hover:bg-green-50 dark:hover:bg-green-900/20" },
    { icon: "🧠", title: "Deep Learning", desc: "Neural networks and AI solutions", color: "hover:bg-orange-50 dark:hover:bg-orange-900/20" },
  ];

  return (
    <section id="about" className="py-20 px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm <span className="font-bold text-blue-600 dark:text-blue-400">Nitin Kumar</span> — an aspiring Data Scientist with
                  practical experience in machine learning, deep learning, and data
                  analytics. I enjoy working with Python and SQL, especially when
                  building predictive models and creating meaningful data
                  visualizations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    <stat.icon className="text-2xl mx-auto mb-2" />
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 dark:opacity-10"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">What I Do</h3>
                <div className="space-y-4">
                  {skills.map((item, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 rounded-lg ${item.color} transition-all duration-300 cursor-pointer group`}>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Quote */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 italic">
                "Data is the new oil, but insights are the refined fuel that powers innovation."
              </blockquote>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mt-4">- My Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}