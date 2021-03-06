# poor-man-lens

[![NPM](https://img.shields.io/npm/v/poor-man-lens.svg)](https://www.npmjs.org/package/poor-man-lens)

A simple util to help you keep your objects immutable. Contains two functions:

* ``pget(object, path)`` that will return the value of the object at that path - path could be an array of indeces or a string index in the form of 'a.b.c'
* ``pset(object, path, value)`` that will set the value of the object at that path to value - path is as above, value can be either a value or a function that will be applied to the object's value at that index

## Usage with require (node.js)

```
npm install poor-man-lens
```

``` javascript
> var pml = require('poor-man-lens')

> console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
{ b: 2 }

> console.log(pml.pset({'a':[{'b':2}]}, 'a.1', {'c':3}))
{ a: [ { b: 2 }, { c: 3 } ] }

> console.log(pml.pset({'a':[{'b':2}]}, 'a.0.b', function(x) { return x*x } ))
{ a: [ { b: 4 } ] }
```

## Usage within browser
``` html
<script type="text/javascript" src='pml.js'></script>
<script>
  var pml = PoorManLens
  console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
  console.log(pml.pset({'a':[{'b':2}]}, 'a.1', {'c':3}))
  console.log(pml.pset([[[[1]]]], [0,0,0,0], function(x) {return x+11}))
</script>  
```
