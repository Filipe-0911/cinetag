import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import styles from "./Inicio.module.css"
import videos from "../../json/db.json"

export default function Inicio() {
    return (
        <> 
            <Banner imagem="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus filmes e vídeos!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {
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