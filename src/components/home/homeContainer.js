import React,{useState,useEffect} from 'react';
import './homeContainer.css';
import {useScroll} from '../useScroll';
import {Footer} from '../footer/footer';
import {NavBar} from '../navbar/navBar';
import { layoutGenerator } from 'react-break';
import { MobileMenu } from '../imgsection/imgsection';


const logo = require("../../assets/home/logo.png");
const parallax_1 = require("../../assets/home/parallax-1.png");
const parallax_2 = require("../../assets/home/parallax-2.png");
const loremDummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis sem. Phasellus faucibus dui at nibh venenatis euismod. Fusce non pharetra nulla, sed fringilla tellus. Aliquam erat volutpat. Cras fermentum congue nibh, eget aliquet arcu finibus vel. Aenean sed felis fringilla, consectetur odio vitae, fringilla sapien. Morbi facilisis orci a odio tempus, vel tincidunt risus lacinia. Nulla quis leo at felis rutrum condimentum. Suspendisse id neque id neque tempus convallis non in erat. Maecenas pharetra ex eu libero imperdiet mattis. Vivamus sed augue id purus pharetra faucibus commodo non massa.";
const layout = layoutGenerator({
    mobile: 768,
    desktop: 992,
  });
const OnMobile = layout.isAtMost('mobile');
const OnDesktop = layout.is('desktop');

//PRINCIPAL CONTAINER
function HomeContainer(props){
    document.querySelector('body').scrollIntoView({behavior: 'smooth',block:'start'});
    return(
        <>
            <section className="main-section">
                <TitleContainer listSection={props.listSection}/>
            </section>
        </>
    );
}

// THIS CONTAIN THE PRINCIPAL VIEW AND HAVE THE CONTROL OF ALL :( NEED TO FIX IT!!
function TitleContainer(props){
    //FLAG SECTION
    const [sectionOn,setSectionOn] = useState(false);
    //OBJECT OF DATA SECTIONS 
    const [dataSectionView,setDataSectionView] = useState({});
    //FLAG, THIS CHANGE THE COLOR WITH THE SCROLL POSITION
    const [colorScroll,setColorScroll] = useState(false);
    //FLAG, THIS SHOW THE NAVBAR
    const [navBarOn,setNavBarOn] = useState(false);
    //OBJECT OF PARALLAX
    const [parallaxScroll,setParallaxScroll] = useState({});
    //ACTUAL SECTION OPEN
    const [ownSectionOn,setOwnSectionOn] = useState('');
    //FLAG, MOBILE SECTIONS
    const [openContainerMobile,setOpenContainerMobile] = useState(false);
    //EVENT SCROLL
    const handlerScroll = (positionY) =>{
        let directionValue = scrollDirection === "up"?80:320;
        let directionValueNavBar = scrollDirection === "up"?150:320;
        if(!sectionOn && !openContainerMobile){  
            let bandDirectionValue = scrollY >= directionValue?true:false;
            let bandDirectionValueNavBar = scrollY >= directionValueNavBar?true:false;
            setColorScroll(bandDirectionValue);
            setNavBarOn(bandDirectionValueNavBar);
        }
        if(scrollY <= 150){
            setParallaxScroll({
                red:{
                    transform: 'translateY('+ (scrollY/50) +'vw)'
                },
                yellow:{
                    transform: 'translateY('+ -scrollY/70 +'vw)'
                }
            });
        }
    }
    const { scrollY, scrollDirection } = useScroll(handlerScroll);
    //CHANGE SECTION
    const changeSection = (data,sectionOnInd) =>{
        setOwnSectionOn(data.title);
        setSectionOn(sectionOnInd);
        setDataSectionView(data);
        setNavBarOn(true);
        setOpenContainerMobile(!openContainerMobile);
        if(!sectionOnInd){
            setNavBarOn(false);
        }
        document.querySelector('.main-section').scrollIntoView({behavior: 'smooth',block:'start'});
    } 
    //GO TO THE MEET US SECTION
    const goMeetUs = () => {
       document.querySelector('.meet-container').scrollIntoView({behavior: 'smooth'});
    }
    // HOME BUTTON
    const goHome = () => {
        document.querySelector('.main-section').scrollIntoView({behavior: 'smooth',block:'start'});
        setTimeout(() => {
            setNavBarOn(false);
            setSectionOn(false);
            setColorScroll(false);
            setOwnSectionOn('');
            setOpenContainerMobile(false);
        },200);
     }
    
     
    const openMenuMobile = () =>{
        if(!navBarOn){
            setNavBarOn(!navBarOn);
        }
        setOpenContainerMobile(!openContainerMobile);
    };
    return(
        <>
            <NavBar navBarOn={navBarOn} openContainerMobile={openContainerMobile} handlerClick={openMenuMobile} listSection={props.listSection}/>
            <section className={!sectionOn?'title-container':'title-container-section-on'}>
                <BackImg img={parallax_1} classBack={colorScroll&&!sectionOn?'title-change-color-W':'title-change-color-B'} styleParallax={parallaxScroll.yellow}/>
                <BackImg img={parallax_2} classBack='parallax-background' styleParallax={parallaxScroll.red}/>
                <div className={'elem-container'}>
                    <LogoContainer navBarOn={navBarOn} goHome={goHome} sectionOn={sectionOn}/>
                    {!openContainerMobile && <ElemContainer navBarOn={navBarOn} listSection={props.listSection} 
                    changeSection={changeSection} goMeetUs={goMeetUs} sectionOn={sectionOn} ownSectionOn={ownSectionOn}
                    openContainerMobile={openContainerMobile}
                    />}
                </div>
                {sectionOn && <SectionView dataSection={dataSectionView}/>}
            </section>
            <br/>
            {!sectionOn && !openContainerMobile && <AboutUs />}
            {!openContainerMobile && <Footer/>}
            
            <OnMobile>
                <MobileMenu openContainer={openContainerMobile} listSection={props.listSection} 
                changeSection={changeSection} ownSectionOn={ownSectionOn}/>
            </OnMobile>
        </>
    );
}
//THIS CONTAIN IMG LOGO
function LogoContainer(props) {
    return(
        <div className={!props.sectionOn?'logo-container':''}>
            <div className={props.navBarOn?'navbar-on-after':''}>
                <OnDesktop>
                    <img className={props.navBarOn?'navbar-on':'logo-img'} src={logo} onClick={props.navBarOn?props.goHome:()=>{}}/>
                </OnDesktop>
                <OnMobile>
                    <img className={props.navBarOn?'navbar-on-mobile':'logo-img-mobile'} src={logo} onClick={props.navBarOn?props.goHome:()=>{}}/>
                </OnMobile>
            </div>
        </div>
    );
}

//CONTAIN IMG SECTION
function ElemContainer(props) {
    let classSectionOn = props.sectionOn?'section-container-on':'';
    let classSection = props.navBarOn?'navbar-on-section-container ' +classSectionOn:'pd-1';
    return(
        <>
            {!props.sectionOn &&
                <div>
                    <div className='pd-top-3-vw'>
                        <span className='main-title'>UN NUEVO CONCEPTO EN FLORES</span>
                    </div>
                    <div className='pd-top-3-vw'>
                        <button className='btn-explore' onClick={props.goMeetUs}>Conócelo</button>
                    </div>
                </div>
            }
            <OnDesktop>
                <div className={classSection}> 
                    {
                        props.listSection.map((item) => <ImgSection key={item.title} section={item}
                        onChangeSection={props.changeSection} sectionOn={props.sectionOn} ownSectionOn={props.ownSectionOn}/>)
                    }
                </div>
            </OnDesktop>
        </>      
    );
}

//CREATOR IMG SECTION
function ImgSection(props){
    let classSection = props.ownSectionOn === props.section.title?'section-on-img':'';
    function handleChange(){
        props.onChangeSection(props.section,true);
    }

    return(
        <button className={'btn-section '+props.section.class + ' ' + classSection}>
            <img className={'list-img-title'} src={props.section.img} onClick={handleChange}/>
        </button>
    );
}

//SECTION ABOUT US
function AboutUs(props) {
    function MeetThemComp(props) {
        return(
            <div className={props.class}>
                <span>{props.text}</span>
            </div>
        );
    }
    return(
        <section id='meet-them-container'>
            <div className='meet-container'>
                <MeetThemComp class={"meet-left title-meet"} text={"¿Quiénes somos?"}/>
                <MeetThemComp class={"meet-left text-meet"} text={loremDummy}/>
            </div>
            <div className='meet-container pd-1-top pd-5-bottom'>
                <MeetThemComp class={"meet-rigth title-meet"} text={"¿Qué ofrecemos?"}/>
                <MeetThemComp class={"meet-rigth text-meet"} text={loremDummy}/>
            </div>
        </section>
    );
}

//PARALLAX IMG
function BackImg(props) {
    return(
        <div className={'back-container ' + props.classBack}>
            <img className='back-img' src={props.img} style={props.styleParallax}></img>
        </div>
    );
}

//SECTION VIEW
function SectionView(props) {
    return(
        <div className='section-view-active'>    
            <div>
                <img src={props.dataSection.img} className={'img-section'}/>
            </div>
            <div>
                <span className={'summary-section'}>{props.dataSection.summary}</span>
            </div>
        </div>
    );
}
export default HomeContainer;