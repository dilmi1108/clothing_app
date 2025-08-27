# StyleHub - React E-commerce Clothing Website

A modern, responsive e-commerce clothing website built with React.js, JavaScript, and Tailwind CSS. Features a complete shopping cart system, image carousel, and beautiful animations optimized for Sri Lankan market.

![StyleHub Preview](https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## 🚀 Features

### 🛒 **Shopping Cart System**
- **Dynamic Cart Badge**: Real-time item count display in navbar
- **Cart Management**: Add, remove, and update item quantities
- **Size Selection**: Choose from available sizes for each product
- **Persistent State**: Cart state maintained across page navigation
- **Order Summary**: Detailed breakdown with subtotal, shipping, and tax

### 🎠 **Image Carousel & Animations**
- **Smooth Transitions**: Fade-in/fade-out slider animations
- **Auto-advance**: Automatic slide progression every 5 seconds
- **Navigation Controls**: Previous/next buttons and dot indicators
- **Hover Effects**: Product cards with scale and shadow animations
- **Page Transitions**: Smooth scroll-to-top on navigation
- **Micro-interactions**: Button hover states and loading animations

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large tap targets for mobile users
- **Hamburger Menu**: Collapsible navigation for mobile
- **Grid Layouts**: Responsive product grids
- **Flexible Typography**: Scalable text across devices

### 🎨 **Modern UI/UX**
- **Clean Design**: Minimal and professional aesthetic
- **Color Scheme**: Orange accent with neutral grays
- **Typography**: Readable fonts with proper hierarchy
- **Shadows & Depth**: Subtle elevation effects
- **Loading States**: Smooth transitions and feedback

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API + useReducer
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/dilmi1108/stylehub-clothingapp.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Footer.jsx      # Site footer
│   ├── ImageSlider.jsx # Homepage carousel
│   ├── Navbar.jsx      # Navigation header
│   └── ProductCard.jsx # Product display card
├── context/            # React Context providers
│   └── CartContext.jsx # Shopping cart state management
├── pages/              # Route components
│   ├── Cart.jsx        # Shopping cart page
│   ├── SignIn.jsx      # SignIn page
│   ├── SignUp.jsx      # SignUp page
│   ├── Home.jsx        # Homepage
│   ├── Kids.jsx        # Kids collection
│   ├── Men.jsx         # Men's collection
│   └── Women.jsx       # Women's collection
├── utils/              # Utility functions
│   └── formatPrice.ts  # Currency and formatting utilities
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Key Components

### CartContext
Global state management for shopping cart functionality:
- Add items to cart
- Update quantities
- Remove items
- Calculate totals
- Persist cart state

### ImageSlider
Homepage carousel with:
- Smooth fade transitions
- Auto-advance functionality
- Navigation controls
- Responsive design

### ProductCard
Reusable product display with:
- Image hover effects
- Size selection dropdown
- Add to cart functionality
- Price formatting

### Format Utilities
Comprehensive formatting functions:
- Currency formatting (Rs.)
- Number formatting
- Date/time formatting
- Phone number formatting
- Text truncation

## 🎨 Animations & Interactions

### **Hover Effects**
- Product cards scale up on hover
- Buttons lift with shadow effects
- Navigation links color transitions
- Image zoom effects

### **Page Transitions**
- Smooth scroll to top on navigation
- Fade-in animations for content
- Loading state transitions

### **Micro-interactions**
- Cart badge bounce animation
- Button press feedback
- Form input focus states
- Dropdown animations

### **Carousel Animations**
- Smooth fade transitions between slides
- Auto-advance with pause on hover
- Dot indicator animations
- Arrow button hover effects

## 🛒 Shopping Cart Features

### **Cart Management**
```javascript
// Add item to cart
const addItem = (item: CartItem) => {
  // Handles size selection and quantity
};

// Update quantity
const updateQuantity = (id: number, quantity: number) => {
  // Updates item quantity or removes if 0
};

// Remove item
const removeItem = (id: number) => {
  // Removes item from cart
};
```

### **Price Calculations**
- Subtotal calculation
- Shipping logic (free over Rs. 5,000)
- Tax calculation (8%)
- Total price computation

## 💱 Currency Formatting

### **Sri Lankan Rupee Support**
```typescript
// Format price in Rs.
formatPrice(8999) // "Rs. 8,999.00"

// Format with locale
price.toLocaleString('en-LK', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Mobile Optimizations**
- Hamburger menu navigation
- Touch-friendly buttons
- Optimized image sizes
- Simplified layouts

## 🎯 Performance Optimizations

- **Image Optimization**: Compressed images from Pexels
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Efficient Re-renders**: Optimized React Context usage

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Netlify/Vercel**
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 🔧 Configuration

### **Tailwind CSS**
Custom configuration in `tailwind.config.js`:
- Custom colors
- Extended spacing
- Custom animations

### **TypeScript**
Strict type checking enabled:
- Interface definitions
- Type-safe props
- Utility type helpers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: [Pexels](https://pexels.com) for high-quality stock photos
- **Icons**: [Lucide React](https://lucide.dev) for beautiful icons
- **Styling**: [Tailwind CSS](https://tailwindcss.com) for utility-first CSS

## 📞 Support

For support, email support@stylehub.lk or join our Slack channel.

---

**Made with ❤️ for the Sri Lankan fashion market**

*StyleHub - Where Style Meets Convenience*
