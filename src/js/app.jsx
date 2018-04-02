import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo'
import NavMenu from './navbar/navbar'
import Card from './card/card'
let App = (
    <div>
        <NavMenu titulo="React" cor="orange" />
        <Titulo />
        <div className="row">
            <div className="col m2">
                <Card titulo="Um titulo" imagem="http://materializecss.com/images/office.jpg" conteudo="um teste" link="#card" />
            </div>
            <div className="col m2">
                <Card titulo="Um titulo" imagem="http://materializecss.com/images/sample-1.jpg" conteudo="dois teste" link="#card" />
            </div>
            <div className="col m2">
                <Card titulo="Um titulo" imagem="http://materializecss.com/images/office.jpg" conteudo="kjakjakjsakjsakjakj" link="#card" />
            </div>
            <div className="col m2">
                <Card titulo="Um titulo" imagem="http://materializecss.com/images/office.jpg" conteudo="blablablablablabla" link="#card" />
            </div>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));