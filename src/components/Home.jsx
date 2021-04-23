import React, { useEffect, useState } from 'react';

//styles
import '../styles/_nav.scss';
import '../styles/_banner.scss';
import Fade from 'react-reveal/Fade';


//MODULES
import getMovies from './ApiMovies';
import MoviesList from './MoviesList';
import Footer from './Footer';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



const moviesWords = ['marvel', 'harry', 'batman', 'pixar', 'hero',
    'shop', 'terror', 'horror', 'lego', 'history', 'robots'];

const randomNum = parseInt(Math.random() * 8);

function Home() {

    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    const [menuActive, setMenuActive] = useState(false);
    const [iconMenu, setIconMenu] = useState(faBars);
    const [loading, setLoading] = useState(true);

    const deployMenu = () => {
        const browser = document.querySelector(".form-search");
        if (!menuActive) {
            setMenuActive(true);
            setIconMenu(faTimes);
            return browser.className = `d-flex form-search form-search-activate`;
        } else {
            setMenuActive(false);
            setIconMenu(faBars);
            return browser.className = `d-flex form-search`;
        }


    }

    const searchMovie = async (title) => {
        setLoading(true);
        await getMovies(title)
            .then(res => setMovies(res));
        setLoading(false);
    }

    const submitMovie = (e, title) => {
        e.preventDefault();
        if (title.trim('').length === 0) {
            return
        }
        searchMovie(title);
    }
    const handleSearch = (search) => {
        setMovieName(search);
    }

    useEffect(() => {
        searchMovie(moviesWords[randomNum]);

    }, [])

    if (!loading) {
        return (
            <React.Fragment>
                <section className="home">
                    <nav className="navbar navbar-dark">

                        <div className="container-fluid">
                            <a href="#home" className="navbar-brand nav-title" >ONMOVIES</a>
                            <FontAwesomeIcon icon={iconMenu} onClick={() => { deployMenu() }} className="button-menu" />
                            <form action="GET" onSubmit={(e) => submitMovie(e, movieName)} className="d-flex form-search">
                                <input type="search"
                                    placeholder="Search a movie..."
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="form-control mx-2" />
                                <button type="submit" className="btn btn-outline-warning">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                        </div>
                    </nav>
                </section>
                <section className="movies-container">
                    <Fade left>
                        <div className="movie-banner">
                            <div className="image-banner">
                                <h5 className="text-warning">AVENGERS ENDGAME</h5>
                                <p className="text-light">Year 2019</p>
                            </div>
                        </div>
                    </Fade>
                    <div className="movies-list-container">
                        <h4 className="title-movie text-light">MOVIES</h4>
                        <MoviesList movieList={movies} />
                    </div>
                </section>
                <Footer />
            </React.Fragment>

        )
    }
    return(
        <div className="loading">
            <div className="loader"></div>
        </div>
    )
};

export default Home;