import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", rating: "", feedback: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-pink-30 to-indigo-50 p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Feedback Form */}
        <div className="p-8 bg-gradient-to-tr from-indigo-200 via-pink-100 to-purple-200">
          <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center italic">
          YOUR FEEDBACK
          </h2>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4 shadow-md"
              >
                ✅ <span className="font-semibold">Thank you for your feedback!</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full p-3 font-semibold rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-3 font-semibold rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50"
            />

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full p-3 font-semibold rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️ - Excellent</option>
              <option value="4">⭐️⭐️⭐️⭐️ - Good</option>
              <option value="3">⭐️⭐️⭐️ - Average</option>
              <option value="2">⭐️⭐️ - Poor</option>
              <option value="1">⭐️ - Bad</option>
            </select>

            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Your Feedback"
              className="w-full p-3 font-semibold rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full text-lg bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Submit Feedback
            </motion.button>
          </form>
        </div>

        {/* Right Side: SVG Image */}
       <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-pink-100 to-purple-200 p-6">
  <img
    src="https://cdni.iconscout.com/illustration/premium/thumb/customer-review-10193539-8264689.png"
    alt="Feedback Illustration"
    className="w-92 h-92 drop-shadow-2xl object-contain"
  />
</div>
      </div>
    </section>
  );
};

export default FeedbackForm;
