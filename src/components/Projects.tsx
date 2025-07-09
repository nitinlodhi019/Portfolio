import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye, FaHeart, FaStar } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  likes?: number;
  stars?: number;
};

const projects: Project[] = [
  {
    title: "Insurance Data Intelligence Dashboard",
    description: `Developed an interactive and insightful Power BI dashboard for PRISM Insurance Pvt. Ltd., leveraging data extracted from SQL Server. The project focused on analyzing policy details, customer demographics, claims status, premium and coverage amounts, and customer feedback.`,
    github: "https://github.com/nitinlodhi019/Power-BI-Insurance-Project",
    demo: "https://app.powerbi.com/groups/c3a210e3-6f2f-4436-a5e2-95debae01849/reports/ff9beab6-09c6-463f-934f-74fc816732ea?ctid=1980cb79-0473-4858-ab59-cecf538acd38&pbi_source=linkShare",
    image: "/prism.png",
    tags: ["Power BI", "SQL Server", "DAX", "Data Modeling"],
    featured: true,
    likes: 24,
    stars: 18
  },
  {
    title: "Book Recommendation System",
    description: `Our Collaborative Book Recommendation Engine is a comprehensive web application that leverages machine learning and user collaboration to suggest personalized book recommendations. Displays top 50 highly-rated books, providing users with popular and well-liked options.`,
    github: "https://github.com/nitinlodhi019/Book-Recommendation-System",
    demo: "https://book-recommendation-system-94gz.onrender.com/",
    image: "/Book.png",
    tags: ["Machine Learning", "KNN", "Flask", "Collaborative Filtering"],
    featured: true,
    likes: 32,
    stars: 25
  },
  {
    title: "Handwritten Digit Classifier",
    description: `Designed a handwritten digit classifier using Artificial Neural Networks (ANN), achieving a 97% model accuracy. Preprocessed images and trained the model using TensorFlow.`,
    github: "https://github.com/nitinlodhi019/Digit-Classifier-ANN",
    image: "/Digit.png",
    tags: ["Deep Learning", "TensorFlow", "ANN", "Computer Vision"],
    likes: 19,
    stars: 15
  },
  {
    title: "Fake/Real News Detector",
    description: `The Fake News Detector is a simple yet powerful tool that helps determine whether a given news article is real or fake. The goal is to contribute towards fighting misinformation using AI and NLP.`,
    github: "https://github.com/nitinlodhi019/FakeNews_Detection",
    demo: "https://fakenewsdetection-9umxjsf27ktwsl5ehzqp5q.streamlit.app/?",
    image: "/news.png",
    tags: ["NLP", "Machine Learning", "Streamlit", "Text Classification"],
    likes: 28,
    stars: 22
  },
  {
    title: "Customer Churn Prediction",
    description: `I built a machine learning-powered web application to predict customer churn using a real-world telecom dataset. The project involves the complete data science workflow from data cleaning to model deployment.`,
    github: "https://github.com/nitinlodhi019/Churn_Prediction_WebApp",
    demo: "https://churnpredictionwebapp-7vpcsa97xp6p2sbdnmgcoc.streamlit.app/",
    image: "/churn.png",
    tags: ["Machine Learning", "Streamlit", "Predictive Analytics", "Classification"],
    likes: 21,
    stars: 17
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Showcasing my latest work and achievements</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === tag
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  project.featured ? "ring-2 ring-blue-500/50" : ""
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 transform hover:scale-110"
                        title="View Code"
                      >
                        <FaGithub className="text-white text-xl" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 transform hover:scale-110"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-white text-xl" />
                      </a>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.likes && (
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                        <FaHeart className="text-red-400" />
                        {project.likes}
                      </div>
                    )}
                    {project.stars && (
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                        <FaStar className="text-yellow-400" />
                        {project.stars}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                        >
                          <FaGithub />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          <FaEye />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                    
                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/nitinlodhi019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaGithub />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}