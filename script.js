const vndExchangeRateUsd = 23216;
const vndExchangRateKrw = 19;
const vndExchangeRateEur = 26137;

const usdExchangeRateVnd = 1 / vndExchangeRateUsd;
const usdExchangeRateKrw = 0.000844;
const usdExchangeRateEur = 1.1238;

const krwExchangeRateVnd = 1 / vndExchangRateKrw;
const krwExchangeRateEur = 1331;
const krwExchangeRateUsd = 1/ usdExchangeRateKrw;

const eurExchangeRateVnd = 1 / vndExchangeRateEur;
const eurExchangeRateUsd = 1 / usdExchangeRateEur;
const eurExchangeRateKrw = 1 / krwExchangeRateEur;

function formattedMoney(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } 

function formattedMessage(ownedAmount, ownedCurrency, exchangeRate, convertedCurrency) {
    return  `${ownedAmount} ${ownedCurrency} is equal to ${formattedMoney(ownedAmount * exchangeRate)} ${convertedCurrency}`;
  }

function writeToBody(message) {
    document.getElementById("result").innerHTML = message;
  }

function convertMoney() {
  const valueInsideElementIdResult = document.getElementById("amount").value;

  const ownedCurrencySelect = document.getElementById("owned-currency").value;

  const convertedCurrencySelect = document.getElementById("converted-currency").value;

  for (let i = 0, length = ownedCurrencySelect.length; i < length; i++) {
    if (ownedCurrencySelect[i].checked) {
      alert(ownedCurrencySelect[i].value);
      break;
    }
  }

  for (let i = 0, length = convertedCurrencySelect.length; i < length; i++) {
    if (convertedCurrencySelect[i].checked) {
      alert(convertedCurrencySelect[i].value);
      break;
    }
  }

  if (ownedCurrencySelect == "USD") {
    switch (convertedCurrencySelect) {
      case "VND":
      const message0 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateUsd, convertedCurrencySelect);
      return writeToBody(message0);
      case "KRW":
      const message1 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateUsd, convertedCurrencySelect);
      return writeToBody(message1);
      case "EUR":
      const message2 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateUsd, convertedCurrencySelect);
      return writeToBody(message2);
    }
  } else if (ownedCurrencySelect == "VND") {
    switch (convertedCurrencySelect) {
      case "USD":
      const message3 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateVnd, convertedCurrencySelect);
      return writeToBody(message3);
      case "KRW":
      const message4 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateVnd, convertedCurrencySelect);
      return writeToBody(message4);
      case "EUR":
      const message5 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateVnd, convertedCurrencySelect);
      return writeToBody(message5);
    }
  } else if (ownedCurrencySelect == "KRW") {
    switch (convertedCurrencySelect) {
      case "USD":
      const message6 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateKrw, convertedCurrencySelect);
      return writeToBody(message6);
      case "VND":
      const message7 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateKrw, convertedCurrencySelect);
      return writeToBody(message7);
      case "EUR":
      const message8 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateKrw, convertedCurrencySelect);
      return writeToBody(message8);
    }
  } else if (ownedCurrencySelect == "EUR") {
    switch (convertedCurrencySelect) {
      case "USD":
      const message9 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateEur, convertedCurrencySelect);
      return writeToBody(message9);
      case "VND":
      const message10 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateEur, convertedCurrencySelect);
      return writeToBody(message10);
      case "KRW":
      const message12 = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateEur, convertedCurrencySelect);
      return writeToBody(message12);
    }
  }

}
