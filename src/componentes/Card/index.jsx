import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import videos from "../../json/db.json"
import { useFavoritoContext } from "Contextos/Favoritos";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();

    const buscaFavoritoPorId = (id) => {
        return videos.find(v => v.id === id);
    }
    const verificaSeEhFavorito = (id) => {
        return favorito.some(v => v.id === id);
    }
    const icone = verificaSeEhFavorito(id) ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={styles.container} >
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt="favoritar filme"
                className={styles.favoritar}
                onClick={() => adicionarFavorito(buscaFavoritoPorId(id))}
            />
        </div>
    );
}