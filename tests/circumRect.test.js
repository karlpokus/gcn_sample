var test = require('tape'),
    path = require('path'),
    GCN = require(path.resolve(__dirname, '../', 'index')),
    gcn = new GCN();

test('circumRect', function(t){
  // n args
  t.throws(gcn.circumRect.bind(gcn, 5), /Wrong number of arguments/, 'throws on 1 args passed');
  t.equal(gcn.circumRect(5, 5), 20, '2 args passed');
  // args type
  ["5", {}, [], NaN, undefined, null]
    .forEach(function(arg){
      t.throws(gcn.circumRect.bind(gcn, arg, arg), /One or more arguments is not a number/, 'throws on wrong type passed ' + Object.prototype.toString.call(arg));
    });

  t.end();
});
