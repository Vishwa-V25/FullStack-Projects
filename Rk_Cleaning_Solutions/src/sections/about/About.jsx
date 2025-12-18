import React from 'react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import Button from '../../components/ui/Button.jsx';

const FEATURES = [
  "Professional & Background Verified Staff",
  "100% Eco-friendly & Safe Chemicals",
  "Advanced Machinery for Deep Cleaning",
  "On-time Service Guarantee"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-20 -z-10 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://media.tenor.com/images/7b7fc2c53c017eb33c6cd04358c8f60f/tenor.gif" 
                alt="Professional Cleaning Team" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-teal-700 text-white p-6 md:p-8 rounded-xl shadow-xl z-20 animate-fade-in-up">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold">30</span>
                <span className="text-xl md:text-2xl font-semibold">+</span>
              </div>
              <div className="text-sm md:text-base font-medium opacity-90 uppercase tracking-wider mt-1">
                Years of<br />Experience
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10 opacity-50" />
            <div className="absolute bottom-10 -left-10 text-orange-200 -z-10 hidden md:block">
              <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} />
              <span>Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Setting the Standard for <br />
              <span className="text-teal-700">Hygiene & Cleanliness</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded by <strong>K. Radhakrishnan</strong>, RK Cleaning Experts has grown from a local service to a trusted name in residential and industrial cleaning. We combine traditional work ethics with modern technology to deliver spaces that aren't just clean, but clinically sanitized.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-teal-100 text-teal-700 shrink-0">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-teal-50 rounded-lg text-teal-700">
                    <Users size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-gray-900">Expert Team</div>
                    <div className="text-sm text-gray-500">Trained Professionals</div>
                 </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                    <Clock size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-gray-900">Fast Service</div>
                    <div className="text-sm text-gray-500">On-Time Completion</div>
                 </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="mr-4">Read Our Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;