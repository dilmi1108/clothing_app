import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ImageSlider from '../components/ImageSlider';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50'
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-orange-500" />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: 'Quality Guarantee',
      description: 'Premium quality materials'
    }
  ];

  const collections = [
    {
      title: "Men's Collection",
      image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/men"
    },
    {
      title: "Women's Collection",
      image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/women"
    },
    {
      title: "Kids' Collection",
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/kids"
    }
  ];

  return (
    <div>
      {/* Hero Slider Section */}
      <ImageSlider />

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Shop by Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Find the perfect style for every member of your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <div className="flex items-center">
                    <span className="group-hover:mr-2 transition-all duration-200">Shop Now</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in Style
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, style tips, and the latest fashion trends.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;