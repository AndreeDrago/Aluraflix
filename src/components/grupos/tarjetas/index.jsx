//*Styles
import styles from "./tarjetas.module.css";

//*Iconos
import iconoEditar from "../../../assets/icon/icono-editar.png";
import iconoBorrar from "../../../assets/icon/icono-borrar.png";

//*Components
import ImagenDiseño from "../../ImagenDiseño";
import BotonCard from "./botonCard";

function Tarjeta({ datos, borderColor }) {
  return (
    <div className={styles.tarjeta__container}>
      <div className={styles.imagen}>
        <ImagenDiseño
          bordeRadio="1rem 1rem 0 0 "
          imagen={datos.imagen}
          borderColor={borderColor}
        />
      </div>
      <div
        className={styles.boton__area}
        style={{
          borderColor: borderColor,
          boxShadow: `inset 0px 0px 22px 4px ${borderColor}`,
        }}
      >
        <BotonCard icono={iconoEditar}>Editar</BotonCard>
        <BotonCard icono={iconoBorrar}>Borrar</BotonCard>
      </div>
    </div>
  );
}

export default Tarjeta;
