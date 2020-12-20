/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let result;

//Checks for double decimals
    let d = input.indexOf('.')//checking for a decimal
      if(input.indexOf('.', d+1) !== -1) {
        return 'invalid number'//Found a second slash.  Number Invalid
      }
//Checks for double slashes
    let s = input.indexOf('/')//checking for a slash
      if(input.indexOf('/', s+1) !== -1) {
        return 'invalid number'//Found a second slash.  Number Invalid
      }

    var unitpat = /[^0-9./]/gi
    var inpArr = input.split('')

    var units = input.match(unitpat)

    //Checks if units is null to avoid error and if it isnt, validates that there is a number.  Otherwise if units are provided without a number, 1 is assumed as number.
    if(units == null)
      console.log("no units provided")
    else if(units.length == input.length)
      result = "1"
    else   
      result = input.slice(0, inpArr.length-units.length)
      
    if(s > 0) 
    {
      return parseFloat(result.split('/')[0])/parseFloat(result.split('/')[1]) 
    }else
      return parseFloat(result)
  };
  
  this.getUnit = function(input) {
    let result;
    var validUnits = {
      gal: 'gal', l:'L',
      mi:'mi', km:'km',
      lbs:'lbs',kg:'kg'
    }

    var unitpat = /[^0-9./]/gi
    var inpArr = input.split('')

    result = input.match(unitpat)

if(result!= null)
    result = result.join('');
  else
    return "invalid unit"
if(validUnits[result.toLowerCase()]!= undefined)
    return validUnits[result.toLowerCase()]
else
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {

    initUnit = initUnit.toLowerCase()
    var units = {
      gal: 'L', l:'gal',
      mi:'km', km:'mi',
      lbs:'kg',kg:'lbs'
    }
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    let result;
    var unitsLong = {
      gal: 'gallons', L:'liters',
      mi:'miles', km:'kilometers',
      lbs:'pounds',kg:'kilograms'
    }
    result = unitsLong[unit]
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit){
      case "gal":
        result = initNum*galToL
      break
      case "L":
        result = initNum/galToL
      break
      case "mi":
        result = initNum*miToKm
      break
      case "km":
        result = initNum/miToKm
      break
      case "lbs":
        result = initNum*lbsToKg
      break
      case "kg":
        result = initNum/lbsToKg
      break
      default:
      result = undefined
      break
    }    
    return (Math.round(result*100000)/100000);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit)
    return result;
  }; 
}

module.exports = ConvertHandler;
