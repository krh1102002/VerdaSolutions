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

  const services = [
    {
      id: 'clinical-trial',
      title: 'Clinical Trial Management',
      icon: Microscope,
      description: 'End-to-end management of Phase I-IV clinical trials with expert oversight and quality assurance.',
      color: 'blue',
      details: [
        'Phase I–IV Trial Execution',
        'Site Selection & Monitoring',
        'Patient Recruitment & Retention',
        'Clinical Data Collection',
        'Trial Coordination & Management',
        'Quality Assurance & Control'
      ]
    },
    {
      id: 'regulatory',
      title: 'Regulatory Affairs',
      icon: FileText,
      description: 'Navigate complex regulatory landscapes with our expert guidance and submission support.',
      color: 'green',
      details: [
        'Regulatory Strategy Development',
        'IND/CTA Submissions',
        'FDA/EMA Interactions',
        'Regulatory Compliance',
        'Post-Market Surveillance',
        'Global Registration Support'
      ]
    },
    {
      id: 'data-management',
      title: 'Data Management',
      icon: Database,
      description: 'Comprehensive data management and biostatistics services ensuring data integrity and compliance.',
      color: 'purple',
      details: [
        'Clinical Data Management',
        'Database Design & Validation',
        'Statistical Analysis Planning',
        'Biostatistics & Programming',
        'Data Quality Assurance',
        'CDISC Standards Compliance'
      ]
    },
    {
      id: 'pharmacovigilance',
      title: 'Pharmacovigilance',
      icon: Shield,
      description: 'Comprehensive safety monitoring and adverse event reporting throughout the clinical development process.',
      color: 'red',
      details: [
        'Safety Database Management',
        'Adverse Event Reporting',
        'Signal Detection & Analysis',
        'Risk Management Planning',
        'Periodic Safety Updates',
        'Global Safety Compliance'
      ]
    },
    {
      id: 'medical-writing',
      title: 'Medical Writing',
      icon: FileText,
      description: 'Expert medical writing services for protocols, reports, and regulatory submissions.',
      color: 'indigo',
      details: [
        'Protocol Development',
        'Clinical Study Reports',
        'Regulatory Submissions',
        'Scientific Publications',
        'Investigator Brochures',
        'Patient Information Materials'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: Target,
      description: 'Comprehensive project management ensuring timely delivery and quality outcomes.',
      color: 'orange',
      details: [
        'Project Planning & Strategy',
        'Timeline Management',
        'Resource Allocation',
        'Risk Assessment & Mitigation',
        'Stakeholder Communication',
        'Quality Milestone Tracking'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-600',
        text: 'text-blue-600',
        bgLight: 'bg-blue-50',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-500',
        hover: 'hover:bg-green-600',
        text: 'text-green-600',
        bgLight: 'bg-green-50',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-500',
        hover: 'hover:bg-purple-600',
        text: 'text-purple-600',
        bgLight: 'bg-purple-50',
        border: 'border-purple-200'
      },
      red: {
        bg: 'bg-red-500',
        hover: 'hover:bg-red-600',
        text: 'text-red-600',
        bgLight: 'bg-red-50',
        border: 'border-red-200'
      },
      indigo: {
        bg: 'bg-indigo-500',
        hover: 'hover:bg-indigo-600',
        text: 'text-indigo-600',
        bgLight: 'bg-indigo-50',
        border: 'border-indigo-200'
      },
      orange: {
        bg: 'bg-orange-500',
        hover: 'hover:bg-orange-600',
        text: 'text-orange-600',
        bgLight: 'bg-orange-50',
        border: 'border-orange-200'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const activeService = services.find(service => service.id === activeTab);

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

      {/* Services Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert clinical research services delivered with precision and excellence
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {services.map((service) => {
                const colors = getColorClasses(service.color);
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === service.id
                        ? `${colors.bg} text-white shadow-lg`
                        : `bg-white text-gray-700 hover:${colors.bgLight} border ${colors.border}`
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {service.title}
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-16 h-16 ${getColorClasses(activeService.color).bgLight} rounded-xl flex items-center justify-center mb-6`}>
                      <activeService.icon className={`w-8 h-8 ${getColorClasses(activeService.color).text}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {activeService.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Activity className="w-4 h-4 mr-2" />
                      <span>GCP Compliant • Global Standards</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Service Details</h4>
                    <div className="space-y-4">
                      {activeService.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <CheckCircle className={`w-5 h-5 ${getColorClasses(activeService.color).text} mr-4 flex-shrink-0`} />
                          <span className="text-gray-700 font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Individual Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Services Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of clinical research services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`w-12 h-12 ${colors.bgLight} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Services:</h4>
                    {service.details.slice(0, 4).map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${colors.bg}`}></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                    {service.details.length > 4 && (
                      <div className="flex items-center mt-2">
                        <div className={`w-2 h-2 rounded-full mr-3 ${colors.bg}`}></div>
                        <span className="text-gray-500 text-sm italic">+{service.details.length - 4} more services</span>
                      </div>
                    )}
                  </div>
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