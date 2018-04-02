import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={this.props.imagem} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{this.props.titulo}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">{this.props.link}</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{this.props.titulo}<i class="material-icons right">close</i></span>
                    <p>{this.props.conteudo}</p>
                </div>
            </div>
        )
    }
}

export default Card;