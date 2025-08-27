import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'hello@stylehub.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '(555) 123-4567',
      description: 'Call us Monday to Friday'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '123 Fashion Street, Style City, SC 12345',
      description: 'Visit our flagship store'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM',
      description: 'We\'re here to help!'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg text-orange-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{info.title}</h3>
                      <p className="text-slate-600 font-medium">{info.details}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">What's your return policy?</h3>
                  <p className="text-slate-600 text-sm">We offer a 30-day hassle-free return policy for all items in original condition.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Do you offer international shipping?</h3>
                  <p className="text-slate-600 text-sm">Yes, we ship worldwide! Shipping costs and delivery times vary by location.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">How do I track my order?</h3>
                  <p className="text-slate-600 text-sm">You'll receive a tracking number via email once your order ships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;