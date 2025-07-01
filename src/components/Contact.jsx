import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message submitted successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      toast.error(data.message || "Something went wrong");
      setResult("");
    }
  };

  return (
    <motion.div
      id="Contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full pb-13 px-4 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s{" "}
          <span className="underline underline-offset-4 decoration-amber-500">
            Connect
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Have a question or just want to connect? Reach out!
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto space-y-6 px-4 sm:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="Name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <input
            name="Email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <textarea
          name="Message"
          placeholder="Your Message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
        ></textarea>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            {result ? (
              result
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send <IoIosSend size={20} />
              </span>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
