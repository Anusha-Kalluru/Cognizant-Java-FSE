import React from "react";

import Counter from "./Components/Counter";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {

    return (

        <div style={{ margin: "20px" }}>

            <h1>Event Handling Examples</h1>

            <Counter />

            <hr />

            <CurrencyConvertor />

        </div>

    );

}

export default App;