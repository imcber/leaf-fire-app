import React from 'react';
import './imgsection.css'

//MOBILE MENU, THIS SHOW BIGGER ICON
export function MobileMenu(props){
    const openContainer = props.openContainer?'section-container-navbar':'section-container-navbar-close';
    return(
        <div className={openContainer}>
            <div className={'inner-cont-icon'}>
                {   
                    props.listSection.map((item) => <ImgSection key={item.title} section={item}
                    onChangeSection={props.changeSection} ownSectionOn={props.ownSectionOn}/>)
                }
            </div>
        </div>
    );
}

//GENERATOR BUTTON OF AN ICON
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
