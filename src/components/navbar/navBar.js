import React,{useState,useEffect} from 'react';
import './navBar.css';
import { layoutGenerator } from 'react-break';
import {TiThMenu} from 'react-icons/ti';
import {IconContext} from 'react-icons';

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');

export function NavBar(props){
    return(
        <div className={props.navBarOn?'solid-navbar-container':'solid-navbar-container-close'}>
            <OnMobile>
                <IconMenu />
            </OnMobile>
        </div>
    );
}

function IconMenu(props) {
    const [openContainer,setOpenContainer] = useState(false);

    return(
        <IconContext.Provider value={{size:'2em', className: 'icon-navbar'}} >
            <div className='menu-mobile-icon'>
                <a onClick={() =>setOpenContainer(true)}><TiThMenu /></a>
            </div>
            {openContainer && <MobileMenu />}
        </IconContext.Provider>
    );
}

function MobileMenu(props){
    return(
        <div className='section-container-navbar'>

        </div>
    );
}