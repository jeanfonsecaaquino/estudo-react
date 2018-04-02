import React from 'react';
import NavBar from './nav-menu'

class NavMenu extends React.Component {
    render() {
        let corNav = "nav-wrapper ".concat(this.props.cor);
        let menu = [
            { titulo: "Home", link: "#home" },
            { titulo: "Sobre", link: "#sobre" },
            { titulo: "Contato", link: "#contato" }
        ];
        return (
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavBar menu={menu}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavMenu;