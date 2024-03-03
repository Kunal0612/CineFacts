import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    Authorization: "bearer " + TMDB_TOKEN,
};


// This function takes a URL and optional parameters as arguments, 
//sends a GET request, and returns the data if successful.

export const fetchDataFromApi= async (url,params)=>{
    try{
        const {data}= await axios.get(BASE_URL + url,{
            headers, // Includes authorization information
            params, // Includes optional parameters for the request
        });
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}