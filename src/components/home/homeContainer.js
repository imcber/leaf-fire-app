import React from 'react';
import './homeContainer.css';

class HomeContainer extends React.Component{
    render(){
        return(
            <section>
                <TitleContainer />
            </section>
        );
    }
}

class TitleContainer extends React.Component{
    render(){
        return(
            <section className='title-container'>

            </section>
        );
    }
}

export default HomeContainer;