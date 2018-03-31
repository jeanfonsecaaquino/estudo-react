import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo'
import NavBar from './navbar/navbar'

let App = (
    <div>
        <NavBar titulo="React" cor="orange" />
        <Titulo />
    </div>
);

ReactDOM.render(App, document.getElementById('app'));