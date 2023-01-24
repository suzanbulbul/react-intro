import Navi from './components/Navi';
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';


export default class App extends Component {

  state= { currentCatagory: "", products: [], cart: []}

  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart})
  }

  changeCategory = (category) => {
    this.setState({ currentCatagory: category.name })
    this.getProducts(category.isActive);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (isActive) => {
    let url= "http://localhost:3000/products"

    if(isActive===true){
      url+="?isActive="+isActive;
    }

    fetch(url)
      .then(response=>response.json())
      .then(data=>this.setState({products:data}))
  }
  
  render() {
    let categoryInfo = {title: "Category List", desc: "Category" }
    let productInfo = {title: "Product List", desc: "Product" }
    return (
      <div className="App">
      <Container>
        <Navi cart= {this.state.cart}/>
        <Row >
          <Col xs="3">
            <CategoryList currentCatagory={this.state.currentCatagory} changeCategory={this.changeCategory} info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList addToCart={this.addToCart} products={this.state.products} info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
