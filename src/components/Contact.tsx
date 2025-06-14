import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    const formData = {
      name: formDataObj.get("name") as string,
      email: formDataObj.get("email") as string,
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
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
          Contact Me
        </h2>

        {status === "success" && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Message sent successfully! ✅
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            Oops! Something went wrong. ❌
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              required
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
