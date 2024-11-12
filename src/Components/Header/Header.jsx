import PropTypes from 'prop-types';
import { RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/images/logo.png'
import dollar from '../../assets/images/dollar.png'


const Header = ({ totalCoin }) => {
  return (
    <div className='w-11/12 mx-auto  sticky top-0 left-0 z-50'>
      <div className="navbar bg-base-100 px-0 pt-6">
        <div className="navbar-start">

          <a href="#">
            <img className='w-12 md:w-16' src={logo} alt="" />
          </a>
        </div>

        <div className="navbar-end">

          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>
            </ul>
          </div>

          <button className="btn gap-2 px-3 py-2 rounded-lg bg-transparent border ml-2">{totalCoin} Coin <img src={dollar} alt="" /></button>

          <div className="dropdown ml-2 md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost text-xl ">
            <RiMenu3Line />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm right-0 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  totalCoin: PropTypes.number.isRequired
}

export default Header;