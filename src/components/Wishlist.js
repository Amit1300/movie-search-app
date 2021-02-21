import React,{useContext} from 'react'
import {globalprovider} from "../context/globalProvider"
import { MovieCard } from "./moviecard";
function Wishlist() {
    const{wishlist,removeFromWatched}=useContext(globalprovider)

    return (
        <div>
        <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Wishlistlist</h1>

          <span className="count-pill">
            {wishlist.length} {wishlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {wishlist.length > 0 ? (
          <div className="movie-grid">
            {wishlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="wishlist"  />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
       
        </div>
      
    )
}

export default Wishlist
