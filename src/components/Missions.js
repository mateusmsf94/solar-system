import React from "react";
import missions from "../data/missions";
import MissionCard from "./MissionCard";

class Missons extends React.Component {
  render() {
    return (
      <div className="text-slate-50 bg-gray-700 max-w-3xl mx-auto py-8 p-4 rounded-3xl mt-8" data-testid="missions">
        <h2 className="text-3xl font-semibold text-center mb-6">Missões</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.map((mission) => (
            <MissionCard
              key={mission.name}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missons;
