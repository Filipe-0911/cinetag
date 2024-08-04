import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "Contextos/Favoritos";
import VideosProvider from "Contextos/Videos";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <VideosProvider>
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
            </VideosProvider>
            <Rodape />
        </main>
    );
}