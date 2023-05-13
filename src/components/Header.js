import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
const Header = () => {
  const [{ basket }] = useStateValue();
  console.log(basket)
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgramWKfkXFb5S4tnG0JZgQNSgkRA7o14II3NYA5hq&s"
          alt="here is"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        {/* logo */}
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="header-nav">
        <div className="header__option">
          <span className="header__option_one">Hello Guest</span>
          <span className="header__option_two">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option_one">Returns</span>
          <span className="header__option_two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_one">Your</span>
          <span className="header__option_two">Prime</span>
        </div>
        <div className="header__option-shoppingBasket">
          <Link to="/checkout">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </Link>
          <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
