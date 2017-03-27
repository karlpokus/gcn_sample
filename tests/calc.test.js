var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

// test data
var collectionIntegrityError = /Object key values are not allowed/,
    errorData = [
      {args: {shape: 5}, msg: 'wrong shape type'},
      {args: {geometry: 5}, msg: 'wrong geometry type'},
      {args: {shape: 'tri', geometry: 'area', dimensions: [5, 5]}, msg: 'shape not allowed'},
      {args: {shape: 'triangle', geometry: 'house', dimensions: [5, 5]}, msg: 'geometry not allowed'},
      {args: {shape: 'tri', geometry: 'house', dimensions: [5, 5]}, msg: 'shape and geometry not allowed'},
      {args: {shape: 'triangle', geometry: 'circumference', dimensions: {}}, msg: 'wrong dimensions type'},
      {args: {shape: 'triangle', geometry: 'circumference', dimensions: [NaN]}, msg: 'wrong item type in dimensions'},
      {args: {shape: 'triangle', geometry: 'circumference', dimensions: [5, 5]}, msg: 'wrong dimension length'}
    ],
    areaTri = {
      shape: 'triangle', geometry: 'area', dimensions: [5, 5] // 12.5
    },
    circumTri = {
      shape: 'triangle', geometry: 'circumference', dimensions: [5, 5, 5] // 15
    },
    areaRect = {
      shape: 'rectangle', geometry: 'area', dimensions: [5, 5] // 25
    },
    circumRect = {
      shape: 'rectangle', geometry: 'circumference', dimensions: [5, 5] // 20
    };

test('calc', function(t){
  t.throws(gcn.calc.bind(gcn), /Wrong number of arguments/, 'missing args');
  t.throws(gcn.calc.bind(gcn, 'shape'), /Argument is not an Object/, 'wrong type of arg');

  errorData.forEach(function(obj){
    t.throws(gcn.calc.bind(gcn, obj.args), collectionIntegrityError, obj.msg);
  });

  t.equal(gcn.calc(areaTri), 12.5, 'Area of triangle');
  t.equal(gcn.calc(circumTri), 15, 'Circumference of triangle');
  t.equal(gcn.calc(areaRect), 25, 'Area of rectangle');
  t.equal(gcn.calc(circumRect), 20, 'Circumference of rectangle');

  t.end();
});
