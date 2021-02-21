import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from "./Appreducer"
    


const initialstate={
    wishlist:localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[],
    watchlist:localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[]
}

export const globalprovider=createContext(initialstate)

const  GlobalProvider=(props)=>{
    const[state,dispatch]=useReducer(AppReducer,initialstate)


useEffect(()=>{
    localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
    localStorage.setItem("watchlist",JSON.stringify(state.watchlist))

},[state])

    const addMovieToWishlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WISHLIST", payload: movie });
       
       
      };

      const removeMovieFromWishlist=(id)=>{
          dispatch({
              type:"REMOVE_MOVIE",payload:id
          })
      }

      const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
       
       
      };

      const removeMovieFromWatchlist=(id)=>{
          dispatch({
              type:"REMOVE_WATCHMOVIE",payload:id
          })
      }
    return (
        <div>
        <globalprovider.Provider value={{wishlist:state.wishlist,watchlist:state.watchlist,addMovieToWishlist:addMovieToWishlist,removeMovieFromWishlist:removeMovieFromWishlist,removeMovieFromWatchlist:removeMovieFromWatchlist,addMovieToWatchlist:addMovieToWatchlist}}>
            {props.children}
        </globalprovider.Provider>
            
        </div>
    )
}

export default GlobalProvider


