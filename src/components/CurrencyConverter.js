import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setamount] = useState("BTC");

  const [result, setResult] = useState(0);

  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    ExchangedRate: 0,
  });

  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setResult(response.data * amount);
        console.log(response.data * amount);

        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          ExchangedRate: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1 className='heading_title'>
        <span className='crypto_title'> Crypto</span>Converter
      </h1>
      <div className='currency_converter'>
        <div className='converter'>
          <table className='input_table'>
            <tbody>
              <tr>
                <td className='currency_title'>Primary Currency</td>
                <td>
                  <input
                    className='currency_input'
                    type='number'
                    name='currency-amount-1'
                    value={amount}
                    onChange={(e) => {
                      setamount(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <select
                    className='currency-option'
                    name='currency-option-1'
                    value={chosenPrimaryCurrency}
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}>
                    {currencies.map((currency, _index) => {
                      return <option key={_index}>{currency}</option>;
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td className='currency_title'>Secondary Currency</td>
                <td>
                  <input
                    className='currency_input'
                    type='number'
                    name='currency-amount-2'
                    value={result}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    className='currency-option'
                    name='currency-option-2'
                    value={chosenSecondaryCurrency}
                    onChange={(e) =>
                      setChosenSecondaryCurrency(e.target.value)
                    }>
                    {currencies.map((currency, _index) => {
                      return <option key={_index}>{currency}</option>;
                    })}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button id='convert_btn' onClick={convert}>
            Convert
          </button>
        </div>
        <ExchangeRate ExchangedData={exchangedData} />
      </div>
    </>
  );
};

export default CurrencyConverter;
