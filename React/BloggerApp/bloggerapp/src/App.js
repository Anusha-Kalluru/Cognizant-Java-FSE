import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import "./index.css";

function App(){

    const showBooks=true;
    const showBlogs=true;
    const showCourses=true;

    return(

        <div className="container">

            <h1>Blogger App</h1>

            {/* Ternary Operator */}

            {showBooks ? <BookDetails/> : <h2>No Books Available</h2>}

            {/* Logical && */}

            {showBlogs && <BlogDetails/>}

            {/* Element Variable */}

            {(() => {

                let component;

                if(showCourses){

                    component=<CourseDetails/>;

                }else{

                    component=<h2>No Courses Available</h2>;

                }

                return component;

            })()}

        </div>

    );

}

export default App;