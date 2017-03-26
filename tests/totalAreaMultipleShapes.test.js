var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

// test data
var collectionIntegrityError = /Array items are not allowed/,
    errorData = [
      {args: ['string'], msg: 'wrong array item type'},
      {args: [{shape: 5}], msg: 'wrong shape type'},
      {args: [{shape: 'bird'}], msg: 'shape value not allowed'},
      {args: [{geometry: 5}], msg: 'wrong geometry type'},
      {args: [{geometry: 'house'}], msg: 'geometry value not allowed'},
      {args: [{dimensions: {}}], msg: 'wrong dimensions type'},
      {args: [{dimensions: [NaN]}], msg: 'wrong item type in dimensions'},
      {args: [{shape: 'circle', dimensions: [5, 5]}], msg: 'wrong dimension length'}
    ],
    triangles = [
      {shape: 'triangle', dimensions: [2, 2]}, // 2
      {shape: 'triangle', dimensions: [4, 4]} // 8
    ],
    multipleShapes = [
      {shape: 'triangle', dimensions: [6, 6]}, // 18
      {shape: 'rectangle', dimensions: [10, 10]}, // 100
      {shape: 'circle', dimensions: [5]} // 31
    ];

test('totalAreaMultipleShapes', function(t){
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn), /Wrong number of arguments/, 'missing args');
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn, {}), /Argument is not an array/, 'wrong type of arg');
  t.throws(gcn.totalAreaMultipleShapes.bind(gcn, []), /Empty array/, 'empty array');

  errorData.forEach(function(obj){
    t.throws(gcn.totalAreaMultipleShapes.bind(gcn, obj.args), collectionIntegrityError, obj.msg);
  });

  t.equal(gcn.totalAreaMultipleShapes(triangles), 10, 'Adds area of multiple triangles');
  t.equal(gcn.totalAreaMultipleShapes(multipleShapes), 149, 'Adds area of multiple shapes');

  t.end();
});
