import Banner from "componentes/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import { useFavoritoContext } from "Contextos/Favoritos";

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                Meus Favoritos
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav, index) => <Card {...fav} key={index}/>)}
            </section>
        </>
    )
}