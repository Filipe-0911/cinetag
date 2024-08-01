import styles from "./Rodape.module.css";

export default function Rodape () {
    return (
        <footer className={styles.rodape}>
            <h2>
                &copy; 2023 Cinetag. Todos os direitos reservados.
            </h2>
        </footer>
    );
}