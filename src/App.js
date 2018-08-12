import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { setLoading, setApiData } from './store/actions.js'
import Table from './components/table/table.js'

export class A extends Component {
  apiUrl = (props) => {
    return `https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array&convert=${props.currency}`
  }

  fetchApiData = () => {
    this.props.setLoading(true)
    fetch( this.apiUrl(this.props) )
      .then(response => response.json())
      .then(json => json.data.map((currency, i) => ({
          currencyName: currency.name, 
          price: currency.quotes['USD'].price,
          marketCap: currency.total_supply,
          percentChange: currency.quotes['USD'].percent_change_24h,
          currencySymbol: '$'
        }) 
      ))
      .then(currencies => {
        this.props.setApiData(currencies)
      })
  }
  
  componentDidMount = () => {
    this.fetchApiData()
  }


  render() {
    return (
      <div className="App">
        <Table data={ this.props.apiData } />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
    loading: state.loading,
    timeSinceUpdate: state.timeSinceUpdate,
    currency: state.currency,
    sortBy: state.sortBy,
    sortDirection: state.sortDirection,
    currencySymbol: state.currencySymbol
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: bool => dispatch(setLoading(bool)),
    setApiData: data => dispatch(setApiData(data))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(A)
export default App;
