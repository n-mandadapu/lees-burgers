import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  const hours = [
    { day: 'Monday - Thursday', time: '11:00 AM - 9:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 8:00 PM' }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Find Us</h2>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <MapPin className="text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">Our Location</h3>
              </div>
              <p className="text-gray-600">
                123 Burger Street<br />
                Foodville, FD 12345
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Clock className="text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71774937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBurger%20Joint!5e0!3m2!1sen!2sus!4v1628090679254!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;