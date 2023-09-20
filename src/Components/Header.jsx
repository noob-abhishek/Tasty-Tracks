import { Link } from 'react-router-dom'
import '../App.css'


function Header (){



  

    return (
    <div className='flex justify-between shadow-md bg-sky-200 fixed w-full top-0 z-10'>



   
        <h1 className= "font-bold font-sans text-xl px-2 py-9">Tasty Tracks</h1>
        <ul className='flex py-10'>
        <li  className='px-2 font-sans'> <Link to = '/' className='home-content'>   Home </Link></li>
        <li className='px-2 font-sans'> <Link to = '/about' className='about-content'>  About us </Link></li>
          <li className='px-2 font-sans'><Link to = '/' className='home-content'> Cart </Link></li>
        </ul>
        
        

      </div>
    );
  
  }
export default Header;  