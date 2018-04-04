var PoorManLens =  function() {
    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
          'use strict';
          if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      });
    }

    var objgetter = function(accumulator, currentValue) {
      return accumulator[currentValue];  
    } 

    this.pget = function(obj, path) {
        return ((typeof path === 'string' || path instanceof String)?path.split('.'):path).reduce(objgetter, obj)
    }

    this.pset = function(obj, path, val) {
      var parts = (typeof path === 'string' || path instanceof String)?path.split('.'):path
      var cset = function(obj, cidx, val) {
        var newval = val
        if (typeof val === "function") {
          newval = val(obj[cidx])
        } 
        if(Array.isArray(obj)) {
          return obj.slice(0, cidx*1).concat(newval , obj.slice(cidx*1+1) )
        } else {
          var newObj = {}
          newObj[cidx]= newval
          return Object.assign({}, obj, newObj)
        }
      }
      
      var pidx = parts[0]
      if(parts.length==1) {
        return cset(obj, pidx, val) 
      } else {
        let remaining = parts.slice(1)
        return cset(obj, pidx, pset(obj[pidx], remaining , val)) 
      }
    }
    
    return this
}()

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = PoorManLens;
}
else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return PoorManLens;
    });
  }
  else {
    window['PoorManLens'] = PoorManLens;
  }
}