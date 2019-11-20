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
    const openContainerMobile = props.openContainerMobile;
    return(
        <div className={props.navBarOn?'solid-navbar-container':'solid-navbar-container-close'}>
            <OnMobile>
                <IconMenu navBarOn={props.navBarOn} openContainerMobile={props.openContainerMobile} handlerClick={props.handlerClick}/>         
            </OnMobile>
        </div>
    );
}

function IconMenu(props) {

    return(
        <IconContext.Provider value={{size:'2em', className: 'icon-navbar'}} >
            <div className='menu-mobile-icon'>
                <a onClick={props.handlerClick}><TiThMenu /></a>
            </div>
        </IconContext.Provider>
    );
}

function MobileMenu(props){
    const openContaner = props.openContainer?'section-container-navbar':'section-container-navbar-close';

    return(
        <div className={openContaner}>
            <div className={'inner-cont-icon'}>
                {   
                    props.listSection.map((item) => <ImgSection key={item.title} section={item}
                    onChangeSection={props.changeSection} sectionOn={props.sectionOn} ownSectionOn={props.ownSectionOn}/>)
                }
            </div>
        </div>
    );
}

function ImgSection(props){
    let classSection = props.ownSectionOn === props.section.title?'section-on-img':'';
    function handleChange(){
        props.onChangeSection(props.section,true);
    }

    return(
        <button className={'btn-section-mobile '+ classSection}>
            <img className={'list-img-title-mobile'} src={props.section.img} onClick={handleChange}/>
        </button>
    );
}