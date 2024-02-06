import { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { MediaContext } from "../../Context/MediaContext";
import { Helmet } from "react-helmet";
export default function Home() {
  let { trendingMovies, trendingTv, trendingPerson } = useContext(MediaContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
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
        {trendingMovies.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
      <div className="row py-5">
        <div className="col-md-4">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h3 className="h6 my-2">
              Trending Tv <br /> To Watch Right Now
            </h3>
            <p className=" py-2"> Watched Tv To Watch Right Now</p>
          </div>
          <div className="brdr w-100 mb-3"></div>
        </div>
        {trendingTv.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
      <div className="row py-5">
        <div className="col-md-4 ">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h3 className="h6 my-2">
              Trending Person <br /> To Watch Right Now
            </h3>
            <p className=" py-2"> Watched Person To Watch Right Now</p>
          </div>
          <div className="brdr w-100 mb-3"></div>
        </div>
        {trendingPerson.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
