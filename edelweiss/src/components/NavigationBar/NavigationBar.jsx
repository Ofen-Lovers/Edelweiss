import { useState } from 'react';
import './NavigationBar.css';
import EdelweissLogo from '../../assets/images/EdelweissLogo2.png';
import { Search, MapPin, ShoppingBag, Heart, User } from 'lucide-react';

const NavigationBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <div className="navbar-container">
      <div className="navbar-upper">
        <div className="logo-container">
          <img src={EdelweissLogo} alt="Edelweiss Logo" className="logo" />
        </div>
        
        <div className="search-container">
          <div className="category-selector">
            {selectedCategory}
          </div>
          <input 
            type="text" 
            placeholder="What you're looking for?" 
            className="search-input"
          />
          <button className="search-button">
            <Search size={18} />
          </button>
        </div>
        
        <div className="action-buttons">
          <button className="action-button">
            <MapPin size={20} />
            <span>Your Location</span>
          </button>
          
          <button className="action-button">
            <Heart size={20} />
            <span>Favorite</span>
          </button>
          
          <button className="action-button">
            <ShoppingBag size={20} />
            <span>Cart</span>
          </button>
          
          <button className="action-button">
            <User size={20} />
            <span>Account</span>
          </button>
        </div>
      </div>
      
      <div className="navbar-lower">
        <div className="dropdown-container">
          <button className="browse-button">
            Browse All Category
          </button>
        </div>
        
        <div className="nav-links">
          <button className="nav-link promo">
            Promo
          </button>
          
          <button className="nav-link home">
            Home
          </button>
          
          <button className="nav-link shop">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;