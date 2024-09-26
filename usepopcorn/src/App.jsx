import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./assets/data";
import Navbar from "./components/Navbar";
import Listbox from "./components/Listbox";
import WatchBox from "./components/WatchBox";


export default function App() {
    const [movies, setMovies] = useState(tempMovieData);

    return (
        <>
            <Navbar movies={movies} />

            <main className="main">
                <Listbox movies={movies} />
                <WatchBox movies={movies} />
            </main>
        </>
    );
}
