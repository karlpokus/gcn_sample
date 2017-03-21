var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

test('circumTri', function(t){
  // n args
  t.throws(gcn.circumTri.bind(gcn, 5), /Wrong number of arguments/, 'throws on 1 args passed');
  t.throws(gcn.circumTri.bind(gcn, 5, 5), /Wrong number of arguments/, 'throws on 2 args passed');
  t.equal(gcn.circumTri(5, 5, 5), 15, '3 args passed');
  // args type
  t.throws(gcn.circumTri.bind(gcn, "5", [], {}), /One or more arguments is not a number/, 'throws on one wrong type passed');
  t.throws(gcn.circumTri.bind(gcn, "5", 5, 5), /One or more arguments is not a number/, 'throws on multiple wrong type passed');
  t.end();
});

