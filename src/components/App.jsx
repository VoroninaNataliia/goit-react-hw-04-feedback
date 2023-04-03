import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './SectionTitle';
import { Notification } from './Notification'



class App extends Component {
   state = {
    good: 0,
    neutral: 0,
     bad: 0,
    
  }
  handleFeedbackClick = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        this.setState((prevState) => ({
          good: prevState.good + 1,
        }));
        break;

      case "neutral":
        this.setState((prevState) => ({
          neutral: prevState.neutral + 1,
        }));
            break;
        case "bad":
            this.setState((prevState) => ({
              bad: prevState.bad + 1,
            }));
            break;
      default:
        throw new Error("no such case");
    }
  };

 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
   return good + neutral + bad;
     
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total * 100).toFixed(0);
    return (
      <>
        <Section>
          <FeedbackOptions onHandleUpdate={this.handleFeedbackClick} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentag={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
  
};

export default App;