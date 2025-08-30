import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe, Shield, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 0.9)), url("https://images.pexels.com/photos/3786122/pexels-photo-3786122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Accelerating Innovation Through 
              <span className="block text-green-400">Ethical Clinical Research</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              We are committed to accelerating innovation through ethical, efficient, and patient-centric clinical research that transforms healthcare worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are committed to accelerating innovation through ethical, efficient, and patient-centric clinical research. 
              Our global expertise spans across multiple therapeutic areas, delivering cutting-edge solutions that advance 
              medical knowledge and improve patient outcomes worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={500} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Clinical Trials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={25} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={100} duration={2.5} />%
              </h3>
              <p className="text-gray-600">GCP Compliant</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive clinical research solutions from protocol development to regulatory submissions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clinical Trial Management",
                description: "End-to-end management of Phase I-IV clinical trials with expert oversight and quality assurance.",
                icon: "🔬"
              },
              {
                title: "Regulatory Affairs",
                description: "Navigate complex regulatory landscapes with our expert guidance and submission support.",
                icon: "📋"
              },
              {
                title: "Data Management",
                description: "Comprehensive data management and biostatistics services ensuring data integrity and compliance.",
                icon: "📊"
              }
            ].slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View All Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Clinical Research?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Verda Solutions for world-class clinical trial management and regulatory expertise.
            </p>
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Partnership
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;