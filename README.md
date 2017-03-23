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

### calc(shape, geometry, dimensions)
Calculates the [geometry] of the [shape] based on [dimensions]

Arguments
- All arguments are required
- `shape` *string* triangle|rectangle
- `geometry` *string* area|circumference
- `dimensions` *array* [numbers]

Required arguments for `dimensions`
- Area of triangle `[base, height]`
- Circumference of triangle `[sideA, sideB, sideC]`
- Area of rectangle `[base, height]`
- Circumference of rectangle `[base, height]`

### totalAreaMultipleShapes(arrayOfShapes)
Calculates the total area of all shapes supplied

Arguments
- All arguments are required
- `arrayOfShapes` *array* [objects] with keys `shape` triangle|rectangle|circle and `dimensions` like above.

# Example
```javascript
var GCN = require('./lib/gcn'),
    gcn = new GCN(),
    areaOfTriangle = gcn.calc('triangle', 'area', [5, 5]);
```

# License
MIT
