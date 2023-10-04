// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="coin-type">Coin Type</p>
      <div className="usd-euro-con">
        <p className="usd-euro">USD</p>
        <p className="usd-euro">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyview = () => {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="currencies-list-con">
        {this.renderCryptocurrenciesHeader()}
        <ul>
          {cryptoCurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="currency-list-con">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrencyview()}
      </div>
    )
  }
}

export default CryptocurrenciesList
