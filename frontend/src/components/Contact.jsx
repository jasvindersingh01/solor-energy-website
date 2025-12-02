  import { motion } from "framer-motion";
  import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
  import React, { useState } from "react";
  import Swal from "sweetalert2";

  export default function Contact() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: ""
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);

      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            title: "Message Sent!",
            icon: "success",
            text: "We will contact you soon.",
            draggable: true
          });

          setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } finally {
    setLoading(false);
  }
    };


    return (
      <section id="contact" className="py-20 bg-white scroll-mt-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-blue-700"
        >
          Contact Us
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch With Us
            </h3>

            <div className="flex items-start gap-4">
              <FaPhoneAlt size={25} className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-700">+91 9351055571</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={25} className="text-red-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-700">
                  Plot No. 1, Adinath Nagar, Devli Arab Road, Kota, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={25} className="text-yellow-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-700">asters_energy@yahoo.com</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-800">
                <strong>Govt Subsidy Assistance:</strong> Get support in claiming
                rooftop solar subsidies up to ₹78,000.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 p-8 rounded-xl shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-blue-600"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-blue-600"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-blue-600"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition cursor-pointer
      ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
    `}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

          </motion.form>
        </div>
      </section>
    );
  }
