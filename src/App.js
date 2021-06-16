import './App.css';
import ParticleBackground from './ParticleBackground';

const App = () => {
  return (
    <div color='#00077'>
    <ParticleBackground />
    <ScreenText />
    </div>
  );
}

const ScreenText = () => {
  return (
    <div id="text_div center_all">
      <div className="center_all">
      <h1> Romans Website</h1>
      </div>
    </div>
  );
}

export default App;
