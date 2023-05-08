import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function MovieCard({ movie }) {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    console.log(movie);
    function handleDesc() {
        navigate('/desc/' + movie.description )
    }
    function handleBande() {
        navigate('/bande/' + movie.bandeannonce)
    }
    if (movie) {
        return (
            <div >
                <h1>{movie.Title}</h1>
                <img onClick={() => handleDesc()} width="400px" src={movie.Images[0]} alt="" />
                <button onClick={() => handleBande()} >watchme</button>
            </div>
        )
    }
}


export default MovieCard