import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import image0 from './image0.png';
import image3 from './image3.png';

function EasyGame(): JSX.Element {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentImage, setCurrentImage] = useState<string>(image0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImage(image3);
      setStartTime(Date.now());
    }, Math.floor(Math.random() * 4001 + 1000));

    return () => {
      clearTimeout(timeoutId);
    };
  }, [reactionTimes]);

  useEffect(() => {
    if (reactionTimes.length === 5) {
      navigate("/results", { state: { reactionTimes } });
    }
  }, [reactionTimes, navigate]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.keyCode === 40 && startTime !== null) {
        const reactionTime: number = new Date().getTime() - startTime;
        setReactionTimes([...reactionTimes, reactionTime]);
        setCurrentImage(image0);
        setStartTime(null);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startTime, reactionTimes]);

  return (
    <div className="game-container">
      <div className="image-wrapper">
        <img src={currentImage} alt="game" className="image" />
        <p>Press the down arrow key as soon as you see it appear on the screen.</p>
      </div>
    </div>
  );
}

export default EasyGame;