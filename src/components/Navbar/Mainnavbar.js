import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Mainnavbar.css';

const Mainnavbar = props =>(
  <header className="navbar">
    <nav className="navbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="mainlogo"><a href="/">Asset<b>Buddy</b></a></div>
      <div className="spacer" />
      
    </nav>
  </header>
);

export default Mainnavbar;
