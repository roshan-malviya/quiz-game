import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
           <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i><h5>Home</h5></Link>

            </h1>

                <Link to='/history'>
                    Privious Games
                </Link>


        </nav> 
        </>
    )
}
