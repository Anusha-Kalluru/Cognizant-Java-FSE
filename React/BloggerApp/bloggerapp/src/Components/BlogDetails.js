import React from "react";

function BlogDetails(){

    const blogs=[
        {
            id:1,
            title:"Learning React",
            author:"Anusha"
        },
        {
            id:2,
            title:"Understanding JSX",
            author:"John"
        },
        {
            id:3,
            title:"Conditional Rendering",
            author:"David"
        }
    ];

    return(

        <div className="card">

            <h2>Blog Details</h2>

            {blogs.map(blog=>(
                <div key={blog.id} className="item">

                    <h3>{blog.title}</h3>

                    <p>Author : {blog.author}</p>

                </div>
            ))}

        </div>

    );

}

export default BlogDetails;