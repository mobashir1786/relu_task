import React from 'react';
import './navbar.css';
import navbardata from '../../assets/navbardata';
import logout from '../../assets/logout.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navlist">
                {
                    navbardata.map((n) => (<div className="menulist" key={n.id}>
                        <img src={n.img} alt="xyz" />
                        <div>{n.name}</div>
                    </div>))
                }
            </div>
            <div className="menulist">
                <img src={logout} alt="xyz" />
                <div className='logout'>Log out</div>
            </div>
        </div>
    )
}

export default Navbar
