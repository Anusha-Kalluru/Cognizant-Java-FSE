import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                name="Anusha"
                school="SRM University AP"
                total={480}
                goal={5}
            />
        </div>
    );
}

export default App;