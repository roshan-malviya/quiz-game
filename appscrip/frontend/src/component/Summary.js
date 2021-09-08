import React, { useEffect } from 'react'
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { submit } from '../actions/user';


const Summary = ({ data, submit }) => {


    const onSubmit = () => {

        const name = data.name;
        const question1 = data.quest1.ques;
        const answer1 = data.quest1.answer;
        const question2 = data.quest2.quest
        const answer2 = data.quest2.colours;
    console.log("in onsubmit");
        const body = {name,question1,answer1,question2,answer2}
        submit(body)


    }
    if(data.isuploaded){
        return <Redirect to="/intro" />;
    }


    return (
        <>
            <form >
                <div class="card" >

                    <div class="card-body">
                        <h1 class="card-title">Hello {data.name}</h1>
                        <p class="card-text">Question 1.{data.quest1.ques}</p>
                        <p class="card-text">Answer: {data.quest1.answer}</p>
                        <p class="card-text">Question 2.{data.quest2.quest}</p>
                        <p class="card-text">Answer: {data.quest2.colours.map((colour) => colour + ',')}</p>

                        <button type="button" className="btn btn-primary" onClick={onSubmit}>Finish</button>

                    </div>
                </div>
            </form>

        </>
    )
}
Summary.propTypes = {
    data: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    data: state.user
})


export default connect(mapStateToProps, { submit })(Summary);
