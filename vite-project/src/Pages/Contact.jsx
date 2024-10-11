import React from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";

function ContactUs() {
  return (
    <>
      <div className="contact-page bg-gradient-to-r from-gray-900 to-navy-900 py-12 px-4 md:px-16 lg:px-24">
        <h1 className="text-5xl font-bold text-center text-black mb-10">
          Contact Us
        </h1>
        <p className="text-lg text-center text-black mb-12 max-w-2xl mx-auto">
          We're here to help! Reach out to us for any inquiries, feedback, or
          support. We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details Section */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 border">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Contact Details
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong> support@jupiterapparel.com
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Address:</strong> 123 Fashion Street, Suite 456, New York,
              NY 10001, USA
            </p>
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
              Follow Us
            </h3>
            <div className="flex ml-10 space-x-12">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 border">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-300 font-medium mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded border-2 border-gray-600 focus:border-blue-500 outline-none transition duration-200 bg-gray-900 text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-300 font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded border-2 border-gray-600 focus:border-blue-500 outline-none transition duration-200 bg-gray-900 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-300 font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 rounded border-2 border-gray-600 focus:border-blue-500 outline-none transition duration-200 bg-gray-900 text-white"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-5xl font-semibold text-center text-black mb-12">
            Our Location
          </h2>
          <div className="flex justify-center">
            <iframe
              title="Jupiter Apparel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24187.524837784174!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0K3QvtC80LXQvdC40LUg0JDQstCw0YDQuNC90LXRgg!5e0!3m2!1sen!2sus!4v1633876457161!5m2!1sen!2sus"
              className="w-full h-80 rounded-lg shadow-lg border-2 border-blue-900"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <Logofooter />
      </div>
    </>
  );
}

export default ContactUs;
