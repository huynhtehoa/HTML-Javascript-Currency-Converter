const vndExchangeRateUsd = 23216;
const vndExchangeRateKrw = 19;
const vndExchangeRateEur = 26137;

const usdExchangeRateVnd = 1 / vndExchangeRateUsd;
const usdExchangeRateKrw = 0.000844;
const usdExchangeRateEur = 1.1238;

const krwExchangeRateVnd = 1 / vndExchangeRateKrw;
const krwExchangeRateEur = 1331;
const krwExchangeRateUsd = 1 / usdExchangeRateKrw;

const eurExchangeRateVnd = 1 / vndExchangeRateEur;
const eurExchangeRateUsd = 1 / usdExchangeRateEur;
const eurExchangeRateKrw = 1 / krwExchangeRateEur;

function formattedMoney(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } 

function formattedMessage(ownedAmount, ownedCurrency, exchangeRate, convertedCurrency) {
    return `${ownedAmount} ${ownedCurrency} is equal to ${formattedMoney(ownedAmount * exchangeRate)} ${convertedCurrency}`;
  }

function writeToBody(message) {
    document.getElementById("result").innerHTML = message;
  }

function writeThankYouMessage(thankYouMessage) {
  document.getElementById("thank-you-message").innerHTML = thankYouMessage;
}

  
function convertMoney() {
  const valueInsideElementIdResult = document.getElementById("amount").value;

  const ownedCurrencySelect = document.getElementById("owned-currency").value;

  const convertedCurrencySelect = document.getElementById("converted-currency").value;

  let thankYouMessage;

  let message;

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
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateUsd, convertedCurrencySelect);
      case "KRW":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateUsd, convertedCurrencySelect);
      case "EUR":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateUsd, convertedCurrencySelect);
    }
  } else if (ownedCurrencySelect == "VND") {
    switch (convertedCurrencySelect) {
      case "USD":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateVnd, convertedCurrencySelect);
      case "KRW":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateVnd, convertedCurrencySelect);
      case "EUR":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateVnd, convertedCurrencySelect);
    }
  } else if (ownedCurrencySelect == "KRW") {
    switch (convertedCurrencySelect) {
      case "USD":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateKrw, convertedCurrencySelect);
      case "VND":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateKrw, convertedCurrencySelect);
      case "EUR":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, eurExchangeRateKrw, convertedCurrencySelect);
    }
  } else if (ownedCurrencySelect == "EUR") {
    switch (convertedCurrencySelect) {
      case "USD":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, usdExchangeRateEur, convertedCurrencySelect);
      case "VND":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, vndExchangeRateEur, convertedCurrencySelect);
      case "KRW":
      message = formattedMessage(valueInsideElementIdResult, ownedCurrencySelect, krwExchangeRateEur, convertedCurrencySelect); 
    }
  }

  switch (convertedCurrencySelect) {
    case "VND":
    thankYouMessage = "Cảm ơn";
      break;
    case "USD":
    thankYouMessage = "Thank you";
      break;
    case "EUR":
    thankYouMessage = "Danke";
      break;
    case "KRW":
    thankYouMessage = "some thank you in korean";
  }
  writeToBody(message);
  writeThankYouMessage(thankYouMessage);
}