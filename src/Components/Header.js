import React from "react";
import styled from "styled-components";
import Carrinho from '../image/carrinho.png'
import Search from '../image/search.png'

const Headerr = styled.div`
    background-color: orange;
    .center {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        h1 {
            margin: 0;
            padding: 0;
            cursor: pointer;
            position: relative;
            span.a {
                color: white;
                
            }
            span.b {
                margin-left: -6px;
                margin-top: 5px;
            }
        }
        .buscaCarrinho {
            display: flex;
            justify-content: center;
            align-items: center;
            .inputBusca {
                height: 30px;
                display: flex;
                justify-content: center;
                margin: 0 40px;
                input {
                    background: transparent;
                    border: 1px solid white;
                    border-radius: 10px 0 0 10px;
                    padding: 5px 10px;
                    outline: none;
                    color: black;
                    font-size: 0.9em;
                    ::placeholder {
                        color: black;
                    }
                }
                button.busca {
                    padding: 0 10px;
                    background: white;
                    border: none;
                    border-radius: 0 10px 10px 0;
                    cursor: pointer;
                    img {
                        width: 15px;
                        margin-top: 3px;
                        margin-left: -3px;
                    }
                    &:hover {
                        background: rgb(207, 206, 206);
                    }
                    &:hover img {
                        -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
                            animation: heartbeat 1.5s ease-in-out infinite both;
                    }
                }
            }
            button.carrinho {
                width: 60px;
                height: 60px;
                cursor: pointer;
                background-color: transparent;
                border: none;
                position: relative;
                span {
                    background-color: white;
                    padding: 5px;
                    border-radius: 25%;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                img {
                    width: 40px;
                }
                &:hover {
                    -webkit-animation: jello-horizontal 0.9s both;
	                animation: jello-horizontal 0.9s both;
                }
            }
        }
        @media screen and (max-width: 530px) {
            position: relative;
            display: block;
            height: 130px;
            .buscaCarrinho {
                .inputBusca {
                    position: absolute;
                    top: 70px;
                }
                button.carrinho {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }
            }
        }
    }
`


export default class Header extends React.Component {
    render() {
        return (
            <Headerr className="header">
                <div className="center">
                    <h1><span className="a">Buy</span><span className="b">Easy</span></h1>
                    <div className="buscaCarrinho">
                        <div className="inputBusca">
                            <input 
                                type='search' 
                                placeholder="Buscar" 
                                onChange={this.props.inputBusca} 
                                value={this.props.valor}/>
                            <button className="busca">
                                <img src={Search} />
                            </button>
                        </div>
                        <button className="carrinho" onClick={this.props.botaoAbrirCarrinho}>
                            <img src={Carrinho} />
                            {this.props.quntidadeItensCarrinho ? <span>{this.props.quntidadeItensCarrinho}</span> : ''}
                        </button>
                    </div>
                </div>
            </Headerr>
        )
    }
}