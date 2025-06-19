import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Preload critical images
    const preloadImages = [
      'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ];

    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      })
    ).then(() => {
      // Minimum loading time for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }).catch(() => {
      // Even if images fail to load, continue after timeout
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <CustomCursor />
        
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen 
              isLoading={isLoading} 
              onLoadingComplete={handleLoadingComplete}
            />
          )}
        </AnimatePresence>
        
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <Destinations />
            <Showcase />
            <Testimonials />
            <Contact />
            
            <footer className="bg-gray-900 dark:bg-black text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Travel Moodboard
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Your gateway to extraordinary adventures around the world
                  </motion.p>
                  <motion.div 
                    className="flex justify-center space-x-6 text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span>© 2025 Travel Moodboard</span>
                    <span>•</span>
                    <span className="hover:text-white transition-colors cursor-pointer interactive">Privacy Policy</span>
                    <span>•</span>
                    <span className="hover:text-white transition-colors cursor-pointer interactive">Terms of Service</span>
                  </motion.div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;