import PropTypes from 'prop-types';
import background from '../../assets/images/bg-shadow.png'
import banner_img from '../../assets/images/banner-main.png'

const Banner = ({ handleAddCoin }) => {
    return (
        <div className='w-11/12 mx-auto mb-12 md:mb-16'>
        <div
            className="hero min-h-max bg-gray-800 py-16 rounded-xl mt-4 md:mt-6 bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${background})`
            }}>

            <div className="hero-content text-neutral-content text-center ">
                <div className="w-full md:px-6 flex flex-col items-center justify-center">
                    <img className='mb-6 w-36 md:w-44 lg:w-60 ' src={banner_img} alt="" />
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5 md:text-lg font-semibold">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <button onClick={() => handleAddCoin()} className="btn bg-[#42ec42] hover:bg-[#65e365] border-4 border-gray-900 hover:border-gray-800 outline  outline-[#42ec42] hover:outline-[#65e365] font-bold text-gray-800">Claim Free Credit</button>
                </div>
            </div>
        </div>
        </div>


    );
};

Banner.propTypes = {
    handleAddCoin: PropTypes.func.isRequired
}

export default Banner;