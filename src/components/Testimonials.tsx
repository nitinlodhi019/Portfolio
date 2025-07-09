import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Nitin's analytical skills and dedication to machine learning are exceptional. His ability to translate complex data into actionable insights makes him a valuable asset to any data science team.",
      rating: 5,
      linkedin: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "ML Engineering Manager",
      company: "DataFlow Solutions",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Working with Nitin on the recommendation system project was a great experience. His technical expertise in Python and machine learning algorithms, combined with his problem-solving approach, delivered outstanding results.",
      rating: 5,
      twitter: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "AI Ventures",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Nitin's computer vision project exceeded our expectations. His attention to detail and ability to optimize model performance while maintaining code quality is impressive. Highly recommended!",
      rating: 5,
      linkedin: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "David Kumar",
      role: "Data Analytics Lead",
      company: "Insight Analytics",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Nitin's dashboard development skills are top-notch. He created an intuitive and powerful Power BI dashboard that transformed how our team analyzes data. His visualization techniques are both beautiful and functional.",
      rating: 5,
      twitter: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Feedback from colleagues and collaborators</p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full blur-lg opacity-30`}></div>
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <FaQuoteLeft className={`text-3xl mb-4 mx-auto md:mx-0 bg-gradient-to-r ${testimonials[currentTestimonial].color} bg-clip-text text-transparent`} />
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-4 md:mt-0 justify-center md:justify-start">
                      {testimonials[currentTestimonial].linkedin && (
                        <a
                          href={testimonials[currentTestimonial].linkedin}
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {testimonials[currentTestimonial].twitter && (
                        <a
                          href={testimonials[currentTestimonial].twitter}
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                        >
                          <FaTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? `bg-gradient-to-r ${testimonials[index].color} scale-125`
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  index === currentTestimonial ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}