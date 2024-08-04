import { FavoritosContext } from "Contextos/Favoritos";
import { useContext } from "react";

export function useFavoritoContext () {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito (novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }
        novaLista.splice(novaLista.findIndex(item => item.id === novoFavorito.id), 1);
        return setFavorito(novaLista);
    }

    return { favorito, adicionarFavorito };
}