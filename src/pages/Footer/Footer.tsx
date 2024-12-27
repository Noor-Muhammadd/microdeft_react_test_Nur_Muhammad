import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#183A91] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-3">MicroDeft</h1>
          <p className="text-gray-300">
            Building innovative solutions for a brighter future. Let's stay connected!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:underline hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="space-y-3">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f">Facebook</i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter">Twitter</i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in">LinkedIn</i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition duration-300"
              >
                <i className="fab fa-github">GitHub</i>
              </a>
            </div>
            <p className="text-gray-300">
              Email:{" "}
              <a href="mailto:support@yourbrand.com" className="hover:underline">
                support@yourbrand.com
              </a>
            </p>
            <p className="text-gray-300">Phone: +1 234 567 890</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MicroDeft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
