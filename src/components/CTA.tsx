import React from 'react';
import { Plane, MapPin, Calendar, Users } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="plan" className="py-20 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Turn your travel dreams into reality. Let us help you plan the perfect journey tailored to your desires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: MapPin, title: "150+ Destinations", desc: "Handpicked locations worldwide" },
            { icon: Calendar, title: "Flexible Planning", desc: "Travel on your schedule" },
            { icon: Users, title: "Expert Guides", desc: "Local knowledge & support" },
            { icon: Plane, title: "Seamless Experience", desc: "From booking to memories" }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-100">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20 mb-4">
            Plan My Trip
          </button>
          <p className="text-indigo-100 text-lg">
            Free consultation • No commitment • Personalized itinerary
          </p>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up" data-aos-delay="600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-indigo-200">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-indigo-200">Hidden Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;