import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions-div">
        <Title headline="Missões" />
        <div className="missions-container">
          { missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (<MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
          }) }
        </div>
      </div>
    );
  }
}

export default Missions;
