import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/feedback", {
        name: formData.name,
        email: formData.email,
        rating: Number(formData.rating),
        feedback: formData.feedback,
      });

      toast.success("✅ Feedback submitted successfully!");

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        rating: "",
        feedback: "",
      });
    } catch (error) {
      toast.error("❌ Failed to submit feedback");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-pink-30 to-indigo-50 p-6">

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
        <div className="p-8 bg-gradient-to-tr from-indigo-200 via-pink-100 to-purple-200">
          <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center italic">
            YOUR FEEDBACK
          </h2>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center"
              >
                ✅ Feedback submitted successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full p-3 rounded border"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full p-3 rounded border"
            />

            <select
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
              required
              className="w-full p-3 rounded border"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>

            <textarea
              rows="4"
              placeholder="Your feedback"
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
              required
              className="w-full p-3 rounded border"
            />

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-3 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/customer-review-10193539-8264689.png"
            alt="feedback"
            className="w-80"
          />
        </div>

      </div>
    </section>
  );
};

export default FeedbackForm;
