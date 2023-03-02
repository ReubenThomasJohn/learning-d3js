import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face';
import { range } from 'd3';

const width = 166;
const height = 166;

const array = range(20*7);

const App = () => array.map(() => (
    <Face 
    width = {width}
    height = {height}
    const centerX = {width / 2}
    const centerY = {height / 2}
    const strokeWidth = {10}
    const eyeOffsetX = {30}
    const eyeOffsetY = {30}
    const eyeRadius = {5 + Math.random() * 10}
    const mouthWidth = {10}
    const mouthRadius = {40}
    />   
));
// console.log(mouthArc());

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
