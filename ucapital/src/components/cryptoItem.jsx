import React from 'react';
import './cryptoItem.css'
import Plot from 'react-plotly.js';


class CryptoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoXValues: [],
      cryptoYValues: [],
      active: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.fetchcrypto();
  }

  fetchcrypto() {
    const pointer = this;
    var KEY = "5A8Z4LIZ2FPZ4RCF";
    var crypto = this.props.cryptoName;
    var API_call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${crypto}&market=CAD&apikey=${KEY}`
    let cryptoXValuesFunction = [];
    let cryptoYValuesFunction = [];

    fetch(API_call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
        //   console.log(data);
          for (var key in data['Time Series (Digital Currency Daily)']) {
            cryptoXValuesFunction.push(key); // date
            cryptoYValuesFunction.push(data['Time Series (Digital Currency Daily)'][key]['1a. open (CAD)']); // price
          }
          pointer.setState({
            cryptoXValues: cryptoXValuesFunction,
            cryptoYValues: cryptoYValuesFunction,
            cryptoSymbol: crypto,
            curr_price: cryptoYValuesFunction[0],
          });
        }
      )
  }

  AddCookie = () => {
    var toBeAdded = this.props.cryptoName;
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
      <div id="cryptoContainer" className={'cryptoContainer' + (this.state.active ? "--active" : "")} onDoubleClick={this.toggle}>
        <div id="textContainer">
          <h1>{this.state.cryptoSymbol}</h1>
          <button id="addToFav" onClick={this.AddCookie}> Add Crypto </button>
          <h1 className="price">${parseFloat(this.state.curr_price).toFixed(2)}</h1>
        </div>

        <Plot id={this.state.cryptoSymbol}
          data={[
            {
              x: this.state.cryptoXValues,
              y: this.state.cryptoYValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#00fa9a' }, // 6FD08C
              hoverinfo: "x+y",
              fill: 'tozeroy',
              opacity: ".1",
            },
          ]}
          layout={{
            // title: this.state.cryptoSymbol,
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
            height: "700px",
          }}
        />

      </div>
    )
  }

}

export default CryptoItem;