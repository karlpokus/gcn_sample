var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

test('calc', function(t){
  // n args
  t.throws(gcn.calc.bind(gcn), /Wrong number of arguments/, 'throws on 0 args passed');
  t.throws(gcn.calc.bind(gcn, null), /Wrong number of arguments/, 'throws on 1 args passed');
  t.throws(gcn.calc.bind(gcn, null, null), /Wrong number of arguments/, 'throws on 2 args passed');
  // args type
  t.throws(gcn.calc.bind(gcn, 'triangle', 'area', '5'), /One or more arguments is of the wrong type/, 'throws on wrong arg type');
  t.throws(gcn.calc.bind(gcn, 5, "area", [5, 5]), /One or more arguments is of the wrong type/, 'throws on wrong arg type');
  t.throws(gcn.calc.bind(gcn, 'triangle', 5, [5, 5]), /One or more arguments is of the wrong type/, 'throws on wrong arg type');
  // unknown shape, geometry
  t.throws(gcn.calc.bind(gcn, 'random shape', 'area', [5, 5]), /Unknown shape/, 'throws on unknown shape');
  t.throws(gcn.calc.bind(gcn, 'triangle', 'wierd geometry', [5, 5]), /Unknown geometry/, 'throws on unknown geometry');
  // wrong dimensions
  t.throws(gcn.calc.bind(gcn, 'triangle', 'area', []), /Dimension data is missing/, 'throws on missing dimension data');
  t.throws(gcn.calc.bind(gcn, 'triangle', 'area', [5, "5"]), /One or more dimensions is not a number/, 'throws on wrong type of dimension data');
  // should work
  t.equal(gcn.calc('triangle', 'area', [5, 5]), 12.5, 'triangle area');
  t.equal(gcn.calc('triangle', 'circumference', [5, 5, 5]), 15, 'triangle circumference');
  t.equal(gcn.calc('rectangle', 'area', [5, 5]), 25, 'rectangle area');
  t.equal(gcn.calc('rectangle', 'circumference', [5, 5]), 20, 'rectangle circumference');

  t.end();
});
