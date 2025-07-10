// components/ContactSection.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validate = (fields: { [key: string]: string }) => {
    const errors: { [key: string]: string } = {};
    if (!fields.user_name.trim()) errors.user_name = "Name is required.";
    if (!fields.user_email.trim()) {
      errors.user_email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.user_email)
    ) {
      errors.user_email = "Invalid email address.";
    }
    if (!fields.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const fields = {
      user_name: formData.get("name") as string,
      user_email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    const errors = validate(fields);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    emailjs
      .sendForm(
        "service-Gogulkrish", //EmailJS service ID
        "template_p28w0go", //EmailJS template ID
        form.current!,
        "Ysi99nnvwyN2sQF9z" //EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          setFormErrors({});
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Whether you want to collaborate, have questions, or just say hi — my
          inbox is open!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-4"
          noValidate
        >
          <div className="flex flex-col items-start">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`px-4 py-2 rounded border ${
                formErrors.user_name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
            />
            {formErrors.user_name && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.user_name}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`px-4 py-2 rounded border ${
                formErrors.user_email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
            />
            {formErrors.user_email && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.user_email}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className={`px-4 py-2 rounded border ${
                formErrors.message
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
            />
            {formErrors.message && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <span className="text-green-600 dark:text-green-400 mt-2">
              Thank you! Your message has been sent.
            </span>
          )}
        </form>
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="mailto:gogulankrish5@gmail.com"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gogulankanagaraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
