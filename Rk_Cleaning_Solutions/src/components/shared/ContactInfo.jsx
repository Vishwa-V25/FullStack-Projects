import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <a
        href={`tel:${CONTACT_DATA.phone}`}
        className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition-colors group"
      >
        <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
          <Phone size={20} className="text-teal-700" />
        </div>
        <div>
          <div className="text-sm text-gray-500">Phone</div>
          <div className="font-semibold">{CONTACT_DATA.displayPhone}</div>
        </div>
      </a>

      <a
        href={`mailto:${CONTACT_DATA.email}`}
        className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition-colors group"
      >
        <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
          <Mail size={20} className="text-teal-700" />
        </div>
        <div>
          <div className="text-sm text-gray-500">Email</div>
          <div className="font-semibold">{CONTACT_DATA.email}</div>
        </div>
      </a>

      <div className="flex items-start gap-3 text-gray-700">
        <div className="p-2 bg-teal-50 rounded-lg">
          <MapPin size={20} className="text-teal-700" />
        </div>
        <div>
          <div className="text-sm text-gray-500">Address</div>
          <div className="font-semibold">{CONTACT_DATA.address.full}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

