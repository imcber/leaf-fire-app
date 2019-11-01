import React from 'react';
import './homeContainer.css';

const listSection = [
    {img:"../",title:"Seed",summary:"lorem"},
    {img:"../",title:"Flower",summary:"lorem"},
    {img:"../",title:"Extract",summary:"lorem"}
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
                <div>
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
            <img className="list-img-title" src={this.props.section.title}></img>
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