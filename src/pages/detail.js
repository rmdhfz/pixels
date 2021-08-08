import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetailMovie from "../components/detailmovie";

const Detail = ({ match }) => {
    const { params: { movieId }} = match;
    const [movie, setMovie] = useState(null);
        useEffect(() => {
        const API_BASE_URL = `http://localhost:9000/api/movie`;
        const FetchMovie = async () => {
          if (movieId) {
            try {
              const result = await fetch(`${API_BASE_URL}/${movieId}`);
              const movieJson = await result.json();
              setMovie(movieJson.data);
            } catch (error) {
                console.log('error');
            }
          }else{
            console.error('movieId is null');
          }
        };
        // Call the API
        FetchMovie();
      }, [movieId]);
    return (
        <div className="container">
          <Link to={`/`}>Go back to movies page</Link>
          {movie && <DetailMovie key={ movieId } movie={ movie }  />}
        </div>
    );
};

export default Detail;