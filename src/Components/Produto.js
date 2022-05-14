import React from 'react';
import styled from 'styled-components'

const BoxProduto = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  margin: 10px;
`

export default class Produto extends React.Component {
  render() {
    return (
      <BoxProduto>
          <img src={this.props.caminhoImage} />
          <h1>{this.props.nomeProduto}</h1>
          <p>{this.props.preco}</p>
          <button onClick={this.props.OnClick}>Adicionar ao carrinho</button>
      </BoxProduto>
    )
  }
}