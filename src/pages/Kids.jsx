import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const Button = ({ onClick, className, children }) => (
  <button 
    onClick={onClick} 
    className={`bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors ${className}`}
  >
    {children}
  </button>
);

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [products] = useState([
    { id: 1, name: "Rainbow T-Shirt", price: 15.99, image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800", category: "T-Shirts" },
    { id: 2, name: "Unicorn Graphic Tee", price: 18.99, image: "https://i.pinimg.com/1200x/8c/98/78/8c98786e961cd83da380ef01db4df93f.jpg", category: "T-Shirts" },
    { id: 3, name: "Dinosaur Print Tee", price: 16.99, image: "https://i.pinimg.com/1200x/1c/8b/a4/1c8ba4421371936084cec2d33a0eaaf4.jpg", category: "T-Shirts" },
    { id: 4, name: "Princess Dress", price: 35.99, image: "https://i.pinimg.com/1200x/94/39/17/943917e81740a89d46818ee960ae70e9.jpg", category: "Dresses" },
    { id: 5, name: "Flower Girl Dress", price: 42.99, image: "https://i.pinimg.com/736x/2d/70/b6/2d70b6342beab00e0b88e11650ff6a3b.jpg", category: "Dresses" },
    { id: 6, name: "Summer Sundress", price: 28.99, image: "https://i.pinimg.com/736x/7b/62/56/7b6256deb494606757455d9031b7f8af.jpg", category: "Dresses" },
    { id: 7, name: "Denim Overalls", price: 45.99, image: "https://i.pinimg.com/736x/b8/72/1a/b8721a4622b28524e3753e78880714aa.jpg", category: "Overalls" },
    { id: 8, name: "Striped Overalls", price: 38.99, image: "https://i.pinimg.com/1200x/10/4d/e3/104de351cf0feafb92d0aed92c53a394.jpg", category: "Overalls" },
    { id: 9, name: "Superhero Hoodie", price: 32.99, image: "https://i.pinimg.com/1200x/9e/0c/68/9e0c681ada5809badc4719f10e200398.jpg", category: "Hoodies" },
    { id: 10, name: "Cozy Bear Hoodie", price: 29.99, image: "https://i.pinimg.com/1200x/94/b6/69/94b6692be7672bec1a53edb3662dfd1d.jpg", category: "Hoodies" },
    { id: 11, name: "Space Explorer Hoodie", price: 34.99, image: "https://i.pinimg.com/1200x/e1/35/76/e135764405593b374717fa1b6b2b9724.jpg", category: "Hoodies" },
    { id: 12, name: "Colorful Sneakers", price: 55.99, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Shoes" },
    { id: 13, name: "Light-up Sneakers", price: 62.99, image: "https://i.pinimg.com/1200x/d8/0a/8b/d80a8b483332f036962e50ba7fd39e8b.jpg", category: "Shoes" },
    { id: 14, name: "Canvas Shoes", price: 48.99, image: "https://i.pinimg.com/736x/40/07/e5/4007e5251ed2c99a2463f9a48928d3c3.jpg", category: "Shoes" },
    { id: 15, name: "Cargo Shorts", price: 24.99, image: "https://i.pinimg.com/736x/36/96/4d/36964d45f9152c15c47d7d25184e68eb.jpg", category: "Shorts" },
    { id: 16, name: "Swim Shorts", price: 22.99, image: "https://i.pinimg.com/736x/db/a5/55/dba5555a224064b9e8deb5e408c63a1b.jpg", category: "Shorts" }
  ]);

  const categories = ['All', 'T-Shirts', 'Dresses', 'Hoodies', 'Overalls', 'Shoes', 'Shorts'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="w-full px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Kids' Collection
          </h1>
          <p className="text-lg text-slate-600">
            Fun and comfortable clothing for little adventurers
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="w-full px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-orange-100 hover:text-orange-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                      className="w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-200">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-200">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-orange-500 font-medium">{product.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-800">
                    ${product.price}
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;