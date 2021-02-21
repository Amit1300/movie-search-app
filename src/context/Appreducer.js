
import React from 'react'

const AppReducer=(state,action)=>{
    switch(action.type){
        case "ADD_MOVIE_TO_WISHLIST":
            return {
              ...state,
              wishlist: [action.payload, ...state.wishlist]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,wishlist:state.wishlist.filter(movie=>movie.id!==action.payload)
            }
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                 ...state,
                  watchlist: [action.payload, ...state.watchlist],
                }
        case 'REMOVE_WATCHMOVIE':
                 return {
                    ...state,watchlist:state.watchlist.filter(movie=>movie.id!==action.payload)
                    }
        default:
            return state

           
        }
    
}

export default AppReducer
