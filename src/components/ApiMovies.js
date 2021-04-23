import axios from 'axios';

const getMovies = async (movieName)=>{
    if(movieName.trim('').length !== 0){
        const result = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_APIKEY}&s=${movieName}`);
        return result.data.Search;
    }
    
} 

export default getMovies;