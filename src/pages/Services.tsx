import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, FileText, Database, Shield, Users, CheckCircle, Activity } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('clinical-trial');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const serviceCategories = [
    {
      id: 'clinical-trial',
      title: 'End-to-End Clinical Trial Management',
      icon: '🧪',
      description: 'Comprehensive clinical trial services from Phase I to IV with complete regulatory and operational support',
      color: 'blue',
      services: [
        'Phase I–IV Trial Execution',
        'Site Selection & Monitoring',
        'Regulatory Submissions',
        'Data Management & Biostatistics',
        'Medical Writing & Safety Reporting',
        'Registry Studies',
        'BA/BE studies'
      ]
    },
    {
      id: 'additional',
      title: 'Additional Services',
      icon: '🎯',
      description: 'Specialized consulting and support services tailored to your unique research requirements',
      color: 'green',
      services: [
        'Phase Specific Consultancy',
        'Project Management / Program Management Consultancy',
        'Feasibility Studies',
        'Protocol Development',
        'Pharmacovigilance',
        'Quality Assurance Audits'
      ]
    }
  ];

  const individualServices = [
    {
      title: 'Clinical Trial Management',
      description: 'End-to-end management of Phase I-IV clinical trials with expert oversight and quality assurance.',
      icon: Microscope,
      color: 'blue'
    },
    {
      title: 'Regulatory Affairs',
      description: 'Navigate complex regulatory landscapes with our expert guidance and submission support.',
      icon: FileText,
      color: 'green'
    },
    {
      title: 'Data Management',
      description: 'Comprehensive data management and biostatistics services ensuring data integrity and compliance.',
      icon: Database,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-600',
        text: 'text-blue-600',
        bgLight: 'bg-blue-50',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600'
      },
      green: {
        bg: 'bg-green-500',
        hover: 'hover:bg-green-600',
        text: 'text-green-600',
        bgLight: 'bg-green-50',
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600'
      },
      purple: {
        bg: 'bg-purple-500',
        hover: 'hover:bg-purple-600',
        text: 'text-purple-600',
        bgLight: 'bg-purple-50',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

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

      {/* Main Service Categories with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert clinical research services delivered with precision and excellence
            </p>
          </motion.div>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-lg p-2 shadow-lg">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Content */}
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${
                activeCategory.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600'
              } text-white rounded-2xl p-12 shadow-xl`}
            >
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{activeCategory.icon}</div>
                <h3 className="text-4xl font-bold mb-4">{activeCategory.title}</h3>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  {activeCategory.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {activeCategory.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-white font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Individual Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across key clinical research domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {individualServices.map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                >
                  <div className={`w-16 h-16 ${colors.bgLight} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
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