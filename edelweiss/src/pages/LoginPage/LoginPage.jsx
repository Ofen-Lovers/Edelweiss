import React from 'react';
import './LoginPage.css';
import EdelweissLogo from '../../assets/images/EdelweissLogo.png';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left side - Logo and tagline */}
        <div className="login-branding">
          <img src={EdelweissLogo} alt="Edelweiss Logo" className="login-logo" />
          <p className="tagline">Where Bloom Meets Convenience</p>
        </div>

        {/* Right side - Login form */}
        <div className="login-form">
          <h2 className="welcome-text">Welcome back!</h2>
          <p className="login-prompt">Login to your Edelweiss account</p>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="Enter your password"
              />
              <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="social-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-button google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path 
                    d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button type="button" className="social-button facebook-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path 
                    d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848
                    c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588
                    l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>


            <p className="signup-prompt">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;