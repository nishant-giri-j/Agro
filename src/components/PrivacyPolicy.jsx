const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-green-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Privacy Policy</h1>
      <p className="mb-4 text-green-800">
        At Agro, we value your privacy. This Privacy Policy explains what personal information we collect, how we use it, and the measures we take to protect it.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 text-green-800">
        <li>Contact number (to facilitate communication)</li>
        <li>User preferences and crop search history (to enhance recommendations)</li>
        <li>Feedback submitted via the contact form (to improve your experience)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 text-green-800">
        <li>To provide tailored fertilizer suggestions based on crop conditions</li>
        <li>To personalize the content and improve the user interface</li>
        <li>To inform you about relevant agricultural updates and offers</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Protection</h2>
      <p className="mb-4 text-green-800">
        We use advanced security protocols to ensure your data remains safe. All sensitive information is transmitted securely and stored using encryption technologies.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Disclosure</h2>
      <p className="mb-4 text-green-800">
        Your personal data is never sold, traded, or shared with third parties without prior notice and your explicit consent.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
      <p className="mb-4 text-green-800">
        We may revise this Privacy Policy occasionally. Please check this page regularly to stay informed about any updates.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
