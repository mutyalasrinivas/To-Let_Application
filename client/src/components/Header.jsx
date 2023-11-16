import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';

const Header=()=>{
    return (
       <header className='shadow-md bg-orange-100'  >
        <div className='flex  justify-between p-3 items-center  '>
          <Link to={'/'}> 
          <img alt="logo" src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs3/298226193/original/63b58a70c467f90841a52236ba64527723d8e72e.png" 
           className='w-24 '/>
          </Link>
          <form className='flex '>
          <input className=' bg-transparent focus:outline-none w-24 sm:w-64'type="text" name="search" placeholder="Search..."/>
          <button>
          <FaSearch className='text-slate-700'/>
          </button>
          </form>
          <ul className='flex flex-wrap gap-5 mr-10'>
            <Link to='/'>
            <li className='hover:text-red-500 hidden sm:inline  '>Home</li>
            </Link>
             <Link to={'/about'}>
             <li className='hover:text-red-500 hidden sm:inline' >About</li>
             </Link>
             <Link to={'/signin'}>
             <li className='hover:text-red-500'>Signin</li>
             </Link>
          </ul>
        </div>
       </header>
       )
}

export default Header;