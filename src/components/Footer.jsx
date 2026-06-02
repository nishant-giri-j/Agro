import { Mail, Phone, MapPin, Info, Home, Contact, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/agro.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img src={Logo} alt="Agro Logo" className="w-10 h-10 rounded-full shadow-md" />
              <h3 className="text-2xl font-bold text-white">Agro</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Best Solution for Farmers. Since 2025. Empowering agriculture through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-orange-400" /> Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Home className="w-4 h-4 text-orange-300" />
                <Link to="/home" className="text-slate-300 hover:text-orange-400 transition duration-200 hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-orange-300" />
                <Link to="/about" className="text-slate-300 hover:text-orange-400 transition duration-200 hover:underline">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Contact className="w-4 h-4 text-orange-300" />
                <Link to="/contact" className="text-slate-300 hover:text-orange-400 transition duration-200 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" /> Contact Us
            </h3>
            <address className="text-slate-300 text-sm not-italic leading-6 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-300" /> RCOEM, Nagpur, Maharashtra, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-300" />
                <a href="mailto:info@agro.com" className="hover:text-orange-400 hover:underline">info@agro.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-300" />
                <a href="tel:+918668537137" className="hover:text-orange-400 hover:underline">+91 8668537137</a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Agro. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="flex items-center gap-1 hover:text-orange-400 hover:underline transition">
              <Lock className="w-4 h-4" /> Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="flex items-center gap-1 hover:text-orange-400 hover:underline transition">
              <ShieldCheck className="w-4 h-4" /> Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient stripe at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 animate-pulse" />
    </footer>
  );
};

export default Footer;
