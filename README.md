# gcn_sample
A geometry calculator in nodeJS. A work in progress.

# usage
```bash
# install
$ git clone [repo]
$ npm i
# run tests
$ npm test
```

### api
```javascript
var GCN = require('./lib/gcn'),
    gcn = new GCN();

// Calculate the circumference of a triangle - circumTri(sideA, sideB, sideC)
var ct = gcn.circumTri(5, 5, 5);
// Calculate the area of a triangle - areaTri(base, height);
var at = gcn.areaTri(5, 5);
// Calculate the circumference of a rectangle - circumRect(base, height);
var cr = gcn.circumRect(5, 5);
```

# License
MIT
