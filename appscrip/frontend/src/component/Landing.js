import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
    return (
        <div>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large"> Welcome to Trivia games

                        </h1>
                     
                       <Link to="/intro"> <p className="lead">Let's get started</p></Link>
                        {/* <div className="buttons"> */}
                            <Link to='/history' className="btn btn-primary">Privious game records</Link>
                            {/* <Link to='/login' className='btn btn-light'>Login</Link> */}
                        {/* </div> */}
                    </div>
                   

                </div>

            </section>

        </div>
    )
}
