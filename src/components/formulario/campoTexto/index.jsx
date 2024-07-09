//*Styles
import styles from "./campoTexto.module.css";

const CampoTexto = ({
  actualizarValor,
  titulo,
  placeholder,
  required,
  value,
}) => {
  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <div className={styles.campo__texto}>
      <label htmlFor="">{titulo}</label>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
