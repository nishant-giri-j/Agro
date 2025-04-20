import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ChevronDown } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [availableDiseases, setAvailableDiseases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const crops = [
    "Paddy", "Wheat", "Chickpea", "Tomatoes", "Chillies", 
    "Sugarcane", "Sunflower", "Sorghum (Jowar)", "Pigeonpea (Tur)",
    "Soybean", "Cotton", "Rabi Crop", "Linseed", "Green gram",
    "Black gram", "Notable Crop", "Orange", "Traditional Crop",
    "Groundnut", "Moong (Green Gram)", "Urd (Black Gram)",
    "Sesamum", "Bananas", "Onions"
  ];

  const diseaseMap = {
    "Paddy": ["Rice Blast", "Sheath Blight", "Bacterial Blight", "Brown Spot", "Tungro Virus"],
    "Wheat": ["Rust", "Powdery Mildew", "Karnal Bunt", "Leaf Blight", "Head Blight"],
    "Chickpea": ["Fusarium Wilt", "Ascochyta Blight", "Botrytis Gray Mold", "Root Rot", "Stunt"],
    "Tomatoes": ["Early Blight", "Late Blight", "Bacterial Spot", "Leaf Curl Virus", "Fusarium Wilt"],
    "Chillies": ["Anthracnose", "Powdery Mildew", "Bacterial Spot", "Leaf Curl", "Fruit Rot"],
    "Sugarcane": ["Red Rot", "Wilt", "Smut", "Leaf Scald", "Ratoon Stunting"],
    "Sunflower": ["Sclerotinia Rot", "Alternaria Spot", "Downy Mildew", "Rust", "Charcoal Rot"],
    "Sorghum (Jowar)": ["Anthracnose", "Downy Mildew", "Grain Mold", "Rust", "Ergot"],
    "Pigeonpea (Tur)": ["Wilt", "Sterility Mosaic", "Phytophthora Blight", "Alternaria Blight", "Stem Canker"],
    "Soybean": ["Rust", "Bacterial Blight", "Charcoal Rot", "Pod Blight", "Mosaic Virus"],
    "Cotton": ["Boll Rot", "Root Rot", "Leaf Curl", "Alternaria Blight", "Bacterial Blight"],
    "Rabi Crop": ["Leaf Rust", "Powdery Mildew", "Smut", "Ergot", "Loose Smut"],
    "Linseed": ["Powdery Mildew", "Rust", "Wilt", "Alternaria Blight", "Blight"],
    "Green gram": ["Yellow Mosaic", "Powdery Mildew", "Cercospora", "Anthracnose", "Bacterial Spot"],
    "Black gram": ["Root Rot", "Anthracnose", "Powdery Mildew", "Leaf Spot", "Mosaic"],
    "Notable Crop": ["Late Blight", "Early Blight", "Blight", "Wilt", "Rot"],
    "Orange": ["Citrus Canker", "Greening", "Melanose", "Scab", "Anthracnose"],
    "Traditional Crop": ["Rust", "Smut", "Blight", "Wilt", "Mildew"],
    "Groundnut": ["Tikka Disease", "Stem Rot", "Rust", "Leaf Spot", "Blight"],
    "Moong (Green Gram)": ["Powdery Mildew", "Cercospora", "Anthracnose", "Yellow Mosaic", "Leaf Spot"],
    "Urd (Black Gram)": ["Anthracnose", "Powdery Mildew", "Leaf Spot", "Mosaic", "Yellow Mosaic"],
    "Sesamum": ["Phyllody", "Stem Rot", "Blight", "Leaf Spot", "Wilt"],
    "Bananas": ["Panama Disease", "Sigatoka", "Bunchy Top", "Mosaic", "Anthracnose"],
    "Onions": ["Purple Blotch", "Stemphylium Blight", "Downy Mildew", "Basal Rot", "Smudge"]
  };

  const getDiseaseImageUrl = (crop, disease) => {
    const query = encodeURIComponent(`${crop} ${disease}`);
    return `https://www.google.com/search?tbm=isch&q=${query}`;
  };

  useEffect(() => {
    if (selectedCrop) {
      setIsLoading(true);
      setTimeout(() => {
        setAvailableDiseases(diseaseMap[selectedCrop] || []);
        setSelectedDisease('');
        setIsLoading(false);
        setDropdownOpen(false);
      }, 300);
    }
  }, [selectedCrop]);

  const handleSearch = () => {
    if (selectedCrop && selectedDisease) {
      navigate(`/result?crop=${encodeURIComponent(selectedCrop)}&disease=${encodeURIComponent(selectedDisease)}`);
    }
  };

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 overflow-x-hidden">
      <motion.div
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <motion.h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
              Crop Disease Solutions
            </motion.h1>
            <p className="text-lg text-blue-600">Find the right treatment for your crop diseases</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Crop Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">Select Crop</label>
              <select
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-lg"
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                <option value="">Select crop</option>
                {crops.map((crop) => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>

            {/* Disease Dropdown */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-lg">Select Disease</label>
              <div>
                <button
                  type="button"
                  className="w-full p-4 border-2 border-blue-200 rounded-xl text-left text-lg flex justify-between items-center bg-white"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{selectedDisease || 'Select disease'}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>

                {dropdownOpen && selectedCrop && !isLoading && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full mt-2 left-0 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg z-10"
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {availableDiseases.map((disease) => (
                      <div
                        key={disease}
                        onMouseDown={() => {
                          setSelectedDisease(disease);
                          setDropdownOpen(false);
                        }}
                        className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-blue-50 ${
                          selectedDisease === disease ? 'bg-blue-100' : ''
                        }`}
                      >
                        <span className="text-gray-800">{disease}</span>
                        <a
                          href={getDiseaseImageUrl(selectedCrop, disease)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseDown={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Camera className="w-5 h-5" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <p className="text-sm text-gray-400 mt-2">Loading diseases...</p>
                )}
              </div>
            </div>
          </div>

          {/* Search Button */}
          <motion.button
            onClick={handleSearch}
            disabled={!selectedCrop || !selectedDisease}
            className={`w-full py-4 text-white rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ${
              !selectedCrop || !selectedDisease
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            whileHover={!selectedCrop || !selectedDisease ? {} : { scale: 1.02 }}
            whileTap={!selectedCrop || !selectedDisease ? {} : { scale: 0.98 }}
          >
            {!selectedCrop
              ? 'Select a crop'
              : !selectedDisease
              ? 'Select a disease'
              : 'Find Treatments'}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
