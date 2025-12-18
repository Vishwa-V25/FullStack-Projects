import React from 'react';

// Pricing data inline to avoid import issues
const PRICING_DATA = {
  bathroom: {
    startPrice: '₹999',
    items: [
      { label: 'Normal clean', price: '₹8/ sq.ft' },
      { label: 'Deep Cleaning ', price: '₹16 / sq.ft' },
      { label: 'Minimum Charge', price: '₹1700' }
    ]
  },
  kitchen: {
    startPrice: '₹2500',
    items: [
      { label: 'Waste Disposal', price: '₹40 / sq.ft' },
      { label: 'Deep Cleaning washing', price: '₹16 / sq.ft' },
      { label: 'Waste Disposal plus drying', price: '₹47 / sq.ft' },
      { label: 'Minimum charge', price: '₹1500' }

    ]
  },
  floor: {
    startPrice: '₹8 / sq.ft',
    items: [
      { label: 'Deep Cleaning', price: '₹8 / sq.ft' },
      { label: 'Deep Cleaning with Grouting', price: '₹10 / sq.ft' },
      { label: 'Minimum Charge', price: '₹1500' }
    ]
  },
  tank: {
    startPrice: '₹600',
    items: [
      { label: 'Sintex Tank (500 Ltr)', price: '₹600' },
      { label: 'Sintex Tank (1000 Ltr)', price: '₹900' },
      { label: 'Sintex Tank (2000 Ltr)', price: '₹1350' },
      { label: 'Sump (5000L - 8000L)', price: 'Starts ₹1800' },
      { label: 'Concrete Tank', price: 'Starts ₹900' }
    ]
  },
  sofa: {
    startPrice: '₹1200',
    items: [
      { label: '5 Seater Sofa Set', price: '₹1200' },
      { label: 'Single Seater', price: '₹300' },
      { label: '8 seater sofa', price: '₹4000' }
    ]
  },
  carpet: {
    startPrice: '₹12 / sq.ft',
    items: [
      { label: 'Drying', price: '₹2500' },
      { label: 'DryWash plus Smoothing', price: 'Starts ₹5000' }
    ]
  },
  pest: {
    startPrice: '₹2500',
    items: [
      { label: 'Residential (Monthly)', price: '₹2500' },
      { label: 'Commercial (Monthly)', price: 'Starts ₹5000' }
    ]
  }
};

const PricingTable = () => {
  // Convert object to array for mapping
  const pricingCategories = Object.entries(PRICING_DATA);

  return (
    <div className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Complete Rate Card
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            No hidden charges. Professional service at standard market rates. 
            Prices may vary slightly based on inspection and stain condition.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pricingCategories.map(([key, data]) => (
            <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              
              {/* Card Header */}
              <div className="bg-teal-50 px-6 py-4 border-b border-teal-100 flex justify-between items-center">
                <h3 className="font-bold text-teal-800 capitalize text-lg">
                  {key.replace(/([A-Z])/g, ' $1').trim()} {/* Formats camelCase if needed */}
                </h3>
                {data.startPrice && (
                  <span className="text-xs font-bold bg-white text-orange-600 px-2 py-1 rounded border border-orange-200 shadow-sm">
                    From {data.startPrice}
                  </span>
                )}
              </div>

              {/* Items List */}
              <div className="p-6 flex-grow flex flex-col">
                {data.items ? (
                  <ul className="space-y-3 flex-grow">
                    {data.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-start text-sm group border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                          {item.label}
                        </span>
                        <span className="font-bold text-gray-900 whitespace-nowrap ml-4 bg-gray-50 px-2 rounded">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 text-gray-500 italic text-sm flex-grow flex items-center justify-center bg-gray-50/50 rounded-lg">
                    {data.note || "Contact for custom quote"}
                  </div>
                )}

                {/* Footer Note */}
                {data.items && data.note && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">
                      * {data.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 bg-orange-50 inline-block px-6 py-3 rounded-full border border-orange-100 shadow-sm font-medium">
            Note: Fuel expenses charged for service above 20km from Gorimedu, Salem.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PricingTable;