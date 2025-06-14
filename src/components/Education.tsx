// src/components/Education.tsx
export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Babu Banarasi Das University, (Lucknow, India)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2022 – 2026
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">10+2: PCM</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Babu Triloki Singh Inter College, (Kakori, Lucknow)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2021 – 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
