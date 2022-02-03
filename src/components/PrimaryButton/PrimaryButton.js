import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ onClick, label }) => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
