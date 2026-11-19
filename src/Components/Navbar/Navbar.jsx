import React, { use } from 'react';
import { NavLink } from 'react-router';
import { UserContext } from '../../Context/UserContext';


const Navbar = () => {

    return (
       <nav className='p-3 bg-gray-100'>
        <ul className='flex gap-5 justify-center items-center'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/regester'>Registration</NavLink></li>
            <li><NavLink to='/Login'>Login</NavLink></li>
        </ul>
        <div>
          
        </div>
       </nav>
    );
};

export default Navbar;