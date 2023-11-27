import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instructions from './Instructions';
import EasyGame from './EasyGame';
import HardGame from './HardGame';
import Results from './Results';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/easygame" element={<EasyGame />} />
        <Route path="/hardgame" element={<HardGame />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;