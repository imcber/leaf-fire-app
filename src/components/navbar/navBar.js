import React,{useState,useEffect} from 'react';
import './navBar.css';
import { layoutGenerator } from 'react-break';
import {TiThMenu} from 'react-icons/ti';
import {IconContext} from 'react-icons';

const layout = layoutGenerator({
    mobile: 768,
    desktop: 992,
  });
const OnMobile = layout.isAtMost('mobile');
const OnDesktop = layout.is('desktop')

//SOLID NAVBAR
export function NavBar(props){
    return(
        <div className={props.navBarOn?'solid-navbar-container':'solid-navbar-container-close'}>
            <OnMobile>
                <IconMenu navBarOn={props.navBarOn} openContainerMobile={props.openContainerMobile} handlerClick={props.handlerClick}/>         
            </OnMobile>
        </div>
    );
}

//ICON MENU THAT OPEN THE NAV BAR, ONLY MUST BE WORK IN MOBILE
function IconMenu(props) {
    return(
        <IconContext.Provider value={{size:'2em', className: 'icon-navbar'}} >
            <div className='menu-mobile-icon'>
                <a onClick={props.handlerClick}><TiThMenu /></a>
            </div>
        </IconContext.Provider>
    );
}