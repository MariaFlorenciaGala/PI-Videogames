import { GET_ALL_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    GET_ALL_GENRES,
    GET_BY_NAME,
    ORD_BY_GENRE,
    ORD_BY_ALPHA,
    ORD_ALPHA_REV,
    ORD_BY_PLATFORMS,
    ORD_BY_RATING,
    CLEAN_DETAIL,
    POST_VIDEOGAMES } from "./actionTypes";

const initialState = {
    allVideogames: [],
    allGenres:[],
    copyAllVideogames: [],
    
}

function rootReducer (state = initialState, action){

    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                copyAllVideogames: action.payload
        }
        case GET_DETAIL_VIDEOGAME:
            return {
                ...state,
                allVideogames: action.payload
        }
        case GET_ALL_GENRES:
        return {
            ...state,
            allVideogames: action.payload
        }
        case GET_BY_NAME:
        return {
            ...state,
            allVideogames: action.payload
        }
        case ORD_BY_GENRE:
        return {
            ...state,
            allVideogames: action.payload
        }
        case ORD_BY_ALPHA :
        return {
            ...state,
            allVideogames: action.payload
        }        
        case ORD_ALPHA_REV:
        return {
            ...state,
            allVideogames: action.payload
        }
        case ORD_BY_PLATFORMS:
            return {
                ...state,
                allVideogames: action.payload
        }
        case ORD_BY_RATING:
            return {
                ...state,
                allVideogames: action.payload
        }
        case  CLEAN_DETAIL:
            return {
                ...state,
                allVideogames: action.payload
        }
        case POST_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
        }        
        default:
            return state
    }

}

export default rootReducer;