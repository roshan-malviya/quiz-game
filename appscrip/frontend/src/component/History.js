import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getHistory } from '../actions/user';
const History = ({ getHistory, history }) => {

    useEffect(() => {
        getHistory()
    }, [getHistory])

    console.log(history);


    return (
        <>

            <ul className="pr-5">
                {
                    history && history.map((data, index) => (
                        <div key={index} className="mt-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><strong>Game: {index + 1}  <br />Date: {data.time}</strong></h5>
                                    <h5 class="card-subtitle mb-2 "><strong>{data.name}</strong></h5>
                                    <p class="card-text">question1: {data.question1}</p>
                                    <p class="card-text">answer1: {data.answer1}</p>
                                    <p class="card-text">question2: {data.question2}</p>
                                    <p class="card-text">answer2: {data.answer2}.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </ul>

        </>
    )
}

History.propTypes = {
    getHistory: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired

}

const mapStateToProps = (state) => ({
    history: state.user.history
})

export default connect(mapStateToProps, { getHistory })(History);
