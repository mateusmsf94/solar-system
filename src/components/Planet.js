import React from "react";
import PropTypes from 'prop-types';

class Planet extends React.Component {
  render() {
    const {planetName, planetImage} = this.props;
    return (
      <div className= "" data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="w-96 " />
        <p className="text-slate-50 text-center" data-testid="planet-name">{planetName}</p>
      </div>
    )
  }
}

export default Planet;

Planet.defaultProps = {
  planetClass: '',
};

Planet.propTypes = {
  planetClass: PropTypes.string,
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};