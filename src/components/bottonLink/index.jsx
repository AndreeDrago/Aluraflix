//*React
import { Link } from "react-router-dom";

//*Styled
import styles from "./bottonLink.module.css";

function BottonLink({
  url,
  children,
  iconoActivo,
  iconoInactivo,
  activo = false,
}) {
  return (
    <>
      <Link to={url} className={styles.link}>
        <div className={activo ? styles.footerActivo : styles.footerInactivo}>
          <img src={activo ? iconoActivo : iconoInactivo} alt="" />
          {activo ? children : ""}
        </div>

        <div className={activo ? styles.headerActivo : styles.headerInactivo}>
          {children}
        </div>
      </Link>
    </>
  );
}

export default BottonLink;
