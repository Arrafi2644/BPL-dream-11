import footerLogo from '../../assets/images/logo-footer.png'
import footerBtnBg from '../../assets/images/footer-btn-bg.png'
import newsLatterBg from '../../assets/images/bg-shadow.png'
import newsLatterBtnBg from '../../assets/images/newslatter-sub-btn-bg.png'

const NewsLatterFooter = () => {
    return (
        <div className="mt-56 relative flex flex-col justify-center items-center">
            {/* News latter  */}
           <div className='w-11/12 mx-auto absolute -top-44 p-6 rounded-xl bg-[#ffffff38] border border-white'>
           <div className=" p-6 md:p-16 lg:p-20 border-2 rounded-xl bg-white bg-no-repeat bg-center bg-cover" style={{
                backgroundImage: `url(${newsLatterBg})`
            }}>
                <div className='text-center w-full md:w-2/4 mx-auto flex flex-col gap-4 '>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-950'>Subscribe to our Newsletter</h2>
                    <p className='font-medium text-gray-500'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex flex-col md:flex-row gap-2 items-center justify-center mx-auto'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow h-auto" placeholder="Enter your email" />
                        </label>
                        <button className="btn h-auto min-h-fit px-4 py-2 font-bold text-base md:text-lg bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${newsLatterBtnBg})`}}>Subscribe</button>
                    </div>
                </div>
            </div>
           </div>
            {/* Footer  */}
            <div className="bg-[#06091A]">
                <div className="w-11/12 mx-auto pt-52">
                    <div className=' md:mt-10 mb-6 md:mb-10'>
                        <img className='w-24 md:w-36 mx-auto ' src={footerLogo} alt="" />
                    </div>
                    <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white pb-12 md:pb-16 px-2 pt-4">
                        <nav>
                            <h2 className='font-bold text-base md:text-lg mb-2 md:mb-4'>About us</h2>
                            <p className='text-gray-500 font-medium w-full text-sm md:text-base lg:w-3/5'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </nav>
                        <nav>
                            <h2 className='font-bold text-base  mb-2 md:mb-4 md:text-lg'>Quick Links</h2>

                            <li className='text-gray-500 font-medium text-sm md:text-base '><a className="link link-hover ">Home</a></li>
                            <li className='text-gray-500 font-medium text-sm md:text-base '><a className="link link-hover ">Services</a></li>
                            <li className='text-gray-500 font-medium text-sm md:text-base '><a className="link link-hover ">About</a></li>
                            <li className='text-gray-500 font-medium text-sm md:text-base '><a className="link link-hover ">Contact</a></li>
                        </nav>
                        <form>
                            <h2 className="font-bold text-base md:text-lg  mb-2 md:mb-4">Subscribe</h2>
                            <p className='font-medium mb-4 text-gray-500 text-sm md:text-base'>Subscribe to our newsletter for the latest updates.</p>
                            <fieldset className="form-control w-full">

                                <div className="join rounded-xl w-full">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered w-full join-item h-auto px-[6px] md:px-2 " />
                                    <button className="btn h-auto min-h-fit py-3 px-4 md:px-6 text-gray-950 font-bold outline-none join-item " style={{ backgroundImage: `url(${footerBtnBg})` }}>Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </footer>

                    <hr />

                    <div className='py-6 text-center text-gray-500 font-medium'>
                        <p>&copy; 2024 Your Company All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLatterFooter;