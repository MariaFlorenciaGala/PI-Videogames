import axios from 'axios';

//ACTION TYPES
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
    POST_VIDEOGAMES } from './actionTypes'

    //ACTIONS A LA DB
    export function getAllVideogames(){
        return async (dispatch) => {
            try {
                const infoAPI = await axios.get(`http://localhost:3001/videogames`);
                return dispatch(
                    { 
                        type: GET_ALL_VIDEOGAMES, 
                        payload: infoAPI.data
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    };

    export function getVideogamesById(id){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
                return dispatch(
                    { type: GET_DETAIL_VIDEOGAME, 
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    };

    export function getByName(name){
        return async (dispatch) => {
            try {
                const infoAPI = await axios.get(`http://localhost:3001/videogames/?name=${name}`);
                return dispatch(
                    { 
                        type: GET_BY_NAME,  
                        payload: infoAPI.data
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    };

    export function postVideogame(videogame){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.post(`http://localhost:3001/videogames`, videogame)).data;
                alert('Videogame creado!')
                return dispatch(
                    { 
                        type: POST_VIDEOGAMES,  
                        payload: infoAPI
                    });
            } catch (error) {
                alert('Faltan datos?')
                console.log(error.response.data.error);
            }
        }
    };

    export function getAllGenres(){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/genres`)).data;
                return dispatch(
                    { 
                        type: GET_ALL_GENRES,  
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    };

    //ACTIONS DE FILTRADO

    export const cleanDetail = () =>{
        return {
            type: CLEAN_DETAIL
        };
    }

    export const filterByGenre = (genre) => {
        return{
            type: FILTER_BY_GENRE,
            payload: genre
        }
    }

    export const filterByPlatform = (platform) => {
        return {
            type: FILTER_BY_PLATFORMS,
            payload: platform
        }
    }

    export const filterByAlpha = (order) => {
        return {
            type: FILTER_BY_ALPHA,
            payload: order
        }
    }

    export const filterByAlphaRev = (order) => {
        const rev = filterByAlpha(order).revert
        return {
            type: FILTER_ALPHA_REV,
            payload: rev
        }
    }

    export const filterByRating = (rating) => {
        return {
            type: FILTER_BY_RATING,
            payload: rating
        }
    }