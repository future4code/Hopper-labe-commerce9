import React from 'react';
import styled from 'styled-components'

const BoxCarrinho = styled.div`

    .itensCarrinho {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        border-bottom: 1px solid #ccc;
        button {
          padding: 5px;
          border: none;
          border-radius: 5px;
          background-color: red;
          color: white;
          cursor: pointer;
          &:hover {
            background-color: #900101;
          }
        }
    }
`


export default class Carrinho extends React.Component {
  render() {
    return (
      <BoxCarrinho>
          <div className='itensCarrinho'>
            <span>{this.props.qntProduto}x</span>
            <p>{this.props.nomeProduto}</p>
            <button onClick={this.props.botaoRemover}>Remover</button>
          </div>
      </BoxCarrinho>
    )
  }
}