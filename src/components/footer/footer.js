import React,{useState,useEffect} from 'react';
import './footer.css';
import {MdEmail,MdPhone} from 'react-icons/md';
import {FaHome,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';
import {IconContext} from 'react-icons';

let sizeIConContact = '1.5vw';
let sizeIConSocial = '2.2vw';
const listFooterContent = {
    contact:[
        {icon:<MdEmail />,text:'leafire@gmail.com',sizeIcon:sizeIConContact,class:'',key:'email'},
        {icon:<MdPhone />,text:'+52 7717486709',sizeIcon:sizeIConContact,class:'list-item-icon',key:'phone'}
    ],
    social:[
        {icon:<FaFacebookF />,text:'',sizeIcon:sizeIConSocial,class:'list-item-social',key:'facebook'},
        {icon:<FaTwitter />,text:'',sizeIcon:sizeIConSocial,class:'pd-left-3 list-item-social',key:'twitter'},
        {icon:<FaInstagram />,text:'',sizeIcon:sizeIConSocial,class:'pd-left-3 list-item-social',key:'instagram'}
    ]
};

export function Footer(props) {
    return(
        <footer className='footer'>
            <ContainerFooter class={'footer-info'}>
                <FooterInfo />
            </ContainerFooter>
            <ContainerFooter class={'footer-contact'}>
                <FooterContact listItemsIcon={listFooterContent}/>
            </ContainerFooter>
        </footer>
    );
}

function ContainerFooter(props) {
    let footerClass = props.class;
    return(
        <div className={footerClass}>
            {props.children}
        </div>
    );
}

function FooterInfo(props) {
    return(
        <>
            <div className={'footer-container footer-title'}>
                <span>¿Listo para comprar?</span>
                <hr className='style-grad'/>
            </div>
            <div className={'footer-container footer-center'}>
                <span className='footer-content-5'>Visita nuestra tienda</span>
                <span className='footer-content-8'>Encontraras el mejor producto</span>
                <br/>
                <div className='footer-button-container'>
                    <a className='footer-button'>
                        <span>Al jardín</span>
                        <span className='button-arrow'></span> 
                    </a>
                </div>
            </div>
        </>
    );
}

function FooterContact(props){
    let listContact = props.listItemsIcon.contact;
    let listSocial = props.listItemsIcon.social;
    function LiItem(props){
        let classLi = props.class?props.class:'' + ' list-item';
        let objIconContext = {size:props.sizeIcon};
        return(
            <IconContext.Provider value={objIconContext}>
                <li className={classLi}>
                    {props.icon}
                    {props.text!=='' && <span className='list-item-icon'>
                        {props.text}
                    </span>}
                </li>
            </IconContext.Provider>
            );
    }
    return(
        <>
            <div className={'footer-container footer-title footer-center'}>
                <span>Contacto</span>
            </div>
            <div className={'footer-container-contact footer-center'}>
                <ul className='list-contact'>
                {
                   listContact.map((item) => <LiItem key={item.key} icon={item.icon} text={item.text} sizeIcon={item.sizeIcon} class={item.class}/>)
                }
                </ul>
                <LiItem icon={<FaHome />} text={'Fernandez de Lizardi #603 Pachuca Hgo.'} sizeIcon={sizeIConContact}/>
                <ul className='list-contact-social'>
                {
                   listSocial.map((item) => <LiItem key={item.key} icon={item.icon} text={item.text} sizeIcon={item.sizeIcon} class={item.class}/>)
                }
                </ul>
            </div>
        </>
    );
}
