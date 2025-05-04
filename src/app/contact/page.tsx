'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { motion } from 'framer-motion';

function CodeSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Submitted:', { name, email, message });
    setSubmitted(true);
    setLoading(false);
    
    // Reset form after submission
    setName('');
    setEmail('');
    setMessage('');
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses = "rounded-xl border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950/70 backdrop-blur-sm placeholder:text-neutral-500 text-white transition-all duration-300";
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-16 pt-36 relative overflow-hidden">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      
      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600">
            Get in Touch
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your Software journey.
          </p>
        </motion.div>
        
        <motion.div 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-neutral-800/50"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 mb-6">
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-neutral-300">We will get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1 ml-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={inputClasses}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1 ml-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1 ml-1">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className={`${inputClasses} resize-none`}
                  rows={5}
                  required
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 relative overflow-hidden group ${loading ? 'cursor-not-allowed' : ''}`}
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600"></span>
                  <span className="relative flex items-center justify-center">
                    {loading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 text-sm">
            You can also reach us at{' '}
            <a href="mailto:contact@musicschool.com" className="text-teal-400 hover:text-teal-300 transition-colors">
              contact@codeschool.com
            </a>
            {' '}or call us at{' '}
            <span className="text-teal-400">(555) 123-4567</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default CodeSchoolContactUs;