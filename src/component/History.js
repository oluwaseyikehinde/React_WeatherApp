import React from 'react'
import './style.css';
import App from '../App';



const History = props => {
    
    const onSubmit = (e) => {
        e.preventDefault()
        props.onsubmit()
    }
    const handlestartDate = (e) => {
       props.handlestartDate(e.target.value)
      }
      
      const handleendDate = (e) => {
        props.handleendDate(e.target.value)
      }
      
       const handlecountry = (e) => {
        props.handlecountry(e.target.value)
      }
    return (
        <div className="container-2 text-light ml-12">
        <p className="fw-bolder">Check Historic Weather Report for 7 days</p> 
            <form onSubmit = {onSubmit}>
            <div>{props.error ? error() : null}</div>
                <div className="row">
                    <div className="col-md-3 offset.md-2">
                        <input id="inputID"
                            type="date" 
                            className="form-control" 
                            name="startDate" 
                            autoComplete="off"
                            placeholder="Input Start Date"
                            value = {props.startDate}
                            onChange = {handlestartDate}
                        />

                    </div>
                    <div className="col-md-3 bg">
                        <input id="inputID"
                            type="date" 
                            className="form-control" 
                            name="endDate" 
                            autoComplete="off"
                            placeholder="Input End Date"
                            value = {props.endDate}
                            onChange = {handleendDate}
                        />
                    </div>
                    <div className="col-md-4 offset.md-2">
                        <input id="inputID"
                            type="text" 
                            className="form-control" 
                            name="country" 
                            autoComplete="off"
                            placeholder="Country"
                            value = {props.country}
                            onChange = {handlecountry}
                        />
                    </div>
                    <div className="col-md-2 mt.md-0 text-md-left">
                        <span><button className="btn btn-info">Check</button></span>
                    </div>
                    <div className="text-center">
                        <h1>{props.data.timezone}</h1>
                        <h3>{props.data.country_code}</h3>
                        <div>
                        <p>{props.data && props.data.data && props.data.data.map(a => a.rh)}</p>
                        </div>
                    </div>
                </div>    
                
            </form>
        </div>
    )
}

function error (){
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter valid start and end dates
            <App />
        </div>
        
    )
}

export default History
