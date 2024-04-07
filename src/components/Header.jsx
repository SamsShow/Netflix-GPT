import React from 'react';
import Logo from '../assets/Netflix_Logo_PMS.png';

const Header = () => {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-52' 
            src={Logo} alt="logo" />
        </div>
    );
};

export default Header;