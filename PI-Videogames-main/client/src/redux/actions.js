import axios from 'axios';

//ACTION TYPES
import { GET_ALL_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    CLEAN_DETAIL,
    GET_ALL_GENRES,
    GET_BY_NAME,
    ORD_BY_GENRE,
    ORD_BY_ALPHA,
    ORD_ALPHA_REV,
    ORD_BY_PLATFORMS,
    ORD_BY_RATING,
    POST_VIDEOGAMES } from './actionTypes'

    export function getAllVideogames(){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/videogames`)).data;
                return dispatch(
                    { type: GET_ALL_VIDEOGAMES, 
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };
    export function getVideogamesById(){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/videogames/:id`)).data;
                return dispatch(
                    { type: GET_DETAIL_VIDEOGAME, 
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };