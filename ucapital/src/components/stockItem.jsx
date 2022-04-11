import React from 'react';
import './stockitem.css'
import Plot from 'react-plotly.js';
// var yfinance = require('yfinance');

class StockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockXValues: [],
      stockYValues: [],
      active: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointer = this;
    var KEY = "5A8Z4LIZ2FPZ4RCF";
    var stock = this.props.stockName;
    var API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&interval=5min&outputsize=full&apikey=${KEY}`;
    let stockXValuesFunction = [];
    let stockYValuesFunction = [];

    fetch(API_call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          // console.log(data);
          for (var key in data['Time Series (Daily)']) {
            stockXValuesFunction.push(key); // date
            stockYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']); // price
          }
          pointer.setState({
            stockXValues: stockXValuesFunction,
            stockYValues: stockYValuesFunction,
            stockSymbol: stock,
            curr_price: stockYValuesFunction[0],
          });
        }
      )
  }

  AddCookie = () => {
    var toBeAdded = this.props.stockName;
    var currentCookie = document.cookie;
    console.log(currentCookie)
    document.cookie = currentCookie+","+toBeAdded;
  }

  toggle() {
    if (this.state.active === false) {
      this.setState({
        active: true
      });
    }
    else {
      this.setState({
        active: false
      });
    }
  }

  render() {
    return (
      <div id="stockContainer" className={'stockContainer' + (this.state.active ? "--active" : "")} onDoubleClick={this.toggle}>
        <div id="textContainer">
          <h1 id="ticker">{this.state.stockSymbol}</h1>
          <button id="addToFav" onClick={this.AddCookie}> Add stock </button>
          <h1 className="price">${parseFloat(this.state.curr_price).toFixed(2)}</h1>
        </div>

        <Plot id={this.state.StockSymbol}
          data={[
            {
              x: this.state.stockXValues,
              y: this.state.stockYValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#00fa9a' }, // 6FD08C
              hoverinfo: "x+y",
              fill: 'tozeroy',
              opacity: ".1",
            },
          ]}
          layout={{
            // title: this.state.stockSymbol,
            useResizeHandler: true,
            autosize: true,
            plot_bgcolor: "hsl(216, 50%, 16%)",
            paper_bgcolor: "hsl(216, 50%, 16%)",
            font: {
              color: "#fff",
            },
            margin: {
              // autoexpand: true,
              b: 40,
              t: 10,
              l: 40,
              r: 10,
            }
          }
          }
          config={{
            responsive : true // causes improper first load -> need resolution
          }}
          style={{
            width: "100% !important",
            height: "740px",
          }}
        />

      </div>
    )
  }

}

export default StockItem;