import React from 'react'
import styled from 'styled-components'

const Filtro = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    div.inputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        label {
            margin: 5px 10px;
            input {
                font-size: 0.8em;
                padding: 5px 10px;
                border: 1px solid orange;
                border-radius: 10px;
            }
        }
    }
    label.selecao {
        select {
            font-size: 0.8em;
            padding: 5px 10px;
            border: 1px solid orange;
            border-radius: 10px;
        }
    }
`

export default class Filtros extends React.Component {

    render() {
        return (
            <Filtro>
                <div className='inputs'>
                    <label>Valor mínimo:<br />
                        <input type="number" />
                    </label>

                    <label>Valor máximo:<br />
                        <input type="number" />
                    </label>
                </div>
                
                <label class="selecao">Ordenação:<br /> 
                    <select>
                        <option value="CRESCENTE">Crescente</option>
                        <option value="DECRESCENTE">Decrescente</option>
                    </select>
                </label>
            </Filtro>
        )
    }
}