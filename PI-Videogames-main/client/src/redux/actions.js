import axios from 'axios';

//ACTION TYPES
import { GET_ALL_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    GET_ALL_GENRES,
    CLEAN_DETAIL,
    FILTER_BY_GENRE,
    FILTER_BY_SOURCE,
    SEARCH_VIDEOGAMES,
    ORDER_VIDEOGAMES,
    POST_VIDEOGAMES } from "./actionTypes";

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
                        type: SEARCH_VIDEOGAMES,  
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

    export const filterBySource = (source) => {
        return{
            type: FILTER_BY_SOURCE,
            payload: source
        }
    }
    

    export const orderVideogameS = (order) => {
        return{
            type: ORDER_VIDEOGAMES,
            payload: order
        }
    }
