import styles from "../../styles/AuthReg.module.scss";

function Input({ nameList }) {
  return (
    <div className={styles.Input}>
      {nameList.map((e, index) => (
        <input
          placeholder={e}
          key={index}
        />
      ))}
    </div>
  );
}

export default Input;
