import React, { useState } from 'react'
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { flag } from '../actions/user';


const Quest2 = ({ question2, flag }) => {

    const [colours, setColours] = useState([])


    const onChange = (e) => {
        const value = e.target.value;
        if (colours.includes(value)) {
            setColours(colours.filter(colour => colour !== value))
        } else {
            setColours([...colours, value])
        }
    }

    const onSubmit = (e) => {

        e.preventDefault();
        flag({quest:"Q 1. What are the colours in indian national flag ?",colours})

    }
    console.log(question2);

    if(question2){
        return <Redirect to="/summary" />;
    }


    return (
        <>

            <form onSubmit={e => onSubmit(e)}className="p-4">
                <fieldset className="form-group row">
                    <legend className="col-form-label float-sm-left pt-0"> What are the colours in indian national flag ?</legend>
                    <div className="col-sm-10">
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" value="White" name="White" onChange={e => onChange(e)} disabled={colours.length === 3 && !colours.includes("White") ? true : false} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        White
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" value="Yellow" name="Yellow" onChange={e => onChange(e)} disabled={colours.length === 3 && !colours.includes("Yellow") ? true : false} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Yellow
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" value="Green" name="Green" onChange={e => onChange(e)} disabled={colours.length === 3 && !colours.includes("Green") ? true : false} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Green
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" value="Orange" name="Orange" onChange={e => onChange(e)} disabled={colours.length === 3 && !colours.includes("Orange") ? true : false} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Orange
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Finish</button>
                    </div>
                </div>
            </form>

        </>
    )
}

Quest2.propTypes={
    flag:PropTypes.func.isRequired,
    question2:PropTypes.string
}

const mapStateToProps = (state) => ({
    question2: state.user.quest2
})

export default connect(mapStateToProps, { flag })(Quest2)
