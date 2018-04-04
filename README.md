# poor-man-lens

[![NPM](https://img.shields.io/npm/v/poor-man-lens.svg)](https://www.npmjs.org/package/poor-man-lens)

## With require (node.js)

``` javascript
> var pml = require('poor-man-lens')

> console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
{ b: 2 }

> console.log(pml.pset({'a':[{'b':2}]}, 'a.1', {'c':3}))
{ a: [ { b: 2 }, { c: 3 } ] }

> console.log(pml.pset({'a':[{'b':2}]}, 'a.0.b', function(x) { return x*x } ))
{ a: [ { b: 4 } ] }
```

## Within browser
``` html
<script type="text/javascript" src='pml.js'></script>
<script>
  var pml = PoorManLens
  console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
  console.log(pml.pset({'a':[{'b':2}]}, 'a.1', {'c':3}))
  console.log(pml.pset([[[[1]]]], [0,0,0,0], function(x) {return x+11}))
</script>  
```
