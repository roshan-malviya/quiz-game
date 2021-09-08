import React, { useState } from 'react'
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { cricketer } from '../actions/user';


 const Ques1 = ({cricketer,question1}) => {

    const [formData, setFormData] = useState({
        answer: ''
    });

    const { answer } = formData;
    const onChange = e => setFormData({ ...formData, answer: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(question1);
        if(answer!==""){
        cricketer({ques:"who is worlds best cricker?",answer})
        }   
    }

    if (question1!==null){
        return <Redirect to="/q2" />;
        // console.log(question1.answer);
    }
    


    


    return (
        <>
            <form onSubmit={e=>onSubmit(e)}className="p-4">
                <fieldset className="form-group row">
                    <legend className="col-form-label float-sm-left pt-0">Q 1. who is worlds best cricker?</legend>
                    <div className="col-sm-10">
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="cricketer" id="exampleRadios1" value="Virat Kohli" onChange={e => onChange(e)} />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Virat Kohli
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="cricketer" id="exampleRadios1" value="Kane Williamson" onChange={e => onChange(e)}/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Kane Williamson
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="cricketer" id="exampleRadios1" value="Rohit Sharma" onChange={e => onChange(e)}/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Rohit Sharma
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="cricketer" id="exampleRadios1" value="Joe Root" onChange={e => onChange(e)}/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Joe Root
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </div>
            </form>
        </>
    )
}

Ques1.propTypes={
cricketer:PropTypes.func.isRequired,
quest1:PropTypes.array
}

const mapStateToProps=(state)=>({
    question1:state.user.quest1
})
export default connect(mapStateToProps,{cricketer}) (Ques1);