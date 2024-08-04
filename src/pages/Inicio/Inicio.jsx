import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import styles from "./Inicio.module.css"
import { useState, useEffect } from "react";
import useVideoContext from "Hooks/useVideoContext";

export default function Inicio() {
    const { videos, adicionarVideo } = useVideoContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Filipe-0911/cinetag-api/videos")
            .then(response => response.json())
            .then(data => {
                adicionarVideo(data);
                setIsLoading(false);
            })
            .catch(error => console.error("Error:", error));
    }, [])

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus filmes e vídeos!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {!isLoading && videos.length > 0 &&
                    videos.map((video, index) => {
                        return (
                            <Card
                                {...video}
                                key={index}
                            />
                        )
                    })
                }

            </section>

        </>
    );
}