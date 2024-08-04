import { createContext, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}