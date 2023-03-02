import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {csv} from 'd3';
import { message } from './message';


const csvUrl = "https://gist.githubusercontent.com/ReubenThomasJohn/bea8f3a40879b2105c108ca3ca3327a8/raw/27483c6f57e2844e7f183436a148b61ce2be15bc/cssNamedColors.csv";

const App = () => {
    const [data, setData] = useState(null);  
    
    useEffect(() => {
        csv(csvUrl).then(setData);
        console.log('fetching data');
    }, []);

    // with d3.csv

    // csv(csvUrl).then(data => {
    //     setData(data);
    //     });

    
    return (
        <pre>Data is: {data ? message(data): 'loading...'} </pre>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
