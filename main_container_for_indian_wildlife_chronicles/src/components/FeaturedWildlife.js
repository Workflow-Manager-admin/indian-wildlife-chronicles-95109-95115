import React from 'react';
import { featuredWildlife } from '../data/wildlifeData';
import './FeaturedWildlife.css';

/**
 * PUBLIC_INTERFACE
 * Component to showcase featured wildlife species
 */
const FeaturedWildlife = () => {
  return (
    <div className="featured-wildlife">
      {featuredWildlife.map((animal, index) => (
        <div key={index} className="featured-card">
          <div className="featured-image">
            <img src={animal.imageUrl} alt={animal.name} />
            <div className="conservation-status" data-status={animal.conservationStatus.toLowerCase()}>
              {animal.conservationStatus}
            </div>
          </div>
          <div className="featured-content">
            <h3>{animal.name}</h3>
            <p className="scientific-name">{animal.scientificName}</p>
            <p className="featured-description">{animal.description}</p>
            <div className="animal-details">
              <div className="detail-item">
                <span className="detail-label">Habitat:</span>
                <span className="detail-value">{animal.habitat}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Found In:</span>
                <span className="detail-value">{animal.foundIn.join(', ')}</span>
              </div>
            </div>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWildlife;
