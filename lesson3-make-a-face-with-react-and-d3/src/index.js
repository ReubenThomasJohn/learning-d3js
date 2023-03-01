import React from 'react';
import ReactDOM from 'react-dom';

import { arc } from 'd3';
// import { range } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 30;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI* 3/2);

var sine = d3.range(0, 1000).map(function(k) {
    var value = [0.5 * k * Math.PI, Math.sin(0.5 * k * Math.PI)];
    return value;
    });

const App = () => (
    <svg width={width} height={height}>
        <g transform = {`translate(${centerX}, ${centerY})`}>
            <circle 
                r= {centerY - strokeWidth / 2}
                fill="yellow"
                stroke="black"
                strokeWidth={strokeWidth}
            />
            <circle 
                cx={-eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <circle 
                cx={eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <path d={mouthArc()}/>
        </g>
    </svg>
);

// console.log(mouthArc());

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
