// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachCrypto => ({
      id: eachCrypto.id,
      currencyLogoUrl: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
    }))

    this.setState({cryptoCurrenciesData: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoad = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" width={80} height={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="tracker-con">
        {isLoading ? this.renderLoad() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
