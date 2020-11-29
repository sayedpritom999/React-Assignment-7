import React from 'react';
import css from './Courses.css'

const Courses = (props) => {
    const {image, name, title, price} = props.course;
    const enrollNowHandler = props.enrollNowHandler;
    return (
        <div className="">
            <div className="card">
                <div className="">
                    <div className="row">
                        <div className="col-lg-4"><img className="img-fluid" src={image}/></div>
                        <div className="col-lg-8 text-left">
                            <h4>{name}</h4>
                            <p>{title}</p>
                            <h6>${price}</h6>
                            <button className="btn btn-primary" onClick={()=> enrollNowHandler(props.course)}>Enroll Now!</button>                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Courses;