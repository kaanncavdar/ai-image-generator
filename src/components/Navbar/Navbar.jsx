import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link , useNavigate } from "react-router-dom";
import { doSignOut } from '../../firebase/auth';

import './Navbar.css'; // Navbar.css dosyasını dahil edin

const Navbar = () => {
    const userLoggedIn = localStorage.getItem('IsLoggedIn')
    const navigate = useNavigate()
    
    return (
        <nav className="navbar">
            <ul className="nav-ul">
                <li className='items-center'><Link to='/'> <FaHome className='mt-1 p-0'/>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/help'>Help</Link></li>
                { userLoggedIn ?
                    <>
                        <li className="right"><Link to='/profile'>Profile</Link></li>
                        <li className="right"><button onClick={() => { doSignOut().then(() => { navigate('/login'); localStorage.removeItem('IsLoggedIn') }) }} >Logout</button></li>
                    </>
                    :
                    <>
                        <li className="right"><Link to='/login'>Log in</Link></li>
                        <li className="right"><Link to='/register'>Register</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navbar;
