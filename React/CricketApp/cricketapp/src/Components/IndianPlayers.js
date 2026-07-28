import React from "react";

function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const oddTeam = [odd1, odd2, odd3];
    const evenTeam = [even1, even2, even3];

    const T20Players = [
        "Virat",
        "Rohit",
        "Hardik"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Saha"
    ];

    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <ul>
                {
                    oddTeam.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                {
                    evenTeam.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

            <h2>Merged Players</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

        </div>

    );

}

export default IndianPlayers;