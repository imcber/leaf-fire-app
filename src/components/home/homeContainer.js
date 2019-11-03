import React from 'react';
import './homeContainer.css';

let iconSeed = require("../../assets/home/seed.png");
let iconFlower = require("../../assets/home/flower.png");
let iconExtract = require("../../assets/home/extract.png");
let logo = require("../../assets/home/logo.png");
let parallax_1 = require("../../assets/home/parallax-1.png");
let parallax_2 = require("../../assets/home/parallax-2.png");

const listSection = [
    {img:iconSeed,title:"Seed",summary:"lorem",class:"list-img-title"},
    {img:iconFlower,title:"Flower",summary:"lorem",class:"list-img-title pd-left-3"},
    {img:iconExtract,title:"Extract",summary:"lorem",class:"list-img-title pd-left-3"}
];
class HomeContainer extends React.Component{
    render(){
        return(
            <section>
                <TitleContainer listSection={listSection}/>
            </section>
        );
    }
}

class TitleContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            meetThemActive : false
        };
        this.clickMeetThem = this.clickMeetThem.bind(this);
    }

    clickMeetThem(e){
        this.setState({
            meetThemActive : !this.state.meetThemActive
        });
    }

    render(){
        var listSection = this.props.listSection;
        var sectionOn = this.state.meetThemActive;
        return(
            <>
            <section className='title-container'>
                <img src={parallax_1}></img>
                <div>
                    <img class="logo-img" src={logo}></img>
                    <br/>
                    <span className='title'>UN NUEVO CONCEPTO EN FLORES</span>
                    <br/>
                    <br/>
                    <button onClick={this.clickMeetThem} className='btn-explore'>Conócelo</button>
                    <br/>
                    <div className="pd-1">
                        {listSection.map((item) => <ImgSection key={item.title} section={item}/>)}
                    </div>
                </div>
            </section>
            {sectionOn && <MeetThemView />}
            </>
        );
    }
}

class ImgSection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img className={this.props.section.class} src={this.props.section.img}></img>
        );
    }
}

function MeetThemView(props) {
    return(
        <section>
            <h1>HOLI!</h1>
        </section>
    );
}
export default HomeContainer;