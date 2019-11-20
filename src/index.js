import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeContainer from './components/home/homeContainer';
import * as serviceWorker from './serviceWorker';

let iconSeed = require("./assets/home/seed.png");
let iconFlower = require("./assets/home/flower.png");
let iconExtract = require("./assets/home/extract.png");
const loremDummySection = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis sem. Phasellus faucibus dui at nibh venenatis euismod. Fusce non pharetra nulla, sed fringilla tellus. Aliquam erat volutpat. Cras fermentum congue nibh, eget aliquet arcu finibus vel. Aenean sed felis fringilla, consectetur odio vitae, fringilla sapien. Morbi facilisis orci a odio tempus, vel tincidunt risus lacinia. Nulla quis leo at felis rutrum condimentum. Suspendisse id neque id neque tempus convallis non in erat. Maecenas pharetra ex eu libero imperdiet mattis. Vivamus sed augue id purus pharetra faucibus commodo non massa.";

const listSection = [
    {img:iconSeed,title:"Seed",summary:loremDummySection,class:""},
    {img:iconFlower,title:"Flower",summary:loremDummySection,class:"pd-left-3"},
    {img:iconExtract,title:"Extract",summary:loremDummySection,class:"pd-left-3"}
];

ReactDOM.render(<HomeContainer listSection={listSection}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
