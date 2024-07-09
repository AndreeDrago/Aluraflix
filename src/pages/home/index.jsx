//*Styles
import styles from "./home.module.css";

//*Datos
import categorias from "../../data/categorias.json";
import videosData from "../../data/videos.json";

//*React
import { useState } from "react";

//*Components
import Banner from "../../components/banner";
import Grupo from "../../components/grupos";

function Home() {
  const [videos, setVideos] = useState(videosData);

  return (
    <>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
      {categorias.map((categoria) => {
        return (
          <Grupo
            datos={categoria}
            key={categoria.titulo}
            videos={videos.filter(
              (video) => video.categoria === categoria.titulo
            )}
          />
        );
      })}
    </>
  );
}

export default Home;
