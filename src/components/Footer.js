import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black-700  py-10 px-4 sm:px-6 lg:px-28">
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 gap-4 pb-3">
          <div className="flex item-center gap-2 bg-white text-black-700 px-2 py-1 w-36 border-none ">
            <img src="/image/globe.jpg" alt="globe" className="h-8"/>
            <select>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
          <div className="flex justify-center sm:justify-end gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl sm:text-3xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl sm:text-3xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl sm:text-3xl" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-xl sm:text-3xl" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl sm:text-3xl" />
            </a>
          </div>
        </div>

          <div className=" border-b border-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm mt-5">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://velotrax.sa/assets/logo-Dw3bVQtv.png"
              alt="Logo"
              className="w-[75px] h-[75px] mb-3"
            />
            <p className="font-bold text-black text-lg md:text-xl max-w-xs mb-4">
              Affordable, Safe, & Efficient Truck Shipping
            </p>
         
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <img src="/image/mada.jpg" alt="Mada" className="h-6" />
              <img src="/image/visa.jpg" alt="visa card" className="h-6" />
              <img src="/image/master.jpg" alt="Master" className="h-6" />
              <img src="/image/stcpay.jpg" alt="Stcpay" className="h-6" />
              <img src="/image/ta.jpg" alt="card" className="h-6" />
              <img src="/image/tabby.jpg" alt="tabby card" className="h-6" />
            </div>
          </div>

          <div>
            <h6 className="text-black font-bold text-xl mb-2">About</h6>
            <ul className="space-y-2">
              <li>
                <a href="#community" className="text-black hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#support" className="text-black hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#terms" className="text-black hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-black font-bold text-xl mb-2">Our Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-black hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-black hover:underline">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-black hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-black font-bold text-xl mb-2">Contact Us</h6>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone /> +966 55 565 6990
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope /> support@velotrax.sa
              </li>
              <li className="text-center md:text-left">Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>
        <div className=" border-b border-black"></div>

        <div className="flex flex-col sm:flex-row justify-between item-center gap-4 mt-6">
          <p className="text-xs text-black text-center sm:text-left mt-3">
            @2025 Velotrax Company . All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 sm:h-12"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
