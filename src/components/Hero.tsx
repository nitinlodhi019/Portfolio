// src/components/Hero.tsx

import { FaGithub, FaLinkedin, FaHackerrank, FaKaggle } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-slate-100 text-gray-900 px-6"
    >
      <div className="text-center">
        {/* 👇 Profile Image */}
        <img
          src="/nitin (1).jpg" // <-- Replace with actual image name if different
          alt="Nitin Kumar"
          className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-indigo-600 object-cover shadow-lg"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-600">NITIN KUMAR</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
          Aspiring Data Scientist and Computer Vision Engineer
        </p>

        <div className="flex justify-center gap-6 text-indigo-600 text-xl md:text-2xl mb-6">
          <a
            href="https://github.com/nitinlodhi019"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition-transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/nitin-kumar-a12283290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition-transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.kaggle.com/nitinrajpoot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition-transform hover:scale-110"
            title="Kaggle"
          >
            <FaKaggle size={22} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/1435nitinkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition-transform hover:scale-110"
            title="HackerRank"
          >
            <FaHackerrank size={22} />
          </a>
        </div>

        <a
          href="#contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
