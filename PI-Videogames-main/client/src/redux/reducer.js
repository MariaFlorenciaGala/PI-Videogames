import { GET_ALL_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    GET_ALL_GENRES,
    CLEAN_DETAIL,
    FILTER_BY_GENRE,
    FILTER_BY_SOURCE,
    SEARCH_VIDEOGAMES,
    ORDER_VIDEOGAMES,
    POST_VIDEOGAMES } from "./actionTypes";


const initialState = {
    allVideogames: [],
    detailVideogame : [],
    allGenres:[],
    copyAllVideogames: [],
    filterGenre: "defect",
    filterSource: "defect" ,
    videogameCrate: {}
    
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
                detailVideogame: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detailVideogame: {}
            }
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }
        case FILTER_BY_GENRE:
            if (filterSource !== 'defect'){
                const filterBySource = 
                    state.filterSource === 'api'? 
                    [ ...state.copyAllVideogames].filter((videogame) => !isNaN(videogame.id)):
                    [...state.copyAllVideogames].filter((videogame) => isNaN(videogame.id));
                const filterByGenre = 
                    action.payload === 'defect'?
                    filterBySource :
                    filterBySource.filter((videogame) => videogame.genres.some(genre => genre.name === action.payload ));
                    return {
                        ...state,
                        allVideogames: filterByGenre,
                        filterGenre: action.payload
                    }
            }else {
                const filterByGenre = action.payload === 'defect' ?
                [...state.copyAllVideogames]:
                [...state.copyAllVideogames.filter((videogame) => videogame.genre.some(genre => genre.name === action.payload))]
                return {
                    ...state,
                    allVideogames: filterByGenre,
                    filter: action.payload
                }
            }
        case FILTER_BY_SOURCE :
            if(state.filterGenre !== 'defect'){
                const filterByGenre = 
                    [...state.copyAllVideogames].filter((videogame)=>videogame.genres.some((genres) => genres.name === state.filterGenre))
                if(action.payload === 'api'){
                    const filterBySource = filterByGenre.filter((videogame) => !isNaN(videogame.id))
                    return {
                        ...state,
                        allVideogames: filterBySource,
                        filterBySource: action.payload
                    }
                }else {
                    const filterBySource = 
                        action.payload === 'defect'?
                        filterByGenre :
                        filterByGenre.filter((videogame) => isNaN(videogame.id))
                        return {
                            ...state,
                            allVideogames: filterBySource,
                            filterBySource: action.payload
                        }
                }
            }else {
                if(action.payload === 'api'){
                const filterBySource = 
                    action.payload === 'defect'? 
                    [...state.copyAllVideogames]:
                    [...state.copyAllVideogames].filter((videogame)=> !isNaN(videogame.id)) :
                    return {
                        ...state,
                        allVideogames: filterBySource,
                        filterSource: action.payload
                    }
                }else {
                    const filterBySource = 
                        action.payload === 'defect' ?
                        [...state.copyAllVideogames] :
                        [...state.copyAllVideogames].filter((videogame) => isNaN(videogame.id))
                    return {
                        ...state,
                        allVideogames: filterBySource,
                        filterBySource: action.payload
                    }    
                }
            }        
        case ORDER_VIDEOGAMES:
            switch(action.payload){
                case "asc":
                    const videoAsc = [...state.allVideogames].sort((a,b) => a.name.localeCompare(b.name))
                    return {
                        ...state,
                        allVideogames : videoAsc
                    }
                case "desc":
                    const videoDes = [...state.allVideogames].sort((a,b) => b.name.localeCompare(a.name))
                    return {
                        ...state,
                        allVideogames : videoDes
                    }
                case "higherRating":
                    const higherRating = [...state.allVideogames].sort((a,b) => b.rating - a.rating)
                    return {
                        ...state,
                        allVideogames : higherRating
                    }
                case "lowerRating":
                    const lowerRating = [...state.allVideogames].sort((a,b) => a.rating - b.rating)
                    return {
                        ...state,
                        allVideogames : lowerRating
                    }
                default:
                    return {
                        ...state
                    }
        }

        case POST_VIDEOGAMES:
            return {
                ...state,
                videogameCrate: action.payload
        }        
        default:
            return state
    }

}

export default rootReducer;