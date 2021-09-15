import React, { Component } from "react";
import coursePlan from "./CoursePlan";

export default class CourseCard extends Component{
    constructor(){
        super();
        this.state = {
            coursePlan
        };
    }



    render(){
        return(
            <>
            {this.state.coursePlan.map(({title, currency,billing, period, availablefeatures, notavailablefeatures})=>{
                return (
                    <>
                    <div key={coursePlan.id} className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                                <h6 className="card-price text-center">{currency}{billing}<span className="period">{period}</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    {availablefeatures.map((feature) => <li><span className="fa-li"><i className="fas fa-check"></i></span>{feature}</li>)}
                                    {notavailablefeatures.map((feature) => <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{feature}</li>)}
                                </ul>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
            </>
        );
    }
}