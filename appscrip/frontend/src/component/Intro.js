import React, { useState } from 'react'
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { name } from '../actions/user';



const Intro = ({ playerName, name }) => {

    const [formData, setFormData] = useState({
        player: ''
    });
    const { player } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        name(player)
        // console.log(playerName);

    }


    if (playerName !== "" && playerName !== null) {
        return <Redirect to="/q1" />;
    }
    // console.log(playerName);

    return (


        <form onSubmit={e => onSubmit(e)} className="p-4">
            <div className="form-group">
                <label>Player name</label>
                <input className="form-control" placeholder="Name" name="player" value={player} onChange={e => onChange(e)} required />
                <small id="emailHelp" className="form-text text-muted">Enter your name and get started</small>
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>

    )


}

Intro.propTypes = {

    name: PropTypes.func.isRequired,
    playerName: PropTypes.string

}

const mapStateToProps = state => ({
    playerName: state.user.name
})

export default connect(mapStateToProps, { name })(Intro);
