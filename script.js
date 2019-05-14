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
    return `${ownedAmount} ${ownedCurrency} is equal to ${formattedMoney(ownedAmount * exchangeRate)} ${convertedCurrency}`;
}

function writeToBody(message) {
    document.getElementById("result").innerHTML = message;
}

function writeTyMessage(message) {
  document.getElementById("thank-you-message").innerHTML = message
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

  let message
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

  writeToBody(message);
  let tyMessage
  switch (convertedCurrencySelect) {
    case "VND":
      tyMessage = "Cảm ơn";
      break
    case "USD":
      tyMessage = "Thank you";
      break
    case "EUR":
      tyMessage = "Danke";
      break
    case "KRW":
      tyMessage = "some thank you in korean";
  }

  writeTyMessage(tyMessage);
}
