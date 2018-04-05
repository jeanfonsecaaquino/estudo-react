import React from 'react';
import Card from './card'

class ListaCard extends React.Component {
    render() {
        let produtos = [
            {
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            },{
                titulo: "Produto 1",
                imagem: "http://materializecss.com/images/office.jpg",
                conteudo: "Um teste de conteudo",
                link: "#card"
            }
        ]
        let produtosAgrupados = [];
        let listaAuxiliar = []
        let contadorProdutos = 0;
        produtos.map((produto, posicao)=>{
            if(contadorProdutos===3){
                listaAuxiliar.push(produto);
                produtosAgrupados.push(listaAuxiliar);
                contadorProdutos=0;
                listaAuxiliar = [];
            }else{
                listaAuxiliar.push(produto);
                contadorProdutos++;
            }
            if(posicao===produtos.length -1){
                produtosAgrupados.push(listaAuxiliar);
            }
        });
        let listaCards = (grupo)=>{
            return grupo.map((produto)=>{
                return (
                    <div className="col m2">
                        <Card titulo={produto.titulo} imagem={produto.imagem} conteudo={produto.conteudo} link={produto.link} />
                    </div>
                )
            });
        };

        let linha = produtosAgrupados.map((grupo)=>{
            return(
                <div className="row">
                    {listaCards(grupo)}
                </div>
            )
        });

        return(
            <div>
                {linha}
            </div>
        )

    }
}

export default ListaCard;

