//*Stiles
import styles from "./imagenDiseño.module.css";

function ImagenDiseño({ bordeRadio, imagen, borderColor }) {
  return (
    <div className={styles.imagenPrevia}>
      <img src={imagen} alt="" style={{ borderRadius: bordeRadio }} />
      <div
        className={styles.imagenEfect}
        style={{
          borderRadius: bordeRadio,
          borderColor: borderColor,
          boxShadow: `inset 0px 0px 22px 4px ${borderColor}`,
        }}
      ></div>
    </div>
  );
}

export default ImagenDiseño;
