import React,{useState,useEffect} from 'react';
import './footer.css';

export function Footer(props) {
    return(
        <footer className='footer'>
            <ContainerFooter class={'footer-info'}>
                <FooterInfo class={'footer-content'}/>    
            </ContainerFooter>
            <ContainerFooter class={'footer-contact'}>
                <h1>quiobole</h1>
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
        <div className={props.class}>
            <span>¿Listo para comprar?</span>
        </div>
    );
}