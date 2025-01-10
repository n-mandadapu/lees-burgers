import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="tel:+1234567890" className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="text-red-600" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">269-365-0055</p>
              </div>
            </a>
            
            <a href="mailto:Leesburgersandmalts@gmail.com" className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="text-red-600" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">Leesburgersandmalts@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/leesburgersandmalts/" className="text-gray-600 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61569795609726" className="text-gray-600 hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;