import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectPlayer = ({player, handleRemovePlayer}) => {

    const {image, name, biddingPrice, role} = player;

    return (
        <div className="border rounded-xl p-6 mb-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-6">
                <img className=" w-24 h-24 object-cover rounded-2xl"  src={image} alt="" />
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-950">{name}</h2>
                    <p className="text-gray-500">{role}</p>
                    <p className="text-gray-500">Price:${biddingPrice}</p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleRemovePlayer(player.id)} className="text-xl text-red-500"><RiDeleteBinLine /></button>
            </div>
        </div>
    );
};

SelectPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired
}

export default SelectPlayer;