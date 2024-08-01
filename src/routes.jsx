import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
}