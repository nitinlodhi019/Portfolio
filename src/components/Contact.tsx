import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    const formData = {
      name: formDataObj.get("name") as string,
      email: formDataObj.get("email") as string,
      subject: formDataObj.get("subject") as string,
      message: formDataObj.get("message") as string,
    };

    try {
      const response = await fetch("https://formspree.io/f/manelkpq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "1435nitinkumar@gmail.com",
      link: "mailto:1435nitinkumar@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+919260912506",
      link: "tel:+919260912506",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Lucknow, India",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Let's discuss your next project or opportunity</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl text-white text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm opacity-90">Response Time</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl text-white text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Message</h3>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-green-500" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg flex items-center gap-3 animate-fade-in">
                  <FaExclamationTriangle className="text-red-500" />
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                  <input
                    name="subject"
                    required
                    type="text"
                    className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                    status === "loading" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}