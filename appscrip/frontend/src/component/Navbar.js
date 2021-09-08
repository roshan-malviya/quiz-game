import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-dark">

                <Link className="text-white" to="/"> <h5>Home</h5></Link>



                <Link className="text-white" to='/history'>
                   <h5> Privious Games</h5>
                </Link>


            </nav>
        </>
    )
}
