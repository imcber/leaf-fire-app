import React,{useState} from 'react';
import './homeContainer.css';

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
    
    function changeSection(data,sectionOnInd){
        setSectionOn(sectionOnInd);
        setDataSectionView(data)
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
                        <button className='btn-explore'>Conócelo</button>
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
        <section className='meet-them'>

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