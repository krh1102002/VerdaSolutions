import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, Target, Heart, Zap, Database, Brain, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    { icon: CheckCircle, title: "Digitalization", description: "Leveraging cutting-edge technology to streamline research processes" },
    { icon: Database, title: "Data Integrity", description: "Ensuring the highest standards of data quality and compliance" },
    { icon: Heart, title: "Client Centric", description: "Putting our partners' needs at the center of everything we do" },
    { icon: Zap, title: "Agility & Responsiveness", description: "Adapting quickly to changing research landscapes and requirements" },
    { icon: Brain, title: "Connecting Intelligence (AI)", description: "Harnessing artificial intelligence to enhance research outcomes" },
    { icon: TrendingUp, title: "Advancing Health", description: "Contributing to global health advancement through innovative research" },
    { icon: Target, title: "Quality Optimization", description: "Continuously improving processes to deliver exceptional results" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Verda Solutions</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Pioneering excellence in clinical research with a commitment to innovation, integrity, and patient-centric solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Verda Solutions stands at the forefront of advancing medical knowledge and elevating patient care through exceptional research. Our team is committed to excellence, offering high-quality solutions to pharmaceutical, biotechnology, and healthcare partners.
              </p>
              <p>
                As your trusted partner, we redefine standards and aim to make a lasting impact on global health. Join us in shaping the future of healthcare innovation.
              </p>
              <p>
                In our pursuit of excellence, we prioritize collaboration, innovation, and precision. With a specialized focus on comprehensive clinical trial services and navigating complex regulatory landscapes, we are dedicated to exceeding the expectations of our valued partners, going above and beyond in every collaboration.
              </p>
              <p>
                Discover a transformative partnership where our commitment to scientific excellence propels advancements that transcend borders and positively impact communities worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Globe className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Presence</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2025, with strategic locations across the UK, US, and India, we bring together diverse expertise and local knowledge to serve our global partners effectively.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Award className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GCP Compliant</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict adherence to Good Clinical Practice (GCP) guidelines, ensuring the highest standards of quality, safety, and regulatory compliance in all our research activities.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Users className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Partnerships</h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with leading pharmaceutical, biotechnology, and academic institutions worldwide, fostering collaborative relationships that drive innovation and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are committed to accelerating innovation through ethical, efficient, and patient-centric clinical research. Our mission is to accelerate the discovery, development, and commercialization of cutting-edge healthcare solutions by conducting ethical, efficient, and rigorous clinical research.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Integrity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Scientific Excellence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Patient Safety</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Collaboration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Global Excellence</h3>
                <p className="text-lg text-blue-800 leading-relaxed">
                  Where unparalleled global excellence meets cutting-edge technological innovation, shaping a future of advanced clinical solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our approach to clinical research and client partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;