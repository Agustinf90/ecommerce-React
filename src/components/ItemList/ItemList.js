import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {Item} from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <Container className="row">
            <h2>Productos</h2>
            <hr/>
            <Row>
            {products.map((prod) => ( <Item prod={prod}/>
            ))}
          </Row>
            </Container>
    )
}
