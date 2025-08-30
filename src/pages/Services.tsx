import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const waveAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const mainServices = [
    {
      title: "End-to-End Clinical Trial Management",
      icon: "🧪",
      description: "Comprehensive clinical trial services from Phase I to IV with complete regulatory and operational support",
      details: [
        "Phase I–IV Trial Execution",
        "Site Selection & Monitoring",
        "Regulatory Submissions",
        "Data Management & Biostatistics",
        "Medical Writing & Safety Reporting",
        "Registry Studies",
        "BA/BE studies"
      ],
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700"
    }
  ];

  const additionalServices = [
    {
      title: "Additional Services",
      icon: "🎯",
      description: "Specialized consulting and support services tailored to your unique research requirements",
      details: [
        "Phase Specific Consultancy",
        "Project Management / Program Management Consultancy",
        "Feasibility Studies",
        "Protocol Development",
        "Pharmacovigilance",
        "Quality Assurance Audits"
      ],
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700"
    }
  ];

  const allServices = [...mainServices, ...additionalServices];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <div className="text-6xl mb-6">🧪</div>
            <h1 className="text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive clinical research solutions designed to accelerate your path from discovery to market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert clinical research services delivered with precision and excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                {...waveAnimation}
                transition={{ 
                  ...waveAnimation.transition, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`relative bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-center mb-8">
                    <div className="text-8xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 transform">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-center mb-8 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.3) + (detailIndex * 0.1) + 0.5, duration: 0.4 }}
                        className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0 group-hover:bg-yellow-300 transition-colors duration-300"></div>
                        <span className="text-white font-medium group-hover:text-yellow-100 transition-colors duration-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Clinical Research Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you navigate the complexities of clinical research with our comprehensive service offerings and expert guidance.
            </p>
            <a
              href="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;