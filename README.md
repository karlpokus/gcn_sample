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

// circumTri(x, y, z)
var res = gcn.circumTri(5, 5, 5);
```

# License
MIT
