import React from 'react';
import styled from 'styled-components'
import Produto from './Components/Produto';
import Carrinho from './Components/Carrinho';

const Todo = styled.div`
  max-width: 1300px;
  display: flex;
`

const secaoProdutos = styled.div`

`

const ContainerProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
`

export default class App extends React.Component {
  state= {
    produtos: [
      {
        id: 1,
	      name: "Camisa Polo estampada",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
	      name: "Camisa",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
	      name: "Camisa",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 4,
	      name: "Camisa",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 5,
	      name: "Camisa",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 6,
	      name: "Camisa",
	      value: 20,
	      imageUrl: "https://picsum.photos/200/200"
      }
    ]
  }

  OnClick = () => {

  }

  render() {
    const listaProdutos = this.state.produtos.map((produto) => {
      return <Produto 
        caminhoImage={produto.imageUrl}
        nomeProduto={produto.name}
        preco={produto.value}
        OnClick={this.OnClick}
      />
    })

    const quantidadeProduto = this.state.produtos.length

    return (
      <Todo>
        
        <secaoProdutos>
          <p>Quantidade de produtos: {quantidadeProduto}</p>
          <ContainerProdutos>
            {listaProdutos}
          </ContainerProdutos>
        </secaoProdutos>

        <Carrinho />

      </Todo>
    )
  }
}