import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#4d1933] to-[#1a0d1f] text-white pt-10 pb-4 px-4 md:px-16 relative overflow-hidden w-full">
      {/* Background watermark */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none opacity-10">
        <img src="/logo1.png" alt="Midnight Silog Express Logo" className="w-96 h-96 object-contain" />
      </div>
      {/* Responsive container for content */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-lg"><span className="text-[#e0aaff]">Midnight</span> <span className="text-[#7ee8fa]">Silog Express</span></span>
          </div>
          <p className="text-sm text-gray-300 mb-4 max-w-xs">
            Empowering businesses with innovative solutions and cutting-edge technology to drive growth and success.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="bg-[#23272f] hover:bg-[#7ee8fa] hover:text-[#23272f] p-2 rounded transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn" className="bg-[#23272f] hover:bg-[#7ee8fa] hover:text-[#23272f] p-2 rounded transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram" className="bg-[#23272f] hover:bg-[#7ee8fa] hover:text-[#23272f] p-2 rounded transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        {/* Center Section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-8 md:gap-16 justify-center">
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-[#e0aaff]">Features</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Integrations</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">API</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-[#e0aaff]">About Us</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Careers</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Blog</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Press</a></li>
              <li><a href="#" className="hover:text-[#e0aaff]">Partners</a></li>
            </ul>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="font-semibold mb-2">Stay Updated</h4>
          <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter for the latest updates and insights.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 rounded bg-[#23272f] text-white focus:outline-none focus:ring-2 focus:ring-[#e0aaff]" />
            <button type="submit" className="bg-gradient-to-r from-[#7ee8fa] to-[#e0aaff] text-[#23272f] px-5 py-2 rounded font-semibold hover:opacity-90 transition">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-700 my-6 opacity-60"></div>
      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2 px-2">
        <span>© 2024 Midnight Silog Express. All rights reserved.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-[#e0aaff]">Privacy Policy</a>
          <a href="#" className="hover:text-[#e0aaff]">Terms of Service</a>
          <a href="#" className="hover:text-[#e0aaff]">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
