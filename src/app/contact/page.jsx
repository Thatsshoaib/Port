'use client';
import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "988e4550-7a73-405e-8484-2bff76945d9a");

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
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md p-6 sm:p-12 rounded-xl shadow-lg">
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/Assets/Svg/contact.svg" // Replace with your image path
            alt="Contact illustration"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
            Contact <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-300 mb-8 text-center md:text-left">
            Have a question or want to work together? Fill out the form below and I’ll get back to you shortly.
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                How can I help you?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type='submit' className="relative cursor-pointer py-3 px-6 text-center font-barlow inline-flex justify-center text-sm sm:text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
              <span className="relative z-20">Send</span>

              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-400">{result}</p>
        </div>
      </div>
    </section>
  );
}
