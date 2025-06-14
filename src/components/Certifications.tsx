// src/components/Certifications.tsx
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-8 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
          Certifications
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">
              Machine Learning with Python, – Coursera
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed: 13 May, 2024
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/3Z3QJVHWQLKK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
              target="_blank"
              className="text-indigo-600 text-sm underline"
            >
              View Certificate
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">
              Machine Learning A-Z, – Udemy
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed: 29 August, 2024
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-c0ea0211-fb12-4f12-b082-cb875848a77b/"
              target="_blank"
              className="text-indigo-600 text-sm underline"
            >
              View Certificate
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">
              Deep Learning for Computer Vision, – CampusX
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Status: Ongoing
            </p>
            <a
              //href="https://coursera.org/verify/example-link"
              target="_blank"
              className="text-indigo-600 text-sm underline"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
