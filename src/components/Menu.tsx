import { FileText } from 'lucide-react';
import wings from '../images/wings.jpg';
import malts from '../images/malts.jpg';
import menuPdf from '../pdf/menu.pdf';

const menuItems = [
  {
    name: "Double Cheese Burger",
    price: "$9.99",
    description: "Two 4oz patties, American cheese, lettuce, tomato, onion, pickles, and house special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80"
  },
  {
    name: "Spicy Wings of Fire",
    price: "5pc - $8.99 or 10pc - $13.99",
    description: "Served with fries or tots and soda",
    image: wings
  },
  {
    name: "Malts",
    price: "$5.50",  
    description: "Vanilla, Chocolate, or Strawberry",
    image: malts
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
                  <span><p className="text-gray-500 text-sm"><strong>{item.price}</strong> </p></span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={menuPdf} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <FileText size={20} />
            Veiw Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;