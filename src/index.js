import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeContainer from './components/home/homeContainer';
import * as serviceWorker from './serviceWorker';

let iconSeed = require("./assets/home/seed.png");
let iconFlower = require("./assets/home/flower.png");
let iconExtract = require("./assets/home/extract.png");

const listSection = [
    {img:iconSeed,title:"Seed",summary:"lorem seed",class:""},
    {img:iconFlower,title:"Flower",summary:"lorem flower",class:"pd-left-3"},
    {img:iconExtract,title:"Extract",summary:"lorem extract",class:"pd-left-3"}
];

ReactDOM.render(<HomeContainer listSection={listSection}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
