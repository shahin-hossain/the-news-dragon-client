import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="the dragon news logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                {/* 
                1. install moment js
                2. import 
                3. display > format 
                4.-> dddd -> Day full
                  -> MMMM -> Month Full
                  -> Do -> D = Day, o = (numbering like 1st,2nd,3rd,4th) 
                  -> YYYY -> Year Full
                */}
                <p>
                    {moment().format("dddd, MMMM D, YYYY")}
                </p>

            </div>

        </div>
    );
};

export default Header;