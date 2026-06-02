import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import agrologo from '../assets/agro.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    farmingType: 'rabi',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isTranslateReady, setIsTranslateReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTranslateReady) return;
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
        padding: 6px 12px !important;
        border-radius: 8px !important;
        border: 1px solid #d1d5db !important;
        background-color: #f9fafb !important;
        font-size: 14px !important;
        color: #1f2937 !important;
        max-width: 160px !important;
        width: 100% !important;
        font-family: inherit !important;
      }
      .goog-te-banner-frame { display: none !important; }
      body { top: 0 !important; }
      .goog-tooltip, .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [isTranslateReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.username.trim()) {
      setError('Username is required');
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.contact)) {
      setError('Valid 10-digit contact number required');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://sheetdb.io/api/v1/vj64yh1nrzd68', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            'User Name': formData.username,
            'Contact Number': formData.contact,
            'Type of Farming': formData.farmingType,
          },
        }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        setError('Failed to save data. Please try again.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Something went wrong. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-blue-50 overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full -top-40 -left-40 animate-pulse opacity-30"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full -bottom-40 -right-20 animate-ping opacity-20"></div>

      {/* Translate Widget */}
      <div className="absolute top-4 right-4 z-30">
        <div id="google_translate_element"
          style={{ opacity: isTranslateReady ? 1 : 0, transition: "opacity 0.3s ease" }}
        />
        {!isTranslateReady && (
          <div className="h-9 w-[160px] bg-gray-100 rounded-md animate-pulse" />
        )}
      </div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 z-10 border border-blue-300"
      >
        <div className="flex flex-col items-center mb-6">
          <img src={agrologo} alt="AgriCompare Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-3xl font-bold text-blue-800">Welcome to Agro</h2>
          <p className="text-blue-600 text-sm text-center">Your Crop, Our Solution</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-1">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-1">Contact Number</label>
            <input
              type="tel"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="10-digit number"
              maxLength="10"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-2">Type of Farming</label>
            <div className="flex gap-4">
              {['Rabi Farming', 'Kharif Farming', 'Mix Farming'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="farmingType"
                    value={type}
                    checked={formData.farmingType === type}
                    onChange={(e) => setFormData({ ...formData, farmingType: e.target.value })}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-blue-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all shadow-md ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Processing...' : 'Submit'}
          </motion.button>
        </form>
      </motion.div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-4 right-4 text-sm px-4 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 shadow transition-all z-20"
      >
        Skip Login
      </button>
    </div>
  );
};

export default Login;
