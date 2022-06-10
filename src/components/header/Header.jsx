import React from "react";

const Header = () => {
  return (
    <header>
      {/* делаю левую часть шапки */}
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3>Switcheroo's shoes</h3>
          <p>My favorite collection of shoes</p>
        </div>
      </div>
      {/* делаю правую часть шапки */}
      <ul className="headerRight">
        <li className="mr-30">
          <img className="mr-10" width={30} height={30} src="/img/card.png" />
          <span>1250$</span>
        </li>
        <li>
          <img width={40} height={40} src="/img/user.png" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
