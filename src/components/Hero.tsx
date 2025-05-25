import React from 'react';
import Header from './Header';
import { Smartphone, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Expert Phone Repairs <span className="text-blue-600">You Can Trust</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Fast, reliable repairs for all smartphone brands and models. 
              Our certified technicians fix your device right the first time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                Report an Issue
              </a>
              <a 
                href="#services" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeInUp">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full opacity-10 absolute -top-6 -left-6"></div>
              <img 
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg" 
                alt="Phone repair technician" 
                className="rounded-xl shadow-xl max-w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Smartphone className="h-10 w-10 text-blue-600 mb-4" />,
              title: "Expert Technicians",
              desc: "Certified professionals with years of experience fixing all phone models."
            },
            {
              icon: <Shield className="h-10 w-10 text-blue-600 mb-4" />,
              title: "Quality Guarantee",
              desc: "All repairs come with a 90-day warranty for your peace of mind."
            },
            {
              icon: <Clock className="h-10 w-10 text-blue-600 mb-4" />,
              title: "Fast Turnaround",
              desc: "Most repairs completed same-day, often while you wait."
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;