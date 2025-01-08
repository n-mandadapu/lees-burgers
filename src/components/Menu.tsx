import { FileText } from 'lucide-react';

const menuItems = [
  {
    name: "Classic Burgers",
    price: "$8.99",
    description: "100% Angus beef patty with lettuce, tomato, onions, and our special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80"
  },
  {
    name: "Juicy Wings",
    price: "$9.99",
    description: "Crispy chicken wings tossed in your choice of sauce",
    image: "https://github.com/n-mandadapu/lees-burgers/blob/main/src/images/wings.jpg?auto=format&fit=crop&q=80"
  },
  {
    name: "Milkshakes",
    price: "$4.99",
    description: "Hand-spun milkshakes made with real ice cream",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80"
  },
];



const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span><p className="text-gray-500 text-sm">Starting from {item.price}</p></span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/n-mandadapu/lees-burgers/blob/main/src/menu.pdf"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <FileText size={20} />
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;