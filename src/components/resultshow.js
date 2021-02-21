import React,{useContext} from 'react'
import {globalprovider} from "../context/globalProvider"
const Resultshow = ({movie}) => {
  const {addMovieToWishlist,wishlist,watchlist}=useContext(globalprovider)


  let storedMovie = wishlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  
   const watchDisabled=storedMovie ? true:false
  return (
    
    <>
    
    {movie.poster_path ?(
    <div className="container d-flex m-4">
    <div className="ml-5 d-flex justify-content-between">
    <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />

    </div>
    <div className="ml-5  ">
    <strong>Title</strong><h5>{movie.title}</h5>
    Realease date<h5>{movie.release_date.substring(0,4)}</h5>
    <p>{movie.overview}</p>
    <button className="btn btn-info control" disabled={watchDisabled} onClick={() =>{addMovieToWishlist(movie)}}>add to WishList</button>
    </div>
    </div>
    ):(
      <div>
      <h5>No result found</h5></div>
    
    )}
    
    </>
    
  )
}

export default Resultshow
