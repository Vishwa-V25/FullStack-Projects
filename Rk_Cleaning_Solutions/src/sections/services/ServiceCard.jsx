import React from "react";
import { ArrowRight } from "lucide-react";

/* -------------------- IMAGE RESOLVER -------------------- */

const getServiceImage = (id) =>
  ({
    bathroom:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    kitchen:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    floor:
      "https://5.imimg.com/data5/SELLER/Default/2022/2/PO/AG/FK/22127902/office-floor-cleaning-services-500x500.png",
    tank:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800",
    sofa:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    appliances:
      "http://kingscleaningco.com.au/cdn/shop/articles/dw.webp?v=1723168248",
    furniture:
    "http://kingscleaningco.com.au/cdn/shop/articles/dw.webp?v=1723168248",
    commercial:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    pipeline:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800",
    pest:
      "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&q=80&w=800",
  }[id] ||
  "https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=800");

/* -------------------- COMPONENT -------------------- */

const ServiceCard = ({ service, onSelect }) => {
  const Icon = service.icon;
  const imageSrc = getServiceImage(service.id);

  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Icon Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
            <Icon size={22} className="text-teal-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {service.shortDesc}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.slice(0, 2).map((feat, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {feat}
            </span>
          ))}
          {service.features.length > 2 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              +{service.features.length - 2}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onSelect(service)}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          aria-label={`View details for ${service.title}`}
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
