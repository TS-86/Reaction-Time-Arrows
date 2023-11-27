import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';


function Results(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const reactionTimes = location.state.reactionTimes;

  const handleRetry = (): void => {
    navigate('/');
  };

  const averageReactionTime: number =
    reactionTimes.reduce((sum: number, time: number) => sum + time, 0) / reactionTimes.length;

  return (
    <div className="container">
      <h1 className="heading">Results</h1>
      <table>
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Reaction Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {reactionTimes.map((time: number, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Average Reaction Time: {averageReactionTime}ms</p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}

export default Results;