import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-11/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold text-xl">
                RC
              </div>
              <h2 className="text-xl font-bold text-white">RentCar</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Reliable & affordable car rental service. Drive your journey with
              comfort and confidence.
            </p>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">
                Available Cars
              </li>
              <li className="hover:text-white cursor-pointer">My Bookings</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-white font-semibold mb-4">Social</h3>
           <div className="flex gap-3">
            <FaFacebook />
           <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
           </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 text-center text-sm">
          © {new Date().getFullYear()} RentCar. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
