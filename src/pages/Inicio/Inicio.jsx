import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";

export default function Inicio() {
    return (
        <>
            <Cabecalho/>
            <Banner imagem="home" />
            <Rodape />
        </>
    );
}