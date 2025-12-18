import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import Button from '../../components/ui/Button.jsx';
import { CONTACT_DATA } from '../../data/contact.data.js';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this to your backend
      const whatsappMessage = `Hello RK Cleaning Experts,

I would like to enquire about your services:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service || 'General Enquiry'}
Message: ${formData.message}

Please contact me at your earliest convenience.`;

      const whatsappUrl = `https://wa.me/${CONTACT_DATA.phone}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
            placeholder="+91 12345 67890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="">Select a service</option>
          <option value="Bathroom Cleaning">Bathroom Cleaning</option>
          <option value="Water Tank & Sump">Water Tank & Sump</option>
          <option value="Floor Cleaning">Floor Cleaning</option>
          <option value="Sofa & Mattress">Sofa & Mattress</option>
          <option value="Kitchen Deep Clean">Kitchen Deep Clean</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Furniture Cleaning">Furniture Cleaning</option>
          <option value="Commercial Cleaning">Commercial Cleaning</option>
          <option value="Pest Control">Pest Control</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your cleaning requirements..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! We'll contact you shortly via WhatsApp.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={20} className="mr-2" />
            Send Enquiry via WhatsApp
          </>
        )}
      </Button>
    </form>
  );
};

export default EnquiryForm;

