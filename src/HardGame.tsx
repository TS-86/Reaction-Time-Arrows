import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import image0 from './image0.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

function HardGame(): JSX.Element {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentImage, setCurrentImage] = useState<string>(image0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const images = [image1, image2, image3];
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
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
      if (startTime !== null) {
        const reactionTime: number = new Date().getTime() - startTime;
        switch (currentImage) {
          case image1:
            if (event.keyCode === 39) {
              setReactionTimes([...reactionTimes, reactionTime]);
              setCurrentImage(image0);
              setStartTime(null);
            }
            break;
          case image2:
            if (event.keyCode === 37) {
              setReactionTimes([...reactionTimes, reactionTime]);
              setCurrentImage(image0);
              setStartTime(null);
            }
            break;
          case image3:
            if (event.keyCode === 40) {
              setReactionTimes([...reactionTimes, reactionTime]);
              setCurrentImage(image0);
              setStartTime(null);
            }
            break;
          default:
            break;
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startTime, reactionTimes, currentImage]);

  return (
    <div className="game-container">
      <div className="image-wrapper">
        <img src={currentImage} alt="game" className="image" />
        <p>A left or right or down arrow will appear on the screen at random.</p>
        <p>Press the corresponding arrow key as soon as you see an arrow appear on the screen.</p>
      </div>
    </div>
  );
}

export default HardGame;