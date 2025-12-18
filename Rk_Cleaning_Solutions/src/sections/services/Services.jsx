import React, { useState } from "react";
import { SERVICES_DATA } from "../../data/services.data.js";
import ServiceCard from "./ServiceCard.jsx";
import ServiceCategory from "./ServiceCategory.jsx";
import PricingTable from "./PricingTable.jsx";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Professional Cleaning Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We bring over 30 years of experience to your doorstep. From
              specialized tank cleaning to full home restoration, explore our
              comprehensive service list below.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService} // ✅ FIXED
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Modal */}
      {selectedService && (
        <ServiceCategory
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

export default Services;
