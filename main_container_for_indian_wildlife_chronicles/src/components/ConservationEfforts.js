import React from 'react';
import { conservationPrograms } from '../data/wildlifeData';
import './ConservationEfforts.css';

/**
 * PUBLIC_INTERFACE
 * Component to display conservation efforts and programs
 */
const ConservationEfforts = () => {
  return (
    <div className="conservation-efforts">
      <div className="conservation-intro">
        <p>
          India has established numerous conservation initiatives to protect its 
          rich biodiversity. From Project Tiger to the Indian Rhino Vision 2020,
          these programs aim to safeguard endangered species and their habitats.
        </p>
      </div>
      
      <div className="conservation-programs">
        {conservationPrograms.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-icon">
              <img src={program.iconUrl} alt={program.name} />
            </div>
            <div className="program-content">
              <h3>{program.name}</h3>
              <p className="program-year">Established: {program.established}</p>
              <p className="program-description">{program.description}</p>
              <div className="program-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {program.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="conservation-cta">
        <h3>Support Wildlife Conservation</h3>
        <p>Join us in preserving India's natural heritage for future generations</p>
        <button className="btn get-involved">Get Involved</button>
      </div>
    </div>
  );
};

export default ConservationEfforts;
