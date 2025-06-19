import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Feel the Travel Vibes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the beauty of our world through this breathtaking journey
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/108018156?h=8e8c1b7e6e&autoplay=0&title=0&byline=0&portrait=0"
              title="Travel Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform hover:scale-110 transition-transform duration-200">
              <Play className="w-12 h-12 text-white ml-1" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">150+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Countries</h3>
            <p className="text-gray-600 dark:text-gray-300">Destinations to explore</p>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">50K+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Happy Travelers</h3>
            <p className="text-gray-600 dark:text-gray-300">Satisfied customers</p>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">4.9</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rating</h3>
            <p className="text-gray-600 dark:text-gray-300">Average customer rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;