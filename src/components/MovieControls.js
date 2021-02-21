import React, { useContext } from "react";
import { globalprovider } from "../context/globalProvider";


export  const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWishlist,removeMovieFromWatchlist,
    addMovieToWatchlist
  } = useContext(globalprovider);

  return (
    <div className="inner-card-controls">

    {type==="wishlist" && (
        <div>
    <button className="btn btn-info" onClick={()=>{removeMovieFromWishlist(movie.id)}}> remove</button>

    <button className="btn btn-info" onClick={()=>{addMovieToWatchlist(movie)}}> ADD TO WATCH LIST</button>
    </div>
    )
    }
    </div>
  );
};

