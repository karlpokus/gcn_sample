var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

test('totalAreaMultipleShapes', function(t){
  // args
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn), /Wrong number of arguments/, 'throws on missing args');
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn, []), /Empty array/, 'throws on empty array');
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn, ["random string"]), /Array contains one or more items of the wrong type/, 'throws on wrong item types in array');

  t.end();
});
