import React from 'react'
import './Header.css'
import shoppe from '../assets/img/SHOPPE.png'
import search from '../assets/img/search-icon.png'
import shop from '../assets/img/shopping.png'
import user from '../assets/img/user-icon.png'


function Header() {
    return (
        <div className='header container'>
            <div className='navBar df_spaceB'>
                <img src={shoppe} alt='img' />
                <div className='Lists df_spaceB'>
                    <ul className='navBar__list df_spaceB'>
                        <li className='navBar__list_item'>
                            <a href='#'>Shop</a>
                        </li>
                        <li className='navBar__list_item'>
                            <a href='#'>Blog</a>
                        </li>
                        <li className='navBar__list_item'>
                            <a href='#'>Our Story</a>
                        </li>
                    </ul>

                    <ul className='navBar__iconList df_spaceB'>
                        <li className='navBar__iconList_item'>
                            <img src={search} alt='img' />
                        </li>
                        <li className='navBar__iconList_item'>
                            <img src={shop} alt='img' />
                            <span className='span'>
                                {window.localStorage.getItem('key')}
                            </span>
                        </li>
                        <li className='navBar__iconList_item'>
                            <img src={user} alt='img' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    )
}

export default Header