import react from 'React';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressCard, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className='flex items-center justify-between shadow-md bg-gradient-to-r from-teal-400 to-blue-500 fixed w-full top-0 z-10 px-6 py-2'>
      <h1 className="font-bold text-white text-2xl">TASTY TRACKS</h1>
      <ul className='flex items-center space-x-8 text-white'>
        <li className='transition duration-300 ease-in-out transform hover:rotate-12'>
          <Link to='/' className='hover:text-yellow-300'>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li className='transition duration-300 ease-in-out transform hover:rotate-12'>
          <Link to='/about' className='hover:text-yellow-300'>
            <FontAwesomeIcon icon={faAddressCard} />
          </Link>
        </li>
        <li className='relative transition duration-300 ease-in-out transform hover:rotate-12'>
          <Link to='/cart' className='hover:text-yellow-300'>
            <FontAwesomeIcon icon={faCartPlus} />
            <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
