import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';
import EnquiryForm from './EnquiryForm.jsx';
import MapEmbed from './MapEmbed.jsx';
import Button from '../../components/ui/Button.jsx';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_DATA.displayPhone,
      link: `tel:${CONTACT_DATA.phone}`,
      color: 'text-teal-700 bg-teal-50 hover:bg-teal-100'
    },
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_DATA.email,
      link: `mailto:${CONTACT_DATA.email}`,
      color: 'text-blue-700 bg-blue-50 hover:bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: CONTACT_DATA.address.full,
      link: '#',
      color: 'text-orange-700 bg-orange-50 hover:bg-orange-100'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: `${CONTACT_DATA.workingHours.weekdays} (Mon-Fri)`,
      link: '#',
      color: 'text-purple-700 bg-purple-50 hover:bg-purple-100'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Contact Us Today
          </h2>
          <p className="text-gray-500">
            Have a cleaning requirement? We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            const Component = method.link === '#' ? 'div' : 'a';
            const props = method.link !== '#' ? { href: method.link } : {};

            return (
              <Component
                key={idx}
                {...props}
                className={`p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 ${method.color} cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${method.color.split(' ')[1]}`}>
                  <Icon size={24} className={method.color.split(' ')[0]} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.value}</p>
              </Component>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 mb-16 text-center text-white">
          <MessageCircle size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Quick Response via WhatsApp
          </h3>
          <p className="text-lg mb-6 text-green-50">
            Get instant quotes and book services directly through WhatsApp
          </p>
          <a
            href={CONTACT_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="white" size="lg">
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        {/* Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us an Enquiry
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you via WhatsApp as soon as possible.
            </p>
            <EnquiryForm />
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Find Us
            </h3>
            <p className="text-gray-600 mb-8">
              Visit us at our location in Gorimedu, Salem. We're always happy to welcome you!
            </p>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
