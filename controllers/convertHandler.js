/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const numeralRegex = /[a-zA-Z]/;
  const unitRegex = /^([\d\./]*)(gal|mi|km|lbs|kg|l)$/i
  const unitMap = {
    gal: 'l',
    mi: 'km',
    lbs: 'kg',
    kg: 'lbs',
    km: 'mi',
    l: 'gal'
  };
  const unitExpansion = {
    l: 'liters',
    km: 'kilometers',
    kg: 'kilograms',
    gal: 'gallons',
    mi: 'miles',
    lbs: 'pounds'
  };
  
  this.getNum = function(input) {
    let result;
    let index = numeralRegex.exec(input).index;
    if(index === 0)
      return 1;
    let num = input.slice(0, index);
    if (input.indexOf('/') === -1) {
      result = Number(num);
    } else {
      // dealing with fractions!
      let arr = num.split('/');
      if (arr.length > 2) {
        return 'invalid number';
      }
      result = Number(arr[0]) / Number(arr[1]);
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let t = unitRegex.exec(input);
    if (t) {
      return t[2];
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {    
    return unitMap[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    return unitExpansion[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const multiplier = {
      gal: 3.78541,
      lbs: 0.453592,
      mi: 1.60934,
      l: 0.264172177,
      kg: 2.20462442,
      km: 0.621372737
    };
    
    return initNum * multiplier[initUnit.toLowerCase()];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let iexpan = this.spellOutUnit(initUnit);
    let oexpan = this.spellOutUnit(returnUnit);
    return `${initNum} ${iexpan} converts to ${returnNum} ${oexpan}`;
  };
  
}

module.exports = ConvertHandler;
