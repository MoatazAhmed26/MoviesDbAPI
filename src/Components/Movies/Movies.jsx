import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MediaItem from "../MediaItem/MediaItem";
export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  async function getTrendingMovies(media_Type) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_Type}/week?api_key=405305473fe5c8b3fc47b86f3b7b6072`
    );
    setTrendingMovies(data.results);
  }
  useEffect(() => {
    getTrendingMovies("movie", setTrendingMovies);
  }, []);
  return (
    <>
      <div className="row py-5">
        <div className="col-md-4 ">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h3 className="h6 my-2">
              Trending Movies <br /> To Watch Right Now
            </h3>
            <p className=" py-2"> Watched Movies To Watch Right Now</p>
          </div>
          <div className="brdr w-100 mb-3"></div>
        </div>
        {trendingMovies.slice(0, 20).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
