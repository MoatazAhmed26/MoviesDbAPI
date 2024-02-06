import React from "react";
import { Link } from "react-router-dom";
export default function MediaItem({ item }) {
  return (
    <>

      <div className="col-md-2 d-flex ">
        <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
          <div className="movie m-2 p-2 position-relative">
            {item.poster_path ? (
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500` + item.poster_path}
                alt=""
              />
            ) : (
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500` + item.profile_path}
                alt=""
              />
            )}
              
            <h6 className="">
              {item.title} {item.name}
            </h6>
            {item.release_date ? (
              <p className="">{item.release_date.slice(0, 4)}</p>
            ) : (
              ""
            )}

            {item.vote_average ? (
              <p className="vote position-absolute top-0 end-0 text-white p-2">
                {item.vote_average?.toFixed(1)}
              </p>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
