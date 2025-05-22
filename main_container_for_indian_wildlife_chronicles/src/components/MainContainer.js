import React from 'react';
import FeaturedWildlife from './FeaturedWildlife';
import ConservationEfforts from './ConservationEfforts';
import WildlifeList from './WildlifeList';
import './MainContainer.css';

/**
 * PUBLIC_INTERFACE
 * Main container component for Indian Wildlife Chronicles
 * Serves as the primary structure for the comprehensive wildlife blog
 */
const MainContainer = () => {
  return (
    <div className="wildlife-container">
      <header className="wildlife-header">
        <div className="container">
          <h1>Indian Wildlife Chronicles</h1>
          <p className="tagline">Exploring India's Magnificent Biodiversity</p>
        </div>
      </header>

      <section className="wildlife-intro">
        <div className="container">
          <h2>Discover India's Rich Wildlife</h2>
          <p>
            India is home to an incredible array of wildlife, from the majestic Bengal tiger 
            to the endangered Indian elephant. Our diverse ecosystems support approximately 
            8% of all recorded species, making India one of the 17 mega-diverse countries in the world.
          </p>
          <p>
            Explore our chronicles to learn about these fascinating creatures, their habitats,
            and the conservation efforts aimed at protecting them for generations to come.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Wildlife</h2>
          <FeaturedWildlife />
        </div>
      </section>

      <section className="wildlife-list-section">
        <div className="container">
          <h2 className="section-title">Explore Wildlife Species</h2>
          <WildlifeList />
        </div>
      </section>

      <section className="conservation-section">
        <div className="container">
          <h2 className="section-title">Conservation Efforts</h2>
          <ConservationEfforts />
        </div>
      </section>

      <section className="wildlife-facts">
        <div className="container">
          <h2 className="section-title">Quick Facts</h2>
          <div className="facts-container">
            <div className="fact-card">
              <div className="fact-number">104</div>
              <div className="fact-text">National Parks</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">553</div>
              <div className="fact-text">Wildlife Sanctuaries</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">18</div>
              <div className="fact-text">Biosphere Reserves</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">50+</div>
              <div className="fact-text">Tiger Reserves</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="wildlife-footer">
        <div className="container">
          <p>© 2023 Indian Wildlife Chronicles - Preserving India's Natural Heritage</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contribute">Contribute</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContainer;
