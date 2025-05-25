import React from 'react';
import { Smartphone, Cpu, Battery, Droplet, Wifi, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Screen Replacement",
      description: "Cracked or damaged screens repaired with high-quality parts."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Replacement",
      description: "Restore your phone's battery life with genuine replacements."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Hardware Repairs",
      description: "Camera, speaker, microphone and button repairs."
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Water Damage",
      description: "Specialized treatment for water-damaged devices."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Connectivity Issues",
      description: "Fix Wi-Fi, Bluetooth, and cellular connection problems."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Software Solutions",
      description: "OS updates, data recovery, and software troubleshooting."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Repair Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive repair solutions for all major smartphone brands including Apple, Samsung, Google, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure what's wrong with your device?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Report Your Issue Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;