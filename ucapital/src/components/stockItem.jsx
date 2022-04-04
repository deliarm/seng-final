import React from 'react';
import './stockitem.css'
import Plot from 'react-plotly.js';


class StockItem extends React.Component{
  // stock = this.props.stockName;
  constructor(props){
    super(props);
    this.state = {
      stockXValues: [],
      stockYValues: [],
    }
  }

  componentDidMount(){
    this.fetchStock();
  }

  fetchStock(){
    const pointer = this;
    const KEY = 'E4D6J86X93CQC0AN';
    var stock = 'MSFT';
    // var curr_price = 0;
    var API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&interval=5min&outputsize=full&apikey=${KEY}`;
    let stockXValuesFunction = [];
    let stockYValuesFunction = [];

    fetch(API_call)
      .then(
        function(response){
          return response.json();
        }
      )
      .then(
        function(data){
          console.log(data);
          for (var key in data['Time Series (Daily)']){
            stockXValuesFunction.push(key); // date
            stockYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']); // price
          }
          pointer.setState({
            stockXValues : stockXValuesFunction,
            stockYValues : stockYValuesFunction,
            stockSymbol : stock,
            curr_price : stockYValuesFunction[0],
          });
        }
      )
  }


  render(){
    return(
      <div id="stockContainer">
        <div id="textContainer">
          <h1>{this.state.stockSymbol}</h1>
          <h1 className="price">${parseFloat(this.state.curr_price).toFixed(2)}</h1>
        </div>
        <Plot
        data={[
          {
            x: this.state.stockXValues,
            y: this.state.stockYValues,
            type: 'scatter',
            mode: 'lines',
            marker: {color: '#6FD08C'},
            hoverinfo: "x+y",
            fill:'tozeroy',
            opacity: ".1",
          },
        ]}
        layout={ { 
          // title: this.state.stockSymbol,
          plot_bgcolor: "#282F44",
          paper_bgcolor: "#282F44",
          autosize : true,
          font: {
            color: "#fff",
            },
          margin:{
            autoexpand: true,
            b : 40,
            t : 10,
            l : 40,
            r : 10,
            }
          } 
        }
        config={{
          // responsive : true
        }}
      />
      </div>
    )
  }
}

export default StockItem;