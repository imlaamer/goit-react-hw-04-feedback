import css from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback, options }) {
  const {
    feedBackBtnsBox,
    feedbackBtnsList,
    feedbackBtnsItem,
    feedbackBtn,
  } = css;
  return (
    <div className={feedBackBtnsBox}>
      <ul className={feedbackBtnsList}>
        {options.map(option => (
          <li className={feedbackBtnsItem} key={option}>
            <button
              type="button"
              className={feedbackBtn}
              onClick={() => onLeaveFeedback(option)}
            >
              {option.replace(option[0], option[0].toUpperCase())}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackOptions;
