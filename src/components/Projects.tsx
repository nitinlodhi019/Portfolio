// src/components/Projects.tsx
type Project = {
  title: string;
  description: string;
  github?: string;
  kaggle?: string;
  demo?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Insurance Data Intelligence Dashboard",
    description: `Developed an interactive and insightful Power BI dashboard for PRISM Insurance Pvt. Ltd., leveraging data extracted from SQL Server. The project focused on analyzing policy details, customer demographics, claims status, premium and coverage amounts, and customer feedback.
Skills: Microsoft Power BI · SQL · DAX · Power Bi · Microsoft SQL Server · Sentiment Analysis · Microsoft Power Query · Data Modeling`,
    github: "https://github.com/nitinlodhi019/Power-BI-Insurance-Project",
    demo: "https://app.powerbi.com/groups/c3a210e3-6f2f-4436-a5e2-95debae01849/reports/ff9beab6-09c6-463f-934f-74fc816732ea?ctid=1980cb79-0473-4858-ab59-cecf538acd38&pbi_source=linkShare",
    image: "/prism.png",
  },
  {
    title: "Book Recommendation System",
    description: `Our Collaborative Book Recommendation Engine is a comprehensive web application that leverages machine learning and user collaboration to suggest personalized book recommendations.
Displays top 50 highly-rated books, providing users with popular and well-liked options.
Utilizes Collaborative Filtering (KNN algorithm) to suggest books based on user behavior and preferences.`,
    github: "https://github.com/nitinlodhi019/Book-Recommendation-System",
    demo: "https://book-recommendation-system-94gz.onrender.com/",
    image: "/Book.png",
  },
  {
    title: "Handwritten Digit Classifier",
    description: `Designed a handwritten digit classifier using Artificial Neural Networks (ANN), achieving a 97% model accuracy.
Preprocessed images and trained the model using TensorFlow.
Designed a handwritten digit classifier using Artificial Neural Networks (ANN), achieving a 97% model accuracy. Preprocessed images and trained the model using TensorFlow.`,
    github: "https://github.com/nitinlodhi019/Digit-Classifier-ANN",
    image: "/Digit.png",
  },
  {
    title: "Fake/Real news Detector",
    description: `The Fake News Detector is a simple yet powerful tool that helps determine whether a given news article is real or fake. The goal is to contribute towards fighting misinformation using AI and NLP.,
Trained on a limited dataset — may misclassify newer or complex fake news
Cannot verify factual accuracy, only detects patterns from past data`,
    github: "https://github.com/nitinlodhi019/FakeNews_Detection",
    demo: "https://fakenewsdetection-9umxjsf27ktwsl5ehzqp5q.streamlit.app/?",
    image: "/news.png",
  },
  {
    title: "Customer Churn Prediction",
    description: `I built a machine learning-powered web application to predict customer churn using a real-world telecom dataset. The project involves the complete data science workflow from data cleaning to model deployment:
📊 Outcome: The app predicts whether a customer is likely to churn and provides insight into key performance metrics.`,
    github: "https://github.com/nitinlodhi019/Churn_Prediction_WebApp",
    demo: "https://churnpredictionwebapp-7vpcsa97xp6p2sbdnmgcoc.streamlit.app/",
    image: "/churn.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-8 bg-gray-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
              )}

              <pre className="text-gray-700 mb-4 whitespace-pre-wrap text-sm">
                {project.description}
              </pre>

              <div className="flex flex-wrap gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.kaggle && (
                  <a
                    href={project.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    Kaggle
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
