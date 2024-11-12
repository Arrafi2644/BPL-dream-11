import PropTypes from "prop-types";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({selectedPlayers, handleIsActiveButton, handleRemovePlayer}) => {
    console.log(selectedPlayers)
    return (
        <div className="w-11/12 mx-auto mt-12 md:mt-16">
            {
                selectedPlayers.map(player => <SelectPlayer key={player.id} player={player} handleRemovePlayer={handleRemovePlayer}></SelectPlayer>)
            }
            <button onClick={()=>handleIsActiveButton("available")} className="btn bg-[#42ec42] hover:bg-[#65e365] border-4 border-white hover:border-white rounded-xl outline">Add More Player</button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handleIsActiveButton: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired
}

export default SelectedPlayers;