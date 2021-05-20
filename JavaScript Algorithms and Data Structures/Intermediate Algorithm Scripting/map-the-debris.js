function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  return arr.map(function (elem) {
        elem.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(elem.avgAlt + earthRadius, 3) / GM));
        delete elem.avgAlt;
        return elem;
    });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);