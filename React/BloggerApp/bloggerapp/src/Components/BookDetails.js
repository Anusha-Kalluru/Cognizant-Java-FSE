import React from "react";

function BookDetails() {

    const books = [
        {
            id:1,
            name:"React Guide",
            author:"Jordan Walke",
            price:"$25"
        },
        {
            id:2,
            name:"Java Complete Reference",
            author:"Herbert Schildt",
            price:"$35"
        },
        {
            id:3,
            name:"Python Crash Course",
            author:"Eric Matthes",
            price:"$30"
        }
    ];

    return(

        <div className="card">

            <h2>Book Details</h2>

            {books.map(book=>(
                <div key={book.id} className="item">

                    <h3>{book.name}</h3>

                    <p>Author : {book.author}</p>

                    <p>Price : {book.price}</p>

                </div>
            ))}

        </div>

    );

}

export default BookDetails;