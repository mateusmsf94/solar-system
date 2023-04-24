import React, { Component } from "react";
import planets from "../data/planets";
import Planet from "./Planet";

class SolarSystem extends Component {
  render() {
    return (
      <div className="mt-24">
        <h2 className="text-center text-slate-50 text-3xl font-semibold mb-5">Planetas</h2>
        <div
          className="solar-system flex"
          data-testid="solar-system"
        >
          {planets.map((planet) => (
            <Planet
              planetClass={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
              key={planet.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
