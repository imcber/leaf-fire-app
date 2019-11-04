import React,{useState} from 'react';
import './homeContainer.css';
import {useScroll} from '../useScroll';

let logo = require("../../assets/home/logo.png");
let parallax_1 = require("../../assets/home/parallax-1.png");
let parallax_2 = require("../../assets/home/parallax-2.png");

function HomeContainer(props){
    return(
        <section className="main-section">
            <TitleContainer listSection={props.listSection}/>
        </section>
    );
}

function TitleContainer(props){
    const [sectionOn,setSectionOn] = useState(false);
    const [dataSectionView,setDataSectionView] = useState({});
    const { scrollX, scrollY, scrollDirection } = useScroll(); //654
    
    function changeSection(data,sectionOnInd){
        setSectionOn(sectionOnInd);
        setDataSectionView(data)
    }
    const goMeetUs = e => {
        let scrollAux = 0;
        while(scrollAux < 654){
            window.scrollTo(0,scrollAux);
            console.log(scrollAux);
            scrollAux++;
        }
    }

    return(
        <>
            {!sectionOn && 
                <section className='title-container'>
                    <BackImg img={parallax_1}/>
                    <BackImg img={parallax_2}/>
                    <div className='elem-container'>
                        <img className="logo-img" src={logo}></img>
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
            {!sectionOn ?<MeetThemView />:<SectionView dataSection={dataSectionView} onChangeSection={changeSection}/>}
        </>
    );
}

function ImgSection(props){
    function handleChange(){
        props.onChangeSection(props.section,true);
    }

    return(
        <a className={props.section.class}>
            <img className='list-img-title' src={props.section.img} onClick={handleChange}/>
        </a>
    );
}


function MeetThemView(props) {
    return(
        <section>
            <div className='meet-them'>
                <div className="meet-left meet-container">
                    <div>
                        <span className="title-meet">¿Quiénes somos?</span>
                    </div>
                    <div>
                        <span className="text-meet">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis sem. Phasellus faucibus dui at nibh venenatis euismod. Fusce non pharetra nulla, sed fringilla tellus. Aliquam erat volutpat. Cras fermentum congue nibh, eget aliquet arcu finibus vel. Aenean sed felis fringilla, consectetur odio vitae, fringilla sapien. Morbi facilisis orci a odio tempus, vel tincidunt risus lacinia. Nulla quis leo at felis rutrum condimentum. Suspendisse id neque id neque tempus convallis non in erat. Maecenas pharetra ex eu libero imperdiet mattis. Vivamus sed augue id purus pharetra faucibus commodo non massa.</span>
                    </div>
                </div>
                <div className="meet-rigth meet-container">
                    <div>
                        <span className="title-meet">¿Qué ofrecemos?</span>
                    </div>
                    <div>
                        <span className="text-meet">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis sem. Phasellus faucibus dui at nibh venenatis euismod. Fusce non pharetra nulla, sed fringilla tellus. Aliquam erat volutpat. Cras fermentum congue nibh, eget aliquet arcu finibus vel. Aenean sed felis fringilla, consectetur odio vitae, fringilla sapien. Morbi facilisis orci a odio tempus, vel tincidunt risus lacinia. Nulla quis leo at felis rutrum condimentum. Suspendisse id neque id neque tempus convallis non in erat. Maecenas pharetra ex eu libero imperdiet mattis. Vivamus sed augue id purus pharetra faucibus commodo non massa.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BackImg(props) {
    return(
        <div className='back-container'>
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