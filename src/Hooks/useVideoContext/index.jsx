import { VideosContext } from "Contextos/Videos";
import { useContext } from "react";

export default function useVideoContext() {
    const { videos, setVideos } = useContext(VideosContext);

    function adicionarVideo (videos) {
        setVideos(videos);
    }
    function buscarVideoPorId(id) {
        return videos.find(video => video.id === id);
    }
    return { videos, adicionarVideo, buscarVideoPorId };
}