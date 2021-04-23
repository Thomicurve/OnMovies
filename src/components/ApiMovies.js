import axios from 'axios';


const apiKey = '44f76584';


const getMovies = async (movieName)=>{
    if(movieName.trim('').length !== 0){
        const result = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${movieName}`);
        return result.data.Search;
    }
    
} 

export default getMovies;