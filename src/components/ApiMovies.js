import axios from 'axios';


const getMovies = async (movieName)=>{
    if(movieName.trim('').length !== 0){
        const result = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.APIKEY}&s=${movieName}`);
        return result.data.Search;
    }
    
} 

export default getMovies;