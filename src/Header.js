import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./stateProvider";

function Header() {
    const [{basket, user}] = useStateValue();
    console.log(basket);
    console.log(user);
  return (
    <nav className='header'>

      <Link to='/'>
        <img
          className='header_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon'
        />
      </Link>

      <div className='header_search'>
        <input
          type='text'
          className='header_searchInput'
        />

        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>

        <Link to='/login' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>
              Hello Guest
            </span>

            <span className='header_optionLineTwo'>
              Sign In
            </span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>
              Returns
            </span>

            <span className='header_optionLineTwo'>
              Orders
            </span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>
              Your 
            </span>

            <span className='header_optionLineTwo'>
                Prime
            </span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_basketCount'>{basket.length}</span>

            <span className='header_optionLineTwo'>
              Checkout
            </span>
          </div>
        </Link>

      </div>

    </nav>
  );
}

export default Header;