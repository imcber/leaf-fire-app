import React,{useState} from 'react';
import './homeContainer.css';
import {useScroll} from '../useScroll';

let logo = require("../../assets/home/logo.png");
let parallax_1 = require("../../assets/home/parallax-1.png");
let parallax_2 = require("../../assets/home/parallax-2.png");

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
            <img className='logo-navbar' src={logo}/>
        </div>
    );
}

function TitleContainer(props){
    const [sectionOn,setSectionOn] = useState(false);
    const [dataSectionView,setDataSectionView] = useState({});
    const [colorScroll,setColorScroll] = useState(false);
    const [navBarOn,setNavBarOn] = useState(false);
    const handlerScroll = (positionY) =>{
        let directionValue = scrollDirection === "up"?80:320;
        if(scrollY >= directionValue){
            setColorScroll(true);
        }else{
            setColorScroll(false);
        }
        if(scrollY < 20){
            setNavBarOn(false);
        }else{
            setNavBarOn(true);
        }
    }
    const { scrollX, scrollY, scrollDirection } = useScroll(handlerScroll); //654
    const changeSection = (data,sectionOnInd) =>{
        setSectionOn(sectionOnInd);
        setDataSectionView(data)
    } 
    const goMeetUs = () => {
       document.querySelector('#meet-them-container').scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
            {!sectionOn && 
                <section className={'title-container'}>
                    <BackImg img={parallax_1} class={colorScroll?'title-change-color-W':'title-change-color-B'}/>
                    <BackImg img={parallax_2} class={''}/>
                    <div className='elem-container'>
                        <div className={"logo-container"}>
                            <div className={navBarOn?'navbar-on-after':''}>
                                <img className={navBarOn?'navbar-on':'logo-img'} src={logo}/>
                            </div>
                        </div>
                        <br/>
                        <span className='title'>UN NUEVO CONCEPTO EN FLORES</span>
                        <br/>
                        <br/>
                        <button className='btn-explore' onClick={goMeetUs}>Conócelo</button>
                        <br/>
                        <div className="pd-1">
                            {props.listSection.map((item) => <ImgSection key={item.title} section={item}
                                onChangeSection={changeSection}/>)}
                        </div>
                    </div>
                </section>
            }
            <br/>
            {!sectionOn ?<MeetThemView />:<SectionView dataSection={dataSectionView} onChangeSection={changeSection}/>}
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
        <div className={'back-container ' + props.class}>
            <img className='back-img' src={props.img}></img>
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