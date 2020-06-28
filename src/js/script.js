"use sctrict";

let inputRUB = document.getElementsByTagName("input")[0],
  inputUSD = document.getElementsByTagName("input")[1];

inputRUB.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  // reguest.open(method, url, assing, login, password);
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json", "charset=utf-8");
  request.send();

  //status
  //statusText
  //responseText / response
  //readyState
  request.addEventListener("readystatechange", () => {
    if (request.status == 200 && request.readyState === 4) {
      let data = JSON.parse(request.response);
    }
  });
});
