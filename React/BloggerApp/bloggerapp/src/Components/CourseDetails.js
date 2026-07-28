import React from "react";

function CourseDetails(){

    const courses=[
        {
            id:1,
            name:"React",
            duration:"6 Weeks"
        },
        {
            id:2,
            name:"Spring Boot",
            duration:"8 Weeks"
        },
        {
            id:3,
            name:"Machine Learning",
            duration:"10 Weeks"
        }
    ];

    return(

        <div className="card">

            <h2>Course Details</h2>

            {courses.map(course=>(
                <div key={course.id} className="item">

                    <h3>{course.name}</h3>

                    <p>Duration : {course.duration}</p>

                </div>
            ))}

        </div>

    );

}

export default CourseDetails;