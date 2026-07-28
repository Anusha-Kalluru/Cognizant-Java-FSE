import React from "react";

function GuestPage() {
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
      <h2>Guest Dashboard</h2>

      <p>You can browse available flights.</p>

      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="note">
        Login to book tickets.
      </p>
    </div>
  );
}

export default GuestPage;