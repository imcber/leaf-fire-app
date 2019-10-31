import React from 'react';
import logo from './logo.svg';
import './App.css';

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterText : "",
      stockOnly : false
    };
    this.textFilterChange = this.textFilterChange.bind(this);
    this.checkedFilterChange = this.checkedFilterChange.bind(this);
  }

  textFilterChange(e){
    this.setState({
      filterText : e.target.value
    });
  }

  checkedFilterChange(e){
    this.setState({
      stockOnly : e.target.checked
    });
  }

  render(){
    return(
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.filterText}
            onChange={this.textFilterChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.state.stockOnly}
              onChange={this.checkedFilterChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
        <div>
          <ProductTable products={this.props.products} textFilter={this.state.filterText} checkFilter={this.state.stockOnly}/>
        </div>
      </div>
    );
  }
}

class ProductTable extends React.Component{
  render(){
    const listaProductos = [];
    const listaCategory = {};
    this.props.products.forEach((product) => {
      if(!listaCategory[product.category])
        listaCategory[product.category] = [];
        if(product.name.toUpperCase().indexOf(this.props.textFilter.toUpperCase()) > -1){
          listaCategory[product.category].push(product);
        }
    });
    Object.keys(listaCategory).map((key)=>{
      if(listaCategory[key].length > 0)
        listaProductos.push(<ProductCategoryRow key={key} name={key}/>);
      listaCategory[key].forEach((item)=>{
        if(!this.props.checkFilter || (this.props.checkFilter && item.stocked)){
          listaProductos.push(<ProductRow key={item.name} name={item.name} price={item.price}/>);
        }
      });
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos}
        </tbody>
      </table>
    );
  }
}

class ProductRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component{
  render(){
    return(
      <tr>
        <th>
          {this.props.name}
        </th>
      </tr>
    );
  }
}

export default FilterableProductTable;
