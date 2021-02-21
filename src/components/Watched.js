
import React, { useContext } from "react";
import { globalprovider } from "../context/globalProvider";
import WatchedOption from "./watchedOption";
const Watched = () => {
  const {watchlist, removeMovieFromWatchlist,addMovieToWatchlist}=useContext(globalprovider)
  return (
    <>
    
        <div class="container">
        {watchlist.map(
          movie=>(
            <div >
              <WatchedOption movie={movie}/>
            </div>
          )


        )}
        </div>
            
      
    
      
    </>
  )
}

export default Watched
