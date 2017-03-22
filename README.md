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

// Calculate the circumference of a triangle - circumTri(x, y, z)
var res = gcn.circumTri(5, 5, 5);
// Calculate the area of a triangle - areaTri(b, h);
var res = gcn.areaTri(5, 5);
```

# License
MIT
