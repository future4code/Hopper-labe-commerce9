import React from 'react';
import styled from 'styled-components'

const BoxCarrinho = styled.div`
    border: 1px solid #000;
    width: 300px;
    padding: 10px;
    min-width: 300px;
    .itensCarrinho {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: red;
    }
`


export default class Carrinho extends React.Component {
  render() {
    return (
      <BoxCarrinho>
          <h2>Carrinho:</h2>
          <div className='itensCarrinho'>
            <span>1x</span>
            <p>Nome do produto</p>
            <button>Remover</button>
          </div>
      </BoxCarrinho>
    )
  }
}