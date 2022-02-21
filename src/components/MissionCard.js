import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination, image } = this.props;
    const bgColors = ['rgb(245, 109, 129)', 'rgb(91, 58, 85)', 'rgb(105, 64, 141)',
      'rgb(117, 192, 113)', 'rgb(0, 129, 175)'];
    const randIndex = (Math.floor(Math.random() * bgColors.length));
    const randomColor = () => bgColors[randIndex];
    const titleStyle = {
      backgroundColor: randomColor(),
    };
    return (
      <div data-testid="mission-card" className="mission">
        <div className="mission-header">
          <img src={ image } className="mission-header" alt={ name } />
        </div>
        <div className="mission-body">
          <p
            data-testid="mission-name"
            className="mission-title"
            style={ titleStyle }
          >
            { name }
          </p>
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MissionCard;
