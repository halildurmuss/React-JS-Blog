import React from 'react';
import './style.css';
/**
* @author
* @function Header
**/
const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="">Anasayfa</a>
            <a href="hakkımda">Hakkımda</a>
            <a href="iletisim">İletişim</a>
        </nav>
        <div></div>
    </header>
   )
 }
export default Header