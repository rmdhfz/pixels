import React from 'react';

const DetailMovie = ({ movie }) => {
    return (
        <div className="container">
            <section>
                <div>
                    <div>
                        <h3><strong>Title:</strong> { movie.original_title }</h3>
                        <p><strong>Published Date:</strong> {movie.release_date}</p>
                        <p><strong>Status:</strong> {movie.status}</p>
                        <p><strong>Vote Count:</strong> {movie.vote_count}</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default DetailMovie;