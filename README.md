# gcn_sample
A geometry calculator in nodeJS by [these](https://gist.github.com/KristofferV/60eafd920c799b73dd6660965039f5a8) requirements.

# install
```bash
# install
$ npm install gcn_sample
# run tests
$ npm test
# run tests with coverage
$ npm run test-cov
```
Note: I filed an issue on the [buffer deprecation warning](https://github.com/substack/covert/issues/15) for `covert`.

# api

### calc(shape)
Calculates the geometry of the shape based on dimensions

Required argument
- `shape` *Object*

Required keys for `shape`
- `shape` *String* triangle|rectangle
- `geometry` *String* area|circumference
- `dimensions` *Array* [numbers]

Required arguments for `dimensions` by shape and geometry
- Area of triangle `[base, height]`
- Circumference of triangle `[sideA, sideB, sideC]`
- Area of rectangle `[base, height]`
- Circumference of rectangle `[base, height]`

### totalAreaMultipleShapes(shapes)
Calculates the total area of shapes provided

Required argument
- `shapes` *Array* [Objects]

Required keys for each shape
- `shape` *String* triangle|rectangle|circle
- `dimensions` *Array* [numbers]

Required arguments for `dimensions` by shape
- Area of triangle `[base, height]`
- Area of rectangle `[base, height]`
- Area of circle `[radius]`

# Example
```javascript
var GCN = require('gcn_sample'),
    gcn = new GCN(),
    triangle = {
      shape: 'triangle', geometry: 'circumference', dimensions: [5, 5, 5]
    },  
    circumferenceOfTriangle = gcn.calc(triangle),
    multipleShapes = [
      {shape: 'triangle', dimensions: [6, 6]},
      {shape: 'rectangle', dimensions: [10, 10]},
      {shape: 'circle', dimensions: [5]}
    ],
    totalArea = gcn.totalAreaMultipleShapes(multipleShapes);
```

# License
MIT
