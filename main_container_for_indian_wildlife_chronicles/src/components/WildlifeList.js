import React, { useState } from 'react';
import { wildlifeSpecies } from '../data/wildlifeData';
import './WildlifeList.css';

/**
 * PUBLIC_INTERFACE
 * Component to display a list/grid of wildlife species
 */
const WildlifeList = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredSpecies = filter === 'all' 
    ? wildlifeSpecies 
    : wildlifeSpecies.filter(animal => 
        animal.category.toLowerCase() === filter.toLowerCase()
      );
  
  return (
    <div className="wildlife-list-container">
      <div className="filter-controls">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Species
        </button>
        <button 
          className={`filter-btn ${filter === 'mammal' ? 'active' : ''}`}
          onClick={() => setFilter('mammal')}
        >
          Mammals
        </button>
        <button 
          className={`filter-btn ${filter === 'bird' ? 'active' : ''}`}
          onClick={() => setFilter('bird')}
        >
          Birds
        </button>
        <button 
          className={`filter-btn ${filter === 'reptile' ? 'active' : ''}`}
          onClick={() => setFilter('reptile')}
        >
          Reptiles
        </button>
      </div>
      
      <div className="wildlife-grid">
        {filteredSpecies.map((animal, index) => (
          <div key={index} className="wildlife-card">
            <div className="wildlife-image">
              <img src={animal.imageUrl} alt={animal.name} />
            </div>
            <div className="wildlife-card-content">
              <h3>{animal.name}</h3>
              <p className="scientific-name">{animal.scientificName}</p>
              <div className="wildlife-tags">
                <span className="category-tag">{animal.category}</span>
                <span className="status-tag" data-status={animal.conservationStatus.toLowerCase()}>
                  {animal.conservationStatus}
                </span>
              </div>
              <p className="wildlife-short-desc">{animal.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="wildlife-pagination">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
};

export default WildlifeList;
