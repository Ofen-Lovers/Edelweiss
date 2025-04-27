import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';
import { Heart } from 'lucide-react';

// Import flower images
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import image1 from '../../assets/images/01.avif';
import image2 from '../../assets/images/02.webp';
import image3 from '../../assets/images/03.jpg';
import image4 from '../../assets/images/04.webp';
import image5 from '../../assets/images/05.webp';
import image6 from '../../assets/images/06.jpg';
import image7 from '../../assets/images/07.jpg';
import image8 from '../../assets/images/08.avif';
import image9 from '../../assets/images/09.webp';
import image10 from '../../assets/images/10.webp';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      image: carousel1,
      title: "Where Bloom Meet Convenience",
      buttonText: "Subscribe"
    },
    {
      image: carousel2,
      title: "Beautiful Flowers For Every Occasion",
      buttonText: "Shop Now"
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const products = [
    { id: 1, name: "Purple Orchids", price: 2500, image: image1 },
    { id: 2, name: "Pink Orchids", price: 2600, image: image2 },
    { id: 3, name: "Pink Roses", price: 1500, image: image3 },
    { id: 4, name: "Vintage Sunflower", price: 2500, image: image4 },
    { id: 5, name: "Elegant Wonder", price: 2500, image: image5 },
    { id: 6, name: "Feel the Summer", price: 2500, image: image6 },
    { id: 7, name: "Light Brown", price: 2500, image: image7 },
    { id: 8, name: "100 Pieces Red Rose", price: 2500, image: image8 },
    { id: 9, name: "Pink Crochet Mix", price: 600, image: image9 },
    { id: 10, name: "Cute Light Brown Bear", price: 700, image: image10 },
    { id: 11, name: "Elegant Pink Roses", price: 2500, image: image3 },
    { id: 12, name: "Crochet Calla Lily", price: 2500, image: image9 }
  ];

  return (
    <div className="landing-page">
      <NavigationBar />
      <div className="main-content-wrapper">
        <div className="carousel-container">
          <div className="carousel-slide" style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}>
            <div className="carousel-content">
              <h1>{carouselSlides[currentSlide].title}</h1>
              <button className="carousel-button">{carouselSlides[currentSlide].buttonText}</button>
            </div>
          </div>
          
          <div className="carousel-dots">
            {carouselSlides.map((_, index) => (
              <button 
                key={index} 
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="products-section">
          <div className="section-header">
            <h2>Top Picks</h2>
            <a href="#" className="see-more">See More</a>
          </div>
          
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <button className="favorite-button">
                    <Heart size={20} color="#fff" />
                  </button>
                </div>
                <div className="product-info">
                  <div className="product-price">₱{product.price.toLocaleString()}</div>
                  <div className="product-name">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;