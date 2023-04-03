import { useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './SectionTitle';
import { Notification } from './Notification'


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
        
    
  const handleFeedbackClick = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
            break;
        case "bad":
            setBad(bad + 1);
            break;
      default:
        throw new Error("no such case");
    }
  };

 
  const countTotalFeedback = () => {
   return good + neutral + bad;
     
  }
  
  const total = countTotalFeedback();
  const percentage = (good / total * 100).toFixed(0);
  

    return (
      <>
        <Section>
          <FeedbackOptions onHandleUpdate={handleFeedbackClick} />
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
  
export default App;
