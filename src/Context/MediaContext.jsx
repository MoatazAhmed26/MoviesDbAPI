import { createContext, useState, useEffect } from "react";
import axios from "axios";


export let MediaContext = createContext("");

function MediaContextProvider( props ) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  async function getTrending(media_Type, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_Type}/week?api_key=405305473fe5c8b3fc47b86f3b7b6072`
    );
    callback(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPerson);
  }, []);
  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingTv, trendingPerson }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}
export default MediaContextProvider;
