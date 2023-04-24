import React from "react";
import PropTypes from 'prop-types'

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="border border-gray-300 p-4 rounded-md bg-white"
      >
        <p data-testid="mission-name" className="font-bold text-xl mb-2 text-gray-600">
          {name}
        </p>
        <div className="flex flex-col space-y-1">
          <p data-testid="mission-year" className="text-gray-600">
            Year: {year}
          </p>
          <p data-testid="mission-country" className="text-gray-600">
            Country: {country}
          </p>
          <p data-testid="mission-destination" className="text-gray-600">
            Destination: {destination}
          </p>
        </div>
      </div>
    );
  }
}

export default MissionCard

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
}