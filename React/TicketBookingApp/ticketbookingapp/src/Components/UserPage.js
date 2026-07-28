import React from "react";

function UserPage() {
  const flights = [
    {
      id: 1,
      from: "Hyderabad",
      to: "Bangalore",
      price: "$120"
    },
    {
      id: 2,
      from: "Chennai",
      to: "Delhi",
      price: "$180"
    },
    {
      id: 3,
      from: "Mumbai",
      to: "Kolkata",
      price: "$160"
    }
  ];

  return (
    <div className="card">

      <h2>User Dashboard</h2>

      <p>Book your tickets below.</p>

      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>

              <td>
                <button
                  onClick={() =>
                    alert("Ticket booked successfully!")
                  }
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default UserPage;