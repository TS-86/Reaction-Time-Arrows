import { useNavigate } from 'react-router-dom';
import './styles.css';

function Instructions(): JSX.Element {
  const navigate = useNavigate();

  const startEasyGame = (): void => {
    navigate('/easygame');
  };

  const startHardGame = (): void => {
    navigate('/hardgame');
  };

  return (
    <div className="container">
      <h1 className="heading">Easy Mode</h1>
      <p>Press the down arrow key as soon as you see it appear on the screen.</p>
      <button onClick={startEasyGame}>Start Easy Game</button>
      <h1>Hard Mode</h1>
      <p>A left or right or down arrow will appear on the screen at random.</p>
      <p>Press the corresponding arrow key as soon as you see an arrow appear on the screen.</p>
      <button onClick={startHardGame}>Start Hard Game</button>
    </div>
  );
}

export default Instructions;