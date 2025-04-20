import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Description from './Description';
import TreatmentTable from './Table';
import { FiArrowLeft, FiDownload, FiShare2, FiBookmark } from 'react-icons/fi';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const crop = decodeURIComponent(params.get('crop'));
  const disease = decodeURIComponent(params.get('disease'));
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => navigate(-1);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${crop} - ${disease} Remedies`,
        text: `Explore treatment options for ${disease} affecting ${crop}.`,
        url: window.location.href,
      }).catch((err) => console.log('Sharing failed:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link has been copied to clipboard!');
    }
  };

  const handleDownload = () => {
    alert('PDF download functionality will be implemented here.');
  };

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white relative">
          <motion.button
            onClick={handleBack}
            className="absolute left-6 top-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft className="text-white text-xl" />
          </motion.button>

          <div className="text-center px-10">
            <motion.h1 className="text-3xl font-bold" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {crop}
            </motion.h1>
            <motion.h2 className="text-2xl mt-2 font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {disease}
            </motion.h2>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? 'bg-yellow-500 text-yellow-900' : 'bg-white/20 hover:bg-white/30'} transition-all`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={isBookmarked ? 'Unbookmark' : 'Add to bookmarks'}
            >
              <FiBookmark className="text-xl" />
            </motion.button>

            <motion.button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Share this info"
            >
              <FiShare2 className="text-xl" />
            </motion.button>

            <motion.button
              onClick={handleDownload}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Download details"
            >
              <FiDownload className="text-xl" />
            </motion.button>
          </div>
        </div>

        <motion.div className="p-6 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Description crop={crop} disease={disease} />
          <TreatmentTable crop={crop} disease={disease} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div className="bg-lightblue-50 p-4 rounded-lg border border-blue-200" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">Looking for Help?</h4>
              <p className="text-blue-700">Reach out to nearby agri-specialists for tailored support.</p>
              <Link to="/contact" className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Connect Now
              </Link>
            </motion.div>

            <motion.div className="bg-lightgreen-50 p-4 rounded-lg border border-green-200" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
              <h4 className="font-semibold text-green-800 mb-2 text-lg">Prevent Future Issues</h4>
              <p className="text-green-700">Explore best practices to avoid this disease in upcoming crops.</p>
              <button
                onClick={() => {
                  const query = `${disease} prevention in ${crop} `;
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                }}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Read Guide
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Result;
