import React from "react";

function App() {

    const office = {
        name: "Sky Tower Workspace",
        rent: 55000,
        address: "Bangalore"
    };

    const officeList = [
        {
            id: 1,
            name: "Sky Tower Workspace",
            rent: 55000,
            address: "Bangalore"
        },
        {
            id: 2,
            name: "Tech Park Office",
            rent: 75000,
            address: "Hyderabad"
        },
        {
            id: 3,
            name: "Business Hub",
            rent: 45000,
            address: "Chennai"
        }
    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>Office Space Rental App</h1>

            <img
                src="/office.jpg"
                alt="Office"
                width="500"
                height="300"
            />

            <hr />

            <h2>Featured Office</h2>

            <p><strong>Name:</strong> {office.name}</p>

            <p
                style={{
                    color: office.rent < 60000 ? "red" : "green"
                }}
            >
                <strong>Rent:</strong> ₹{office.rent}
            </p>

            <p><strong>Address:</strong> {office.address}</p>

            <hr />

            <h2>Available Office Spaces</h2>

            {

                officeList.map((item) => (

                    <div
                        key={item.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "8px"
                        }}
                    >

                        <h3>{item.name}</h3>

                        <p
                            style={{
                                color:
                                    item.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent : ₹{item.rent}
                        </p>

                        <p>Address : {item.address}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default App;