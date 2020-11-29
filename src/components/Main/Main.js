import React, { useState } from 'react';
import fakeData from '../../components/fakeData/CoursesData';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';

const Main = () => {

    const [courses, setCourses] = useState([...fakeData]);
    const [cart, setCart] = useState([]);
    const enrollNowHandler = (course) => {
        console.log("habi", course);
        const newCart = [course, ...cart];
        setCart(newCart);
    }
    console.log('x');
    return (
        <div className="container">
            <div className="row">
                <div className="col-10">{courses.map(course => <Courses course={course} enrollNowHandler={enrollNowHandler}></Courses>)}</div>
                <div className="col-2"><Cart cart={cart}></Cart></div>
            </div>
        </div>
    );
};

export default Main;