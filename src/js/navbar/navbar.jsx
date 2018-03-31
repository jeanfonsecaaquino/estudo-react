import React from 'react';

class NavBar extends React.Component {
    render() {
        let corNav = "nav-wrapper ".concat(this.props.cor);
        let menus = [
            { titulo: "Home", link: "#home" },
            { titulo: "Sobre", link: "#sobre" },
            { titulo: "Contato", link: "#contato" }
        ];
        let lista = menus.map((menu)=>{
            return (
                <li key={menu.titulo}>
                    <a href={menu.link}>{menu.titulo}</a>
                </li>
            );
        });
        return (
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <ul id="nav-mobile" className="right">
                            {lista}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;