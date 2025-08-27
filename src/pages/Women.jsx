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

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [products] = useState([
    { id: 1, name: "Floral Summer Dress", price: 25.99, image: "https://i.pinimg.com/1200x/6e/03/f0/6e03f04c3f465b3a3055f22aa62d8963.jpg", category: "Dresses" },
    { id: 2, name: "Little Black Dress", price: 29.00, image: "https://i.pinimg.com/1200x/10/b3/9e/10b39e6d151473792d9face876cf7ee8.jpg", category: "Dresses" },
    { id: 3, name: "Maxi Dress", price: 50.00, image: "https://i.pinimg.com/736x/9e/7d/b0/9e7db0f6662776b3f25d3409ee60a9fc.jpg", category: "Dresses" },
    { id: 4, name: "Basic White Tee", price: 25.99, image: "https://i.pinimg.com/736x/7c/09/7b/7c097bac9465a5056a8b17892770f27a.jpg", category: "T-Shirts" },
    { id: 5, name: "Striped T-Shirt", price: 32.99, image: "https://i.pinimg.com/736x/ff/77/bb/ff77bb54104159804f94781b5da0e762.jpg", category: "T-Shirts" },
    { id: 6, name: "V-Neck Tee", price: 28.99, image: "https://i.pinimg.com/736x/07/7e/a1/077ea1d42a6704f59b5e9f804977bbdc.jpg", category: "T-Shirts" },
    { id: 7, name: "High-Waist Jeans", price: 85.99, image: "https://i.pinimg.com/736x/e0/85/61/e085613a49b15b7cfe1d51b13dad65dd.jpg", category: "Denim" },
    { id: 8, name: "Denim Jacket", price: 92.99, image: "https://i.pinimg.com/736x/70/bc/64/70bc648a6318fa4578a2faf6cfedcec3.jpg", category: "Denim" },
    { id: 9, name: "Skinny Jeans", price: 78.99, image: "https://i.pinimg.com/1200x/e3/81/2e/e3812e47cfd3fffb5c4c72691a9d48cd.jpg", category: "Denim" },
    { id: 10, name: "Silk Blouse", price: 65.99, image: "https://i.pinimg.com/1200x/2b/d7/9c/2bd79ca552c2d32cb8a36e0d6cd472f2.jpg", category: "Blouses" },
    { id: 11, name: "Chiffon Blouse", price: 58.99, image: "https://i.pinimg.com/1200x/b0/62/05/b0620538316b05a944b67e9dfd73f2a8.jpg", category: "Blouses" },
    { id: 12, name: "Button-Up Blouse", price: 62.99, image: "https://i.pinimg.com/236x/76/f7/84/76f784564e3668c40494879200496a2e.jpg", category: "Blouses" },
    { id: 13, name: "Elegant Heels", price: 140.99, image: "https://i.pinimg.com/1200x/2e/fa/7c/2efa7c1645e47b93d6da373483a5f345.jpg", category: "Shoes" },
    { id: 14, name: "Casual Sneakers", price: 89.99, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Shoes" },
    { id: 15, name: "Ballet Flats", price: 75.99, image: "https://i.pinimg.com/1200x/e6/80/5f/e6805fca931c72cd3b8d30057d6ac5b3.jpg", category: "Shoes" },
    { id: 16, name: "Ankle Boots", price: 120.99, image: "https://i.pinimg.com/1200x/ee/0e/39/ee0e39be88725cc2957df1b4e184d828.jpg", category: "Shoes" }
  ]);

  const categories = ['All', 'Dresses', 'T-Shirts', 'Denim', 'Blouses', 'Shoes'];
  
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
            Women's Collection
          </h1>
          <p className="text-lg text-slate-600">
            Elegant and fashionable pieces for every occasion
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

export default Women;
