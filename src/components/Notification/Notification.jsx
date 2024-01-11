import css from './Notification.module.css';

function Notification({ message }) {
  const { notification } = css;
  return (
    <div>
      <p className={notification}>{message}</p>
    </div>
  );
}

export default Notification;
