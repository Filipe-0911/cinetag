import Banner from "componentes/Banner";
import styles from "./Player.module.css";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json"
import NaoEncontrada from "pages/NaoEncontrada";

export default function Player() {
    const parametros = useParams();
    const video = videos.find(video => video.id === +parametros.id);

    if (!video) {
        return (
            <NaoEncontrada />
        )
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    height="100%"
                    width="100%"
                    src={`${video.link}`}
                    title={`${video.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>
            </section>
        </>
    );
}