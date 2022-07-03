import React from 'react'
import './style.css';

const Form = props => {
    return (
        <div className="container-1 ">
 
            <form onSubmit={props.loadweather}>
            <p className = " text-white">Search any location for the weather condition</p>
            <div>{props.error ? error() : null}</div>
                <div className="row">
                    <div className="col-md-4 offset.md-2">
                        <input id="inputID"
                            type="text" 
                            className="form-control" 
                            name="city" 
                            autoComplete="off"
                            placeholder="City"
                        />
                    </div>
                    <div className="col-md-4 bg-color-danger">
                        <input id="inputID"
                            type="text" 
                            className="form-control" 
                            name="country" 
                            autoComplete="off"
                            placeholder="Country"
                        />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-success text-justify-center">Search</button>
                    </div>
                </div>    
            </form>
        </div>
    )
}

function error (){
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default Form
