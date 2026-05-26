import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaUserCircle,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaDumbbell,
  FaSpa,
  FaSnowflake,
  FaGlassMartiniAlt,
  FaDog,
} from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import Loader from "../Ui/Loader";

/* ── Amenity icon mapping ── */
const amenityIcons = {
  WiFi: <FaWifi />,
  Parking: <FaParking />,
  "Swimming Pool": <FaSwimmingPool />,
  Restaurant: <FaUtensils />,
  Gym: <FaDumbbell />,
  Spa: <FaSpa />,
  "Air Conditioning": <FaSnowflake />,
  Bar: <FaGlassMartiniAlt />,
  "Pet Friendly": <FaDog />,
};

/* ── Star rendering helper ── */
const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
  if (half) stars.push(<FaStarHalfAlt key="h" className="text-yellow-400" />);
  while (stars.length < 5) stars.push(<FaRegStar key={`e${stars.length}`} className="text-yellow-300" />);
  return stars;
};

/* ── Dummy reviews (replace with API later) ── */
const dummyReviews = [
  { id: 1, name: "Rahul Sharma", rating: 5, date: "2025-12-10", comment: "Absolutely loved the stay! The rooms were spotless, staff was super friendly, and the view from the balcony was breathtaking. Highly recommended for families." },
  { id: 2, name: "Priya Singh", rating: 4, date: "2025-11-22", comment: "Great hotel with excellent amenities. The pool area is fantastic. Only suggestion would be to improve the breakfast variety. Will definitely come back!" },
  { id: 3, name: "Aman Gupta", rating: 5, date: "2025-10-15", comment: "One of the best hotels I've stayed in. The location is perfect — close to all the major attractions. The spa experience was world-class." },
  { id: 4, name: "Sneha Patel", rating: 4.5, date: "2025-09-05", comment: "Beautiful property with amazing architecture. Loved the room service and the courteous staff. A perfect getaway from the city hustle." },
];

/* ── Fade-up animation variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HotelDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: "5", comment: "" });
  const [reviews, setReviews] = useState(dummyReviews);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/hotel/${id}`);
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("Error fetching hotel:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  /* ── Build Google Maps URL from location ── */
  const getMapEmbedUrl = () => {
    if (!data?.location) return "";
    const parts = [data.location.address, data.location.city, data.location.state, data.location.country].filter(Boolean);
    const query = encodeURIComponent(parts.join(", "));
    return `https://maps.google.com/maps?q=${query}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  };

  /* ── Handle review submit ── */
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;
    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating: parseFloat(reviewForm.rating),
      date: new Date().toISOString().split("T")[0],
      comment: reviewForm.comment,
    };
    setReviews([newReview, ...reviews]);
    setReviewForm({ name: "", rating: "5", comment: "" });
  };

  /* ── Average rating ── */
  const avgRating = reviews.length ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : "0";

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : !data ? (
        <div className="text-center mt-20 text-lg text-red-500">❌ Hotel not found!</div>
      ) : (
        <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50 min-h-screen">
          {/* ═══════════ HERO BANNER ═══════════ */}
          <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={data.images?.[0]?.url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"}
              alt={data.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-8 left-0 right-0 text-center px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl">
                {data.name}
              </h1>
              <p className="mt-3 text-white/90 text-base sm:text-lg flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-red-400" />
                {data.location?.city}, {data.location?.state}, {data.location?.country}
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="flex gap-0.5">{renderStars(data.rating)}</div>
                <span className="text-white font-bold text-lg">{data.rating}/5</span>
              </div>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
            {/* ═══════════ IMAGE GALLERY ═══════════ */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
            >
              {[0, 1, 2].map((i) => {
                const fallbacks = [
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
                ];
                const imgUrl = data.images?.[i]?.url || fallbacks[i];
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedImg(imgUrl)}
                    className={`cursor-pointer overflow-hidden rounded-2xl shadow-lg group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                  >
                    <img
                      src={imgUrl}
                      alt={`hotel-${i}`}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? "h-64 sm:h-80 md:h-[22rem]" : "h-32 sm:h-40 md:h-[10.5rem]"}`}
                    />
                  </div>
                );
              })}
              {/* Extra slot for "View All" or 4th image */}
              <div className="overflow-hidden rounded-2xl shadow-lg relative group cursor-pointer"
                onClick={() => setSelectedImg(data.images?.[0]?.url)}
              >
                <img
                  src={data.images?.[0]?.url || "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800"}
                  alt="more"
                  className="w-full h-32 sm:h-40 md:h-[10.5rem] object-cover brightness-50 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">📸 View All</span>
              </div>
            </motion.div>

            {/* ═══════════ MAIN CONTENT ═══════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Left: Description + Amenities */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="lg:col-span-2 space-y-10"
              >
                {/* About */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4">
                    About this Hotel
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
                    {data.description}
                  </p>
                </div>

                {/* Amenities */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {data.amenities?.map((amenity, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-md border border-blue-100 cursor-default"
                      >
                        <span className="text-xl text-indigo-600">{amenityIcons[amenity] || <FaCheckCircle />}</span>
                        <span className="font-medium text-gray-800 text-sm sm:text-base">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                {(data.contact?.phone || data.contact?.email) && (
                  <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4">
                      Contact Information
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6">
                      {data.contact?.phone && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaPhoneAlt className="text-green-500 text-lg" />
                          <span className="font-medium">{data.contact.phone}</span>
                        </div>
                      )}
                      {data.contact?.email && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaEnvelope className="text-blue-500 text-lg" />
                          <span className="font-medium">{data.contact.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Right: Booking Card */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 sticky top-24">
                  <div className="flex items-end gap-1 mb-1">
                    <MdCurrencyRupee className="text-3xl text-blue-800" />
                    <span className="text-4xl font-extrabold text-blue-800">{data.price}</span>
                    <span className="text-base text-gray-500 mb-1">/ night</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">Inclusive of all taxes</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Check-in</label>
                      <input type="date" className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Check-out</label>
                      <input type="date" className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Guests</label>
                      <select className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                    >
                      🏨 Book Now
                    </motion.button>
                  </div>

                  {/* Quick highlights */}
                  <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" /> Free cancellation up to 24 hrs
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" /> Instant confirmation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" /> No prepayment needed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ═══════════ LIVE GOOGLE MAP ═══════════ */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" /> Location on Map
              </h2>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                  title="Hotel Location"
                  src={getMapEmbedUrl()}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[350px] md:h-[420px]"
                />
              </div>
              {data.location?.address && (
                <p className="mt-4 text-gray-600 flex items-center gap-2 text-sm sm:text-base">
                  <FaMapMarkerAlt className="text-red-400" />
                  {data.location.address}, {data.location.city}, {data.location.state} {data.location.pincode && `- ${data.location.pincode}`}
                </p>
              )}
            </motion.div>

            {/* ═══════════ REVIEWS SECTION ═══════════ */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Guest Reviews
                </h2>
                <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-amber-50 px-5 py-3 rounded-2xl shadow border border-yellow-200">
                  <span className="text-3xl font-extrabold text-yellow-600">{avgRating}</span>
                  <div>
                    <div className="flex gap-0.5">{renderStars(parseFloat(avgRating))}</div>
                    <p className="text-xs text-gray-500 mt-0.5">{reviews.length} reviews</p>
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-5">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      required
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50"
                    />
                    <select
                      value={reviewForm.rating}
                      onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      <option value="4">⭐⭐⭐⭐ Very Good</option>
                      <option value="3">⭐⭐⭐ Good</option>
                      <option value="2">⭐⭐ Fair</option>
                      <option value="1">⭐ Poor</option>
                    </select>
                  </div>
                  <textarea
                    rows="4"
                    placeholder="Share your experience..."
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    required
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50 resize-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Submit Review
                  </motion.button>
                </form>
              </div>

              {/* Reviews List */}
              <div className="space-y-5">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <FaUserCircle className="text-4xl text-indigo-300 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 my-2">{renderStars(review.rating)}</div>
                        <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ═══════════ LIGHTBOX MODAL ═══════════ */}
          {selectedImg && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImg}
                alt="fullscreen"
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 transition"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HotelDetail;
