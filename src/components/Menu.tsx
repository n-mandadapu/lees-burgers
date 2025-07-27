import { useState, useRef, useMemo } from "react";
import { FileText, ArrowLeft, ArrowRight } from 'lucide-react';

// ASSET IMPORTS (assuming these paths are correct)
import menuPdf from '../pdf/menu.pdf';
import burgerImg from '../images/cheese-burger.jpg';
import doubleBurgerImg from '../images/double-cheese-burger.jpg';
import baconDoubleImg from '../images/bacon-burger.jpg';
import oliveDoubleImg from '../images/olive-burger.jpg';
import mushroomDoubleImg from '../images/mushroom-burger.jpg';
import chickenSandwichImg from '../images/chicken-sandwitch.jpg';

// --- DATA ---
const menuItems = [
  { id: 1, name: "Lee’s Cheese Burger", price: "$8.99", description: "A classic cheeseburger with lettuce, tomato, and our special sauce. Comes with fries and a drink.", image: burgerImg },
  { id: 2, name: "Lee’s Double Cheeseburger", price: "$10.99", description: "Double the cheese, double the flavor! A hearty double cheeseburger with all the fixings.", image: doubleBurgerImg },
  { id: 3, name: "Lee’s Bacon Double", price: "$12.99", description: "A double cheeseburger topped with crispy bacon and our special sauce. Comes with fries and a drink.", image: baconDoubleImg },
  { id: 4, name: "Lee’s Olive Double", price: "$12.99", description: "A unique twist with olives on a double cheeseburger with Mayonnaise. Comes with fries and a drink.", image: oliveDoubleImg },
  { id: 5, name: "Lee’s Mushroom Double", price: "$12.99", description: "Savory mushrooms on a double cheeseburger with Mayonnaise. Comes with fries and a drink.", image: mushroomDoubleImg },
  { id: 6, name: "Lee’s Chicken Sandwich", price: "$9.99", description: "Crispy chicken sandwich with lettuce, tomato, and onion. Comes with fries and a drink.", image: chickenSandwichImg }
];


// --- REUSABLE CARD SUB-COMPONENT (within the same file) ---
type MenuItem = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};

type MenuItemCardProps = {
  item: MenuItem;
  isActive: boolean;
};

const MenuItemCard = ({ item, isActive }: MenuItemCardProps) => {
  const cardClasses = `
    w-72 flex-shrink-0 rounded-2xl bg-white transform transition-all duration-500 ease-out overflow-hidden
    ${isActive
      ? 'scale-105 z-10 border-4 border-red-500 shadow-2xl'
      : 'scale-90 opacity-60'
    }
  `;

  return (
    <div className={cardClasses}>
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          <p className="text-red-600 font-semibold text-lg">{item.price}</p>
        </div>
        <p className="text-sm text-gray-600 h-16">{item.description}</p>
      </div>
    </div>
  );
};


// --- MAIN MENU COMPONENT ---
const Menu = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;
  const totalItems = menuItems.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % totalItems);
  };

  const handleSwipeStart = (x: number) => {
    startX.current = x;
  };

  const handleSwipeEnd = (x: number) => {
    if (startX.current === null) return;
    const deltaX = x - startX.current;
    if (deltaX > SWIPE_THRESHOLD) {
      handlePrev();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      handleNext();
    }
    startX.current = null;
  };
  
  // Add keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };
  
  // Memoize the items to display to prevent recalculation on every render
  const itemsToDisplay = useMemo(() => {
    return [-1, 0, 1].map((offset) => {
      const index = (current + offset + totalItems) % totalItems;
      return menuItems[index];
    });
  }, [current, totalItems]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 tracking-tight">Discover Our Menu</h2>
          <p className="mt-3 text-lg text-gray-500">Crafted with passion from the freshest ingredients.</p>
        </div>
        
        {/* Screen reader announcement for accessibility */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing item {current + 1} of {totalItems}: {menuItems[current].name}
        </div>

        <div 
          className="relative"
          onKeyDown={handleKeyDown}
          tabIndex={0} // Makes the div focusable for keyboard events
          role="region"
          aria-label="Menu carousel"
        >
          <button
            onClick={handlePrev}
            aria-label="Previous menu item"
            className="absolute left-0 -translate-x-4 md:-translate-x-8 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-red-50 text-red-600 rounded-full p-3 z-20 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="flex justify-center items-center gap-4 md:gap-8 px-6 cursor-grab"
            onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleSwipeStart(e.clientX)}
            onMouseUp={(e) => handleSwipeEnd(e.clientX)}
            onMouseLeave={() => startX.current = null} // Reset if mouse leaves area
          >
            {itemsToDisplay.map((item, index) => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                isActive={index === 1} // The center item (at offset 0) is always the active one
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next menu item"
            className="absolute right-0 translate-x-4 md:translate-x-8 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-red-50 text-red-600 rounded-full p-3 z-20 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="text-center mt-16">
          <a
            href={menuPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-300/50 transform hover:scale-105"
          >
            <FileText size={20} />
            View Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;