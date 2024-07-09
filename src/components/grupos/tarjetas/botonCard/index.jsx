//*Styles
import styles from "./botonCard.module.css";

function BotonCard({ icono, children }) {
  return (
    <div className={styles.botonContainer}>
      <img src={icono} alt="" />
      {children}
    </div>
  );
}

export default BotonCard;
