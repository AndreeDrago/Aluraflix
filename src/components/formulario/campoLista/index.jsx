//*Styles
import styles from "./campoLista.module.css";

//*Datos
import categorias from "../../../data/categorias.json";

function CampoLista() {
  return (
    <div className={styles.coampo__lista}>
      <label htmlFor="">Categorías</label>
      <select value="">
        <option value="" defaultValue="" hidden disabled>
          Seleccionar categoría
        </option>

        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria.titulo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CampoLista;
