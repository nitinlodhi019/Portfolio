// src/components/Navbar.tsx
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">MyPortfolio</h1>
      <div className="flex items-center gap-6">
        <ul className="flex gap-4 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-indigo-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/Nitin's resume.pdf"
          download
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          <FaDownload className="text-sm" />
          Resume
        </a>
      </div>
    </nav>
  );
}
