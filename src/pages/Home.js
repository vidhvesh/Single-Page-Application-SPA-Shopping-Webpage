import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Our Online Store</h1>
            <p>Discover amazing products at unbeatable prices. Shop the latest trends and elevate your lifestyle.</p>
            <Link to="/shop" className="cta-button">Shop Now</Link>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/736x/5f/a4/ef/5fa4efe5959da0b65124d05b312cb6eb.jpg" alt="Fashionable Products" />
          </div>
        </div>
      </section>

      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://i.pinimg.com/736x/15/97/d4/1597d443190fcec4ae210a88ba970736.jpg" alt="Product 1" />
            <h3>Blue Backpack</h3>
            <p>$19.99</p>
            <Link to="/product/1" className="view-details">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://i.pinimg.com/736x/16/3a/0f/163a0ff24b7dbe32dd38a571c025444a.jpg" alt="Product 2" />
            <h3>Men Casual Fit T-shirt</h3>
            <p>$29.99</p>
            <Link to="/product/2" className="view-details">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://i.pinimg.com/736x/f8/0b/66/f80b6640b2b980e99d9d4c60274c620c.jpg" alt="Product 3" />
            <h3>Mens Cotton Jacket</h3>
            <p>$39.99</p>
            <Link to="/product/3" className="view-details">View Details</Link>
          </div>
        </div>
      </section>


      <section className="cta-section">
        <h2>Join Our Newsletter</h2>
        <p>Get exclusive discounts and updates straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;