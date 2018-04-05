import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo'
import NavMenu from './navbar/navbar'
import ListaCard from './card/listaCard'
let App = (
    <div>
        <NavMenu titulo="React" cor="orange" />
        <Titulo />
        <div className="row">
            <ListaCard/>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));