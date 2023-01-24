import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state= {
          categories: [
          ],
          currentCatagory: ""
        };
    }

    componentDidMount(){
      this.getCategories();
    }

    getCategories = () => {
      fetch("http://localhost:3000/categories")
      .then(response=>response.json())
      .then(data=>this.setState({categories:data}))
    }

  render() {
    return (
      <div>
          <h1>{this.props.info.title}</h1>
          <p>{this.props.info.desc}</p>
          <div>
            <ListGroup>
              {this.state.categories.map(category => (
                <ListGroupItem 
                  active={category.name=== this.props.currentCatagory ? true : false} 
                  onClick={()=>this.props.changeCategory(category)} key={category.id}> 
                  {category.name}
                </ListGroupItem>
              ))}
            </ListGroup>
            <br />
            <h4>{this.props.currentCatagory}</h4>
        </div>
      </div>
    )
  }
}
