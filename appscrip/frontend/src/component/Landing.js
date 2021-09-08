import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
    return (

            <div className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large"> Welcome to Trivia games

                        </h1>

                        <Link to="/intro"> <p className="text-info">Let's get started</p></Link>
                        <Link to='/history' className="btn btn-primary">Privious game records</Link>

                    </div>


                </div>

            </div>


    )
}
