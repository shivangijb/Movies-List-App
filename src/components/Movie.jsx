import React from "react";

export default function Movie({title, poster, plot, imdbRating}){

    const setRatingClass = (rating) => {
        if(rating >= 7){
            return 'green';
        }
        else if(rating >= 5 && rating < 7){
            return 'orange';
        }
        else{
            return 'red';
        }
    }
    return(
        <div className="movie">
            
            <img src={poster} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag${setRatingClass(imdbRating)}`}>{imdbRating}</span>
            </div>
            <div className="movie-over">
                <h2>Plot</h2>
                <p>{plot}</p>
            </div>
        </div>
    );
}