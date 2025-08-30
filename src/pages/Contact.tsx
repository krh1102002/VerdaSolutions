import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setStatusMessage('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }
  };

  const offices = [
    {
      country: "India",
      city: "Mumbai, Maharashtra",
      phone: "+91 9167878003",
      icon: MapPin,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      country: "United States",
      city: "Pittsburgh, US",
      phone: "+1 (832) 282-0459",
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      country: "United Kingdom",
      city: "Readings, UK",
      phone: "Contact for details",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Ready to start your clinical research journey? Get in touch with our global team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-green-800">{statusMessage}</p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <p className="text-red-800">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="clinical-trials">Clinical Trial Services</option>
                        <option value="regulatory">Regulatory Affairs</option>
                        <option value="data-management">Data Management</option>
                        <option value="pharmacovigilance">Pharmacovigilance</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Please describe your project requirements, therapeutic area of interest, or any specific questions you have..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our global team is ready to discuss your clinical research needs and provide tailored solutions for your projects.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">info@verdasolutions.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Global Offices</h4>
                  <div className="space-y-4">
                    {offices.map((office, index) => {
                      const IconComponent = office.icon;
                      return (
                        <div key={index} className={`p-4 ${office.bgColor} rounded-lg`}>
                          <div className="flex items-start">
                            <IconComponent className={`w-5 h-5 ${office.color} mr-3 mt-0.5`} />
                            <div>
                              <h5 className="font-semibold text-gray-900">{office.country}</h5>
                              <p className="text-sm text-gray-600">{office.city}</p>
                              <p className="text-sm font-medium text-gray-800">{office.phone}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-lg text-gray-600">
              Strategic locations worldwide to serve our international clients
            </p>
          </motion.div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8947542964944!2d72.8256167!3d19.0175781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9e3d1e5c5b%3A0x3c5a10c8fce4e8dc!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;