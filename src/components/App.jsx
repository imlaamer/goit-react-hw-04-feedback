import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
      default:
        throw new Error(`Unsuported option ${option}`);
    }
  };

  const countTotalFeedback = () => {
    const optionValues = Object.values(options);
    const totalCount = optionValues.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return totalCount;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          width: 400,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          borderRadius: 20,
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={Object.keys(options)}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              {...options}
              total={total}
              positiveFeedbacks={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}

export default App;
