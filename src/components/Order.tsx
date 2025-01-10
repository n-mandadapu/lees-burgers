import { ShoppingBag } from 'lucide-react';

const Order = () => {
  return (
    <section id="order" className="py-20 bg-red-600">
      <div className="container mx-auto px-4 text-center text-white">
        <ShoppingBag size={48} className="mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Skip the line and order your favorite burgers online for pickup or delivery!
        </p>
        <a href="http://toasttab.com/lees-hamburgers-and-malts-5234-portage-rd" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Order
          </button>
        </a>
      </div>
    </section>
  );
};

export default Order;