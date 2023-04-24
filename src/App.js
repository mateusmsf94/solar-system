import Header from './components/Header';
import Missons from './components/Missions';
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <Header />
      <SolarSystem />
      <Missons />
    </div>
  );
}

export default App;
