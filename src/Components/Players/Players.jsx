import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({handleSelectPlayer}) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("players.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    return (
        <div className="w-11/12 mx-auto mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    players.map(player => <Player
                         key={player.id}
                          player={player}
                          handleSelectPlayer= {handleSelectPlayer}
                          ></Player>)
                }
            </div>
        </div>
    );
};


Players.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired
}

export default Players;