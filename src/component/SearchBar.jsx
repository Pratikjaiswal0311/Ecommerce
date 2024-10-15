import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import searchIcon from '../assets/serach.png'
import crossIcon from '../assets/cross.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection'))
            setVisible(true);
        else
            setVisible(false);
    }, [location])
    return showSearch && visible ?
        (
            <div className='border-t border-b bg-gray-50 text-center'>
                <div className='inline-flex items-center justify-center border-gray-400 px-5 py-2 my-5 mx-3/4 sm:1/2'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
                    <img className='w-4' src={searchIcon} />
                    <div>
                        <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={crossIcon} />
                    </div>
                </div>
            </div>
        ) : null;
}

export default SearchBar