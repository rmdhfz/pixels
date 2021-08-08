import React  from 'react';
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    
    return (
        <div className='card'>
            <div className='card-body'>
                <h2 className='card-title'>{`#${movie.runtime} - ${movie.original_title} (${movie.release_date})` }</h2>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{`Status: ${movie.status}`}</li>
                <li className='list-group-item'>{`Vote Count: ${movie.vote_count}`}</li>
                <li className='list-group-item'>
                    <Link to={`/movie/${movie.id}`}>Show details</Link>
                </li>
            </ul>
        </div>
    );
};

export default Card;