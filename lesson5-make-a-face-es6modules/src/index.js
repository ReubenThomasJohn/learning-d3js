import React from 'react';
import ReactDOM from 'react-dom';

import { BackgroundCircle } from './BackgroundCircle'; // in curly braces since it's a named export. If default export then no curly braces.
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'

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

const App = () => (
    <svg width={width} height={height}>
        <g transform = {`translate(${centerX}, ${centerY})`}>
            <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
            <Eyes
               eyeOffsetX={eyeOffsetX}
               eyeOffsetY={eyeOffsetY}
               eyeRadius={eyeRadius} 
            />
            <Mouth
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
            />
        </g>
    </svg>
);

// console.log(mouthArc());

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
