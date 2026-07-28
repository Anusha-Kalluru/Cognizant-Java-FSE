import React from "react";

function ListOfPlayers() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 75 },
        { name: "Shubman Gill", score: 45 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 80 },
        { name: "Ravindra Jadeja", score: 55 },
        { name: "R Ashwin", score: 72 },
        { name: "Mohammed Shami", score: 30 },
        { name: "Jasprit Bumrah", score: 65 },
        { name: "Mohammed Siraj", score: 40 },
        { name: "Kuldeep Yadav", score: 85 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {lowScorers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListOfPlayers;