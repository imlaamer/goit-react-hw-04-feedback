import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedbacks }) {
  const { statisticsBox, statisticsList, statisticsItem, statisticsText } = css;

  return (
    <div className={statisticsBox}>
      <ul className={statisticsList}>
        <li className={statisticsItem}>
          <p className={statisticsText}>Good: {good}</p>
        </li>
        <li className={statisticsItem}>
          <p className={statisticsText}>Neutral: {neutral}</p>
        </li>
        <li className={statisticsItem}>
          <p className={statisticsText}>Bad: {bad}</p>
        </li>
        <li className={statisticsItem}>
          <p className={statisticsText}>Total: {total}</p>
        </li>
        <li className={statisticsItem}>
          <p className={statisticsText}>
            Positive feedbacks: {positiveFeedbacks}%
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
