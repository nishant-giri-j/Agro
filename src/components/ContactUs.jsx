import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
  
    const { name, contact, message } = formData;
    const phoneRegex = /^\d{10}$/;
  
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus('All fields are required');
      setIsSubmitting(false);
      return;
    }
  
    if (!phoneRegex.test(contact.trim())) {
      setStatus('Please enter a valid 10-digit phone number');
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('https://sheetdb.io/api/v1/6p28tjoepiwks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              'Contact Number': contact,
              Message: message,
            },
          ],
        }),
      });
  
      if (response.ok) {
        setStatus('Your message has been sent!');
        setFormData({ name: '', contact: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Server error. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Left Info */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center gap-8">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <p className="text-lg leading-relaxed">
            Reach out to us for support, ideas, or feedback. We'd love to hear from you!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>+91 8668537137</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">WhatsApp</h4>
                <p>+91 8668537137</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p>Agro, Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-10 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-700">Send Us a Message</h3>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="+91 83295 54046"
                className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let us know how we can assist you..."
                className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
              />
            </div>

            {status && (
              <div
                className={`text-sm font-medium text-center p-3 rounded-lg ${
                  status.includes('sent')
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </div>
            )}

            <motion.button
              type="submit"
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition shadow-md ${
                isSubmitting
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              disabled={isSubmitting}
              whileHover={!isSubmitting && { scale: 1.02 }}
              whileTap={!isSubmitting && { scale: 0.97 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
