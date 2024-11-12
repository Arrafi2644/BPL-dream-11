import './MainHeader.css'
import PropTypes from 'prop-types';

const MainHeader = ({ handleIsActiveButton, isActive, selectedPlayers }) => {
    // console.log(isActive)
    return (
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-2 items-center justify-center md:justify-between">
            <div>
                <h2 className="font-bold text-xl md:text-2xl text-gray-950">{isActive.available ? "Available" : `Selected(${selectedPlayers.length}/6)`}</h2>
            </div>
            <div className="flex ">

                <div className="join">

                    <button onClick={() => handleIsActiveButton("available")} className={`${isActive.available ? "btn px-6 rounded-xl bg-white join-item active text-gray-950" : "btn px-6 rounded-xl bg-white join-item text-gray-500"}`}>Available</button>
                    <button onClick={() => handleIsActiveButton("selected")} className={`${!isActive.available ? "btn px-6 rounded-xl bg-white join-item active text-gray-950" : "btn px-6 rounded-xl bg-white join-item text-gray-500"}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
        </div>
    );
};

MainHeader.propTypes = {
    handleIsActiveButton: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    selectedPlayers: PropTypes.array.isRequired
}

export default MainHeader;