import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Zap, Eye, Activity, Plus } from 'lucide-react';

const TherapeuticAreas = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const therapeuticAreas = [
    {
      icon: Heart,
      title: "Oncology",
      specializations: ["Immunotherapy", "Rare Cancers"],
      description: "Advanced cancer research with focus on innovative treatments and personalized medicine approaches.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Brain,
      title: "Neurology",
      specializations: ["Alzheimer's", "Parkinson's", "Epilepsy"],
      description: "Cutting-edge neurological research addressing complex disorders of the central nervous system.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Activity,
      title: "Cardiology",
      specializations: ["Heart Failure", "Hypertension"],
      description: "Comprehensive cardiovascular research focusing on prevention, treatment, and management.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Infectious Diseases",
      specializations: ["COVID-19", "HIV", "Hepatitis"],
      description: "Critical infectious disease research including vaccine development and therapeutic interventions.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Endocrinology",
      specializations: ["Diabetes", "Thyroid Disorders"],
      description: "Endocrine system research focusing on hormonal disorders and metabolic conditions.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Eye,
      title: "Dermatology",
      specializations: ["Psoriasis", "Eczema", "Rare Skin Conditions"],
      description: "Innovative dermatological research addressing skin conditions and cosmetic treatments.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Plus,
      title: "Lifestyle Diseases",
      specializations: ["Obesity", "Metabolic Disorders", "Chronic Conditions"],
      description: "Research focused on lifestyle-related health conditions and preventive medicine approaches.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

 

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <div className="text-6xl mb-6">🩺</div>
            <h1 className="text-5xl font-bold mb-6">Therapeutic Areas</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Specialized expertise across diverse therapeutic domains, advancing medical research and improving patient outcomes worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Areas of Expertise</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in a wide range of therapeutic domains, bringing deep clinical knowledge and regulatory expertise to each area. Our multidisciplinary approach ensures comprehensive research solutions tailored to the unique challenges of each therapeutic field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Therapeutic Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeuticAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 ${area.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                    {area.specializations.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${area.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

 
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Advance Your Therapeutic Research?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us to leverage our extensive therapeutic expertise and accelerate your clinical research programs.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Discuss Your Therapeutic Area
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TherapeuticAreas;