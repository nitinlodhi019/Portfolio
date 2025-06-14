export default function Skills() {
  const skills = [
    "Python",
    "Pandas",
    "NumPy",
    "Power BI",
    "Scikit-learn",
    "TensorFlow",
    "NLP",
    "Keras",
    "Clustering",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Data Analytics",
    "Computer Vision",
    "Ensemble Learning",
    "Data Visualization",
    "Data Preprocessing",
    "Descriptive & Predictive Statistics",
    "Supervised & Unsupervised Learning",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
