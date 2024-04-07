import { GET_ALL_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    CLEAN_DETAIL,
    GET_ALL_GENRES,
    GET_BY_NAME,
    FILTER_BY_GENRE,
    FILTER_BY_ALPHA,
    FILTER_ALPHA_REV,
    FILTER_BY_PLATFORMS,
    FILTER_BY_RATING,
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
        case FILTER_BY_GENRE:
        return {
            ...state,
            allVideogames: action.payload
        }
        case FILTER_BY_ALPHA :
        return {
            ...state,
            allVideogames: action.payload
        }        
        case FILTER_ALPHA_REV:
        return {
            ...state,
            allVideogames: action.payload
        }
        case FILTER_BY_PLATFORMS:
            return {
                ...state,
                allVideogames: action.payload
        }
        case FILTER_BY_RATING:
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