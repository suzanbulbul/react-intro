import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';


export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.desc}</p>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                First Name
              </th>
              <th>
                Gender              
              </th>
              <th>
               Company              
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr>
                <th key={product.id} scope="row">
                  {product.id}
                </th>
                <td>
                  {product.name}
                </td>
                <td>
                  {product.gender}
                </td>
                <td>
                  {product.company}
                </td>
                <td>
                  <Button onClick={() => this.props.addToCart(product)} color="info">
                    add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
