import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import Button from '../components/Button';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [products] = useState([
    { id: 1, name: "Classic Denim Jacket", price: 89.99, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Jackets" },
    { id: 2, name: "Cotton Polo Shirt", price: 45.99, image: "https://i.pinimg.com/736x/fc/bb/61/fcbb61f5d29a3db9da071cc20127f4c7.jpg", category: "Shirts" },
    { id: 3, name: "Slim Fit Chinos", price: 65.99, image: "https://i.pinimg.com/1200x/3d/2c/66/3d2c668279b523cdf50924fade3e30d1.jpg", category: "Pants" },
    { id: 4, name: "T-Shirt", price: 49.99, image: "https://i.pinimg.com/736x/18/f9/27/18f9270ed816f3c3f0b367ba51df5722.jpg", category: "Shirts" },
    { id: 5, name: "Wool Sweater", price: 75.99, image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800", category: "hoodie" },
    { id: 6, name: "Oxford Dress Shirt", price: 55.99, image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Shirts" },
    { id: 7, name: "Shirt", price: 55.99, image: "https://i.pinimg.com/1200x/cb/4b/32/cb4b326acc9b28c8ea5fa6b072143417.jpg", category: "Shirts" },
    { id: 8, name: "Oversized Branded Colour Block Hoodet", price: 39.99, image: "https://i.pinimg.com/736x/3d/7e/3a/3d7e3a8b78dc45591a505675b98209fe.jpg", category: "hoodie" },
    { id: 9, name: "Graphic T-Shirt", price: 29.99, image: "https://i.pinimg.com/1200x/6b/9d/cc/6b9dcc94aeaa18f17fc5f71e6e39437d.jpg", category: "Shirts" },
    { id: 10, name: "Tailored Suit", price: 299.99, image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Suits" },
    { id: 11, name: "Cargo Pants", price: 70.99, image: "https://i.pinimg.com/1200x/b0/f3/f8/b0f3f872604cbf9ca2526688ef4a491d.jpg", category: "Pants" },
    { id: 12, name: "Casual Sneakers", price: 120.99, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Shoes" },
    { id: 13, name: "Casual hoodie", price: 120.99, image: "https://i.pinimg.com/736x/db/92/01/db9201c865f0fe24d29824bb51489d60.jpg", category: "hoodie" },
    { id: 14, name: "Leather Shoes", price: 180.99, image: "https://i.pinimg.com/736x/c6/c3/fe/c6c3fee84c4cd95144123803c8c9f3d6.jpg", category: "Shoes" },
    { id: 15, name: "Casual Shoes", price: 65.99, image: "https://i.pinimg.com/1200x/8d/37/2f/8d372f11c7378dea155499b9d6fcbb51.jpg", category: "Shoes" },
    
    { id: 16, name: "Leather Boots", price: 150.99, image: "https://i.pinimg.com/1200x/68/3f/91/683f915fb57696c15030751f3a7f112d.jpg", category: "Shoes" }
  ]);

  const categories = ['All', 'Jackets', 'Shirts', 'Pants', 'Shoes', 'hoodie'];

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
            Men's Collection
          </h1>
          <p className="text-lg text-slate-600">
            Discover stylish and comfortable clothing for the modern man
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

export default Men;
