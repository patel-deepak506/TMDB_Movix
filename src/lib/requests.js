import axios from "axios";
import {BaseUrl , TMDB_TOKEN , BASE_URL_TMDB} from './config'


const headers = {
    Authorization:"bearer "+ TMDB_TOKEN
}


export const get =async (endPoint , otherHeaders = {}, apiConfig = {})=>{
    
    return await axios.get(BaseUrl)
}
export const fetchDataFromApi = async(url , params)=>{
    try {
        const {data} = await axios.get(BASE_URL_TMDB+url , {headers , params})
        return data;
        
    } catch (error) {
        return error
        
    }
}