'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "988e4550-7a73-405e-8484-2bff76945d9a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult("❌ Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 bg-white/5 backdrop-blur-lg p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-700/30 shadow-2xl"
        >
          {/* SVG Illustration - Now visible on mobile */}
          <div className="md:hidden mb-8 w-full max-w-xs mx-auto">
            <div className="relative w-full h-48 sm:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-xl blur-xl"></div>
              <img
                src="/Assets/Svg/contact.svg"
                alt="Contact illustration"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Left Side - Illustration (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block flex-1"
          >
            <div className="relative w-full h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-xl blur-xl"></div>
              <img
                src="/Assets/Svg/contact.svg"
                alt="Contact illustration"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Contact <span className="text-blue-400">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-300">
                Have a question or want to work together? Fill out the form below and I'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
                className="relative group"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
                className="relative group"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
                className="relative group"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4 text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-blue-400/30 transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {result && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center mt-4 text-sm ${result.includes("✅") ? 'text-green-400' : 'text-red-400'}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}