import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h2 data-testid="mission-name">{ name }</h2>
        <h2 data-testid="mission-year">{ year }</h2>
        <h2 data-testid="mission-country">{ country }</h2>
        <h2 data-testid="mission-destination">{ destination }</h2>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
