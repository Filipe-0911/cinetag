import Banner from "componentes/Banner";
import styles from "./Player.module.css";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";
import useVideoContext from "Hooks/useVideoContext";

export default function Player() {
    const [ videoEspecifico, setVideoEspecifico ] = useState()
    const parametros = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { buscarVideoPorId } = useVideoContext();

    useEffect(() => {
        const videoEncontrado = buscarVideoPorId(+parametros.id)
        setVideoEspecifico(videoEncontrado)
        setIsLoading(false);

    }, [parametros.id, buscarVideoPorId]);

    if (!videoEspecifico) {
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
                {!isLoading &&
                <iframe
                    height="100%"
                    width="100%"
                    src={`${videoEspecifico.link}`}
                    title={`${videoEspecifico.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>
                }
            </section>
        </>
    );
}