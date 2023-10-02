import { Link } from 'react-router-dom'
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faAddressCard , faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

function Header (){


const cartItems = useSelector(store => store.cart.items );
  

    return (
    <div className='flex justify-between shadow-md bg-sky-200 fixed w-full top-0 z-10'>



   
        <h1 className= "font-bold font-sans text-xl px-2 py-4">TASTY TRACKS</h1>
        <ul className='flex py-4'>
        <li  className='px-12 font-sans'> <Link to = '/' className='home-content'>   <FontAwesomeIcon icon={faHouse} /> </Link></li>
        <li className='px-8 font-sans'> <Link to = '/about' className='about-content'> <FontAwesomeIcon icon={faAddressCard} /></Link></li>
          <li className='px-16 font-sans'><Link to = '/' className='home-content'> <FontAwesomeIcon icon={faCartPlus} />  <span className='font-sans text-xs'> {cartItems.length}</span></Link></li>
        </ul>
        
        

      </div>
    );
  
  }
export default Header;  