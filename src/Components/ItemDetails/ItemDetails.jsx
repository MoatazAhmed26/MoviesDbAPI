import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
export default function ItemDetails() {
  let { id, mediaType } = useParams();
  console.log(id, mediaType);
  const [itemDetails, setitemDetails] = useState({});
  async function getItemDetails(id, mediaType) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=405305473fe5c8b3fc47b86f3b7b6072&language=en-US`
    );
    setitemDetails(data);
  }
  useEffect(() => {
    getItemDetails(id, mediaType);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{itemDetails.title}</title>
      </Helmet>
      <div className="row">
        <div className="col-md-3">
          {itemDetails.poster_path ? (
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500` + itemDetails.poster_path}
              alt=""
            />
          ) : (
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500` + itemDetails.profile_path}
              alt=""
            />
          )}
        </div>
        <div className="col-md-9">
          <h1 className="">
            {itemDetails.title} {itemDetails.name}
          </h1>
          {itemDetails.tagline ? (
            <p className="text-white-50">{itemDetails.tagline}</p>
          ) : (
            ""
          )}
          {itemDetails.release_date ? (
            <p className="">{itemDetails.release_date.slice(0, 4)}</p>
          ) : (
            ""
          )}
          {itemDetails.vote_average ? (
            <h6 className="text-white py-2 ">
              Vote: {itemDetails.vote_average?.toFixed(1)}
            </h6>
          ) : (
            ""
          )}
          {itemDetails.vote_count ? (
            <h6 className="text-white py-2 ">
              Vote Count: {itemDetails.vote_count}
            </h6>
          ) : (
            ""
          )}
          {itemDetails.popularity ? (
            <h6 className="text-white py-2 ">
              Popularity: {itemDetails.popularity}
            </h6>
          ) : (
            ""
          )}
          {itemDetails.release_date ? (
            <h6 className="text-white py-2 ">
              Release Date: {itemDetails.release_date}
            </h6>
          ) : (
            ""
          )}
          {itemDetails.overview ? (
            <p className="">{itemDetails.overview}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
