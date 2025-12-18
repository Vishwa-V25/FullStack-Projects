import React, { useEffect } from "react";
import { X, CheckCircle2, Sparkles, Receipt } from "lucide-react";

/* -------------------- PRICING DATA -------------------- */

const PRICING_DATA = {
  bathroom: { startPrice: "₹999", note: "Price may vary depending on stain condition." },
  kitchen: { startPrice: "₹2500", note: "Price may vary depending on stain/grease condition." },
  floor: {
    startPrice: "₹8 / sq.ft",
    items: [
      { label: "Deep Cleaning", price: "₹8 / sq.ft" },
      { label: "Deep Cleaning with Grouting", price: "₹10 / sq.ft" },
    ],
  },
  tank: {
    startPrice: "₹600",
    items: [
      { label: "Sintex Tank (500 Ltr)", price: "₹600" },
      { label: "Sintex Tank (1000 Ltr)", price: "₹900" },
      { label: "Sintex Tank (2000 Ltr)", price: "₹1350" },
      { label: "Sump (5000L - 8000L)", price: "₹1350" },
      { label: "Sump (10000L - 20000L)", price: "Starts ₹2000" },
      { label: "Roof Concrete Tank", price: "Starts ₹900" },
    ],
  },
  sofa: {
    startPrice: "₹1200",
    items: [
      { label: "3 Seater Sofa", price: "₹1200" },
      { label: "5 Seater Sofa", price: "₹2000" },
      { label: "Single Bed Mattress", price: "₹800" },
      { label: "Queen Size Mattress", price: "₹1300" },
      { label: "King Size Mattress", price: "₹1800" },
      { label: "Carpet Cleaning", price: "On Inspection" },
    ],
  },
  appliances: {
    startPrice: "₹75",
    items: [
      { label: "Ceiling Fan", price: "₹75" },
      { label: "Kitchen Sink", price: "₹300" },
      { label: "Exhaust Fan", price: "₹300" },
      { label: "Microwave Oven", price: "₹500" },
      { label: "AC Cleaning", price: "₹700" },
      { label: "Refrigerator", price: "₹800" },
      { label: "Chimney Cleaning", price: "₹800" },
      { label: "Washing Machine", price: "₹800" },
      { label: "Window Cleaning", price: "₹150" },
    ],
  },
  commercial: {
    startPrice: "₹16 / sq.ft",
    items: [
      { label: "Glass Cleaning (Front & Back)", price: "₹16 / sq.ft" },
      { label: "Gym / Spa / Hospital", price: "Custom Quote" },
    ],
  },
  pipeline: { startPrice: "Call", note: "Includes bullet setup cleaning, salt removing liquid fill, and foam wash." },
  pest: {
    startPrice: "Call",
    items: [
      { label: "Termite Treatment", price: "Custom" },
      { label: "Cockroach Treatment", price: "Custom" },
      { label: "Bed Bugs Treatment", price: "Custom" },
    ],
  },
};

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
    commercial:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    pipeline:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800",
    pest:
      "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&q=80&w=800",
  }[id] ||
  "https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=800");

/* -------------------- COMPONENT -------------------- */

const ServiceCategory = ({ service, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  if (!service) return null;

  const Icon = service.icon;
  const pricing = PRICING_DATA[service.id];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-title"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-white/30 rounded-full">
            <X size={24} />
          </button>

          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 relative min-h-[300px]">
              <img src={getServiceImage(service.id)} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h2 id="service-title" className="text-3xl font-bold mb-2">{service.title}</h2>
                <p className="text-teal-100 text-sm">{service.shortDesc}</p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 max-h-[80vh] overflow-y-auto">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-orange-500" size={20} />
                  <h3 className="font-bold uppercase text-sm">Cleaning Process</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-teal-50 rounded-lg">
                      <CheckCircle2 size={18} className="text-teal-600 mt-1" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {pricing && (
                <div className="bg-gray-900 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Receipt size={20} className="text-orange-400" />
                    <h3 className="font-bold">Standard Rates</h3>
                  </div>
                  <div className="text-2xl font-bold text-orange-400 mb-4">{pricing.startPrice}</div>
                  {pricing.items?.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-gray-700 py-2">
                      <span>{item.label}</span>
                      <span className="font-mono">{item.price}</span>
                    </div>
                  ))}
                  {pricing.note && <p className="mt-3 text-xs text-gray-400 italic">* {pricing.note}</p>}
                </div>
              )}

              <div className="mt-8 text-right">
                <a
                  href="https://wa.me/919500663644"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t z-50">
        <button onClick={onClose} className="w-full py-3 rounded-full bg-gray-900 text-white font-bold">
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceCategory;
