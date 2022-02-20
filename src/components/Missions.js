import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions-div">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
