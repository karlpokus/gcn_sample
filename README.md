# gcn_sample
A geometry calculator in nodeJS. A work in progress.

# install
```bash
# install
$ git clone [repo]
$ npm i
# run tests
$ npm test
```

# api

### gnc.calc(shape, geometry, dimensions)
- All arguments are required
- `shape` *string* triangle|rectangle
- `geometry` *string* area|circumference
- `dimensions` *array* [numbers]
 - Area of triangle `[base, height]`
 - Circumference of triangle `[sideA, sideB, sideC]`
 - Area of rectangle `[base, height]`
 - Circumference of rectangle `[base, height]`

# Example
```javascript
var GCN = require('./lib/gcn'),
    gcn = new GCN(),
    areaOfTriangle = gcn.calc('triangle', 'area', [5, 5]);
```

# License
MIT
