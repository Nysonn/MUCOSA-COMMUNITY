import styles from './PrimaryButton.module.css';

function PrimaryButton({ children, onClick }) {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;