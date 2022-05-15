import React from 'react';
import styled from 'styled-components'

const BoxProduto = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
  h4 {
    text-align: center;
    padding: 10px;
  }
  .price-button {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p {
      padding-bottom: 20px;
    }
    button{
      padding: 10px;
      border: none;
      background-color: #7db87d;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #7db87dbb;
      }
    }
  }
  &:hover {
    -webkit-animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  &:hover img {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

export default class Produto extends React.Component {
  render() {
    return (
      <BoxProduto>
          <img src={this.props.caminhoImage} />
          <h4>{this.props.nomeProduto}</h4>
          <div className='price-button'>
            <p>R$ {this.props.preco.toFixed(2)}</p>
            <button onClick={this.props.onclick}>Adicionar ao carrinho</button>
          </div>
      </BoxProduto>
    )
  }
}