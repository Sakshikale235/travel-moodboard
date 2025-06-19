import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Plane, Calendar, Users, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const features = [
    { icon: Plane, title: "150+ Destinations", desc: "Handpicked locations worldwide" },
    { icon: Calendar, title: "Flexible Planning", desc: "Travel on your schedule" },
    { icon: Users, title: "Expert Guides", desc: "Local knowledge & support" },
    { icon: Star, title: "Premium Experience", desc: "From booking to memories" }
  ];

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", info: "123 Travel Street, Adventure City, AC 12345" },
    { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email Us", info: "hello@travelmoodboard.com" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready for Your Next <span className="gradient-text">Adventure</span>?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn your travel dreams into reality. Let us help you plan the perfect journey tailored to your desires.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center text-white group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-colors interactive"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-100">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Plan Your Trip</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Your Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all interactive"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email Address</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all interactive"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Dream Destination</label>
                <motion.select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all interactive"
                  whileFocus={{ scale: 1.02 }}
                  required
                >
                  <option value="" className="text-gray-900">Select a destination</option>
                  <option value="santorini" className="text-gray-900">Santorini, Greece</option>
                  <option value="bali" className="text-gray-900">Bali, Indonesia</option>
                  <option value="kyoto" className="text-gray-900">Kyoto, Japan</option>
                  <option value="machu-picchu" className="text-gray-900">Machu Picchu, Peru</option>
                  <option value="maldives" className="text-gray-900">Maldives</option>
                  <option value="iceland" className="text-gray-900">Iceland</option>
                  <option value="other" className="text-gray-900">Other</option>
                </motion.select>
              </div>
              <div>
                <label className="block text-white mb-2">Tell us about your dream trip</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none interactive"
                  placeholder="Describe your ideal travel experience..."
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20 flex items-center justify-center space-x-2 interactive ripple"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Plan My Trip</span>
              </motion.button>
            </form>
            <p className="text-indigo-100 text-center mt-4">
              Free consultation • No commitment • Personalized itinerary
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-xl text-indigo-100 mb-8">
                Have questions? We're here to help you plan the perfect adventure. Reach out to our travel experts today!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-colors interactive"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                    <p className="text-indigo-100">{info.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Guarantee Section */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Our Promise</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-indigo-200 text-sm">Customer Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-indigo-200 text-sm">Satisfaction Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">0</div>
                  <div className="text-indigo-200 text-sm">Hidden Fees</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;