import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';

const Player = ({ player, handleSelectPlayer }) => {
    const { name, country, image, role, battingType, biddingPrice, bowlingType } = player;
    return (
        <div className="border p-6 rounded-lg flex flex-col gap-4">
            <img className="rounded-lg w-full h-40 md:h-48 object-cover" src={image} alt="" />
            <div className='flex gap-2 items-center text-lg'>
                <span><FaUser /></span>
                <h2 className='font-bold'>{name}</h2>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 text-gray-400 items-center'>
                    <span><FaFlag /></span>
                    <p className='font-medium'>{country}</p>
                </div>
                <div>
                    <h3 className='font-medium bg-gray-200 px-2 py-1 rounded-md'>{role}</h3>
                </div>
            </div>

            <hr />

            <div>
                <div className='flex gap-2 text-gray-950 items-center'>   
                    <h3 className='font-bold'>Rating</h3>
                </div>
               
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-2  items-center'>               
                    <h3 className='font-semibold'>{battingType}</h3>
                </div>
                <div className='flex gap-2  items-center'>               
                    <h3 className='font-medium text-gray-500'>{bowlingType}</h3>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>               
                    <h3 className='font-semibold'>Price: ${biddingPrice}</h3>
                </div>
                <div>
                    <button onClick={()=>handleSelectPlayer(player)} className="btn h-auto min-h-fit p-3 bg-white border hover:bg-[#65e365]">Choose Player</button>
                </div>
            </div>


        </div>
    );
};


Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectPlayer: PropTypes.func.isRequired
}

export default Player;