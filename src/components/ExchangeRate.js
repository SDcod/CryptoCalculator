import React from "react";

const ExchangeRate = ({ ExchangedData }) => {
  return (
    <div className='exchange_rate'>
      <h3>Exchange Rate of One unit :</h3>
      <h1> {ExchangedData.ExchangedRate} </h1>
      <p className='ctoc'>
        {ExchangedData.primaryCurrency} To {ExchangedData.secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
