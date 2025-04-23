import React, { useEffect, useState } from 'react';
import './LoadingPage.css';
import EdelweissLogo from '../../assets/images/EdelweissLogo.png'; // Using your existing image assets
import LoadingPageBackground from '../../assets/images/LoadingPageBackground.png';

const LoadingPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0); // Added missing state
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-background">
        <img src={LoadingPageBackground} alt="LoadingPageBackground" className="LoadingPageBackground" />
      </div>
      
      <div className="loading-content">
        <div className="logo-container">
          <img src={EdelweissLogo} alt="Edelweiss Logo" className="loading-logo" />
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${loadingProgress}%` }}
          ></div>
          <span className="progress-text">{loadingProgress}%</span>
        </div>
        
        <p className="loading-message">Preparing your floral experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;