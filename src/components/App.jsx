import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const optionValues = Object.values(this.state);
    const totalCount = optionValues.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return totalCount;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
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
              onLeaveFeedback={this.onLeaveFeedback}
              options={Object.keys(this.state)}
            />
          </Section>

          <Section title="Statistics">
            {total ? (
              <Statistics
                {...this.state}
                total={total}
                positiveFeedbacks={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
//deploy
