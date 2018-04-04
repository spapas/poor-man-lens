# poor-man-lens

```
> var pml = require('poor-man-lens')

> console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
{ b: 2 }
console.log(pml.pget({'a':[{'b':2}]}, 'a.0'))
> console.log(pml.pset({'a':[{'b':2}]}, 'a.1', {'c':3}))
{ a: [ { b: 2 }, { c: 3 } ] }
```
