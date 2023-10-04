// Write your JS code her

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props

  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogoUrl,
  } = cryptocurrencyDetails

  return (
    <li className="li-list">
      <div className="logo-title-con">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-con">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
