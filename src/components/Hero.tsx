import { FaGithub, FaLinkedin, FaHackerrank, FaKaggle, FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ["Data Scientist", "ML Engineer", "Computer Vision Engineer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        {/* Profile Image with Advanced Animation */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
            <img
              src="/nitin (1).jpg"
              alt="Nitin Kumar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Floating icons around profile */}
          <div className="absolute inset-0 animate-spin-slow">
            {['🤖', '📊', '👁️', '🧠'].map((emoji, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-sm"
                style={{
                  top: `${20 + Math.sin(i * Math.PI / 2) * 60}%`,
                  left: `${50 + Math.cos(i * Math.PI / 2) * 60}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              NITIN KUMAR
            </h1>
          </div>

          <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 h-12 flex items-center justify-center">
            <span className="mr-2">Aspiring</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold transition-all duration-500 min-w-[200px] text-left">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming data into insights and building intelligent systems 
            that solve real-world problems through machine learning and AI.
          </p>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-6 my-12">
          {[
            { icon: FaGithub, href: "https://github.com/nitinlodhi019", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/nitin-kumar-a12283290/", label: "LinkedIn", color: "hover:text-blue-600" },
            { icon: FaKaggle, href: "https://www.kaggle.com/nitinrajpoot", label: "Kaggle", color: "hover:text-blue-500" },
            { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/1435nitinkumar", label: "HackerRank", color: "hover:text-green-600" },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${color}`}
              title={label}
            >
              <Icon size={24} className="transition-colors duration-300" />
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <FaChevronDown className="text-gray-400 dark:text-gray-600 animate-pulse" />
        </div>
      </div>
    </section>
  );
}