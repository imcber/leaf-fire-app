import React,{useState} from 'react';
import './homeContainer.css';
import {useScroll} from '../useScroll';

let logo = require("../../assets/home/logo.png");
let parallax_1 = require("../../assets/home/parallax-13.png");
let parallax_2 = require("../../assets/home/parallax-24.png");

const loremDummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis sem. Phasellus faucibus dui at nibh venenatis euismod. Fusce non pharetra nulla, sed fringilla tellus. Aliquam erat volutpat. Cras fermentum congue nibh, eget aliquet arcu finibus vel. Aenean sed felis fringilla, consectetur odio vitae, fringilla sapien. Morbi facilisis orci a odio tempus, vel tincidunt risus lacinia. Nulla quis leo at felis rutrum condimentum. Suspendisse id neque id neque tempus convallis non in erat. Maecenas pharetra ex eu libero imperdiet mattis. Vivamus sed augue id purus pharetra faucibus commodo non massa.";

function HomeContainer(props){
    return(
        <>
            <section className="main-section">
                <TitleContainer listSection={props.listSection}/>
            </section>
        </>
    );
}

function NavBar(props) {
    return(
        <div className="main-navbar">
            <div>
                {props.listSection.map((item) => <ImgSection key={item.title} section={item} 
                onChangeSection={props.clickSection}/>)}
            </div>
        </div>
    );
}

function TitleContainer(props){
    const [sectionOn,setSectionOn] = useState(false);
    const [dataSectionView,setDataSectionView] = useState({});
    const [colorScroll,setColorScroll] = useState(false);
    const [navBarOn,setNavBarOn] = useState(false);
    const [parallaxScroll,setParallaxScroll] = useState({});
    const handlerScroll = (positionY) =>{
        let directionValue = scrollDirection === "up"?80:320;
        let directionValueNavBar = scrollDirection === "up"?20:120;
        if(!sectionOn){    
            if(scrollY >= directionValue){
                setColorScroll(true);
            }else{
                setColorScroll(false);
            }
            if(scrollY >= directionValueNavBar){
                setNavBarOn(true);
            }else{
                setNavBarOn(false);
            }
        }
        if(scrollY <= 150){
            setParallaxScroll({
                red:{
                    transform: 'translateY('+ scrollY/70 +'em)'
                },
                yellow:{
                    transform: 'translateY('+ -scrollY/70 +'em)'
                }
                
            });
        }
    }
    const { scrollY, scrollDirection } = useScroll(handlerScroll); //654
    const changeSection = (data,sectionOnInd) =>{
        setSectionOn(sectionOnInd);
        setDataSectionView(data);
        setNavBarOn(true);
        if(!sectionOnInd){
            setNavBarOn(false);
        }
    } 
    const goMeetUs = () => {
       document.querySelector('#meet-them-container').scrollIntoView({behavior: 'smooth'});
    }

    const goHome = () => {
        document.querySelector('.main-section').scrollIntoView({behavior: 'smooth',block:'start'});
        setSectionOn(false);
        setColorScroll(false);
        setNavBarOn(false);
     }

    return(
        <>
            <section className={'title-container'}>
                <BackImg img={parallax_1} classBack={colorScroll&&!sectionOn?'title-change-color-W':'title-change-color-B'} styleParallax={parallaxScroll.yellow}/>
                <BackImg img={parallax_2} classBack='parallax-background' styleParallax={parallaxScroll.red}/>
                <div className='elem-container'>
                    <LogoContainer navBarOn={navBarOn} goHome={goHome}/>
                    <ElemContainer navBarOn={navBarOn} listSection={props.listSection} 
                    changeSection={changeSection} goMeetUs={goMeetUs} sectionOn={sectionOn}/>
                    {sectionOn && <SectionView dataSection={dataSectionView} onChangeSection={changeSection}/>}
                </div>
            </section>
            <br/>
            {!sectionOn && <MeetThemView />}
        </>
    );
}

function LogoContainer(props) {
    return(
        <div className={"logo-container"}>
            <div className={props.navBarOn?'navbar-on-after':''}>
                <img className={props.navBarOn?'navbar-on':'logo-img'} src={logo} onClick={props.navBarOn?props.goHome:()=>{}}/>
            </div>
        </div>
    );
}

function ElemContainer(props) {
    let classSection = props.navBarOn?'pd-1 navbar-on-section-container':'pd-1';
    let classSectionOn = props.sectionOn?' navbar-section-open':''
    return(
        <>
            {!props.sectionOn &&
            <>
                <br/>
                <span className='title'>UN NUEVO CONCEPTO EN FLORES</span>
                <br/>
                <br/>
                <button className='btn-explore' onClick={props.goMeetUs}>Conócelo</button>
                <br/>
            </>
            }
            <div className={props.navBarOn?'navbar-on-after':''}>
                <div className={classSection + classSectionOn}> 
                    {
                        props.listSection.map((item) => <ImgSection key={item.title} section={item}
                        onChangeSection={props.changeSection}/>)
                    }
                </div>
            </div>
        </>      
    );
}

function ImgSection(props){
    function handleChange(){
        props.onChangeSection(props.section,true);
    }

    return(
        <button className={'btn-section '+props.section.class}>
            <img className='list-img-title' src={props.section.img} onClick={handleChange}/>
        </button>
    );
}


function MeetThemView(props) {
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
            <div className='meet-container'>
                <MeetThemComp class={"meet-rigth title-meet"} text={"¿Qué ofrecemos?"}/>
                <MeetThemComp class={"meet-rigth text-meet"} text={loremDummy}/>
            </div>
        </section>
    );
}

function BackImg(props) {
    return(
        <div className={'back-container ' + props.classBack}>
            <img className='back-img' src={props.img} style={props.styleParallax}></img>
        </div>
    );
}

function SectionView(props) {
    
    function returnHome() {
        props.onChangeSection({},false)
    }

    return(
        
        <h1 onClick={returnHome}>{props.dataSection.summary}</h1>
    );
}
export default HomeContainer;