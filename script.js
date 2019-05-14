const vndExchangeRateUsd = 23216;
const vndExchangRateKrw = 19;
const vndExchangeRateEur = 26137;

const usdExchangeRateKrw = 0.000844;
const usdExchangeRateEur = 1.1238;

const krwExchangeRateEur = 1331;


function convertMoney() {
  const valueInsideElementIdResult = document.getElementById("amount").value;

  const ownedCurrencySelect = document.getElementById("owned-currency").value;

  const convertedCurrencySelect = document.getElementById("converted-currency").value;

  function formattedMoney(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } 

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
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          vndExchangeRateUsd)} ${convertedCurrencySelect}`);
      case "KRW":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          usdExchangeRateKrw)} ${convertedCurrencySelect}`);
      case "EUR":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          usdExchangeRateEur)} ${convertedCurrencySelect}`);
    }
  } else if (ownedCurrencySelect == "VND") {
    switch (convertedCurrencySelect) {
      case "USD":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          vndExchangeRateUsd)} ${convertedCurrencySelect}`);
      case "KRW":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          vndExchangRateKrw)} ${convertedCurrencySelect}`);
      case "EUR":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          vndExchangeRateEur)} ${convertedCurrencySelect}`);
    }
  } else if (ownedCurrencySelect == "KRW") {
    switch (convertedCurrencySelect) {
      case "USD":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          usdExchangeRateKrw)} ${convertedCurrencySelect}`);
      case "VND":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          vndExchangRateKrw)} ${convertedCurrencySelect}`);
      case "EUR":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          krwExchangeRateEur)} ${convertedCurrencySelect}`);
    }
  } else if (ownedCurrencySelect == "EUR") {
    switch (convertedCurrencySelect) {
      case "USD":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult /
          usdExchangeRateEur)} ${convertedCurrencySelect}`);
      case "VND":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          vndExchangeRateEur)} ${convertedCurrencySelect}`);
      case "KRW":
        return (document.getElementById(
          "result"
        ).innerHTML = `${valueInsideElementIdResult} ${ownedCurrencySelect} is equal to ${formattedMoney(valueInsideElementIdResult *
          krwExchangeRateEur)} ${convertedCurrencySelect}`);
    }
  }
}
