import React, { useState } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

import "./index.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="container">

      <h1>Ticket Booking App</h1>

      <div className="btn-group">

        {loggedIn ? (

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>

        ) : (

          <button onClick={() => setLoggedIn(true)}>
            Login
          </button>

        )}

      </div>

      {loggedIn ? <UserPage /> : <GuestPage />}

    </div>

  );

}

export default App;