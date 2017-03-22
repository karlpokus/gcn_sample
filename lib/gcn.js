function allNumbers(arr) {
  return arr.filter(function(item){
    return (typeof item === 'number' && !isNaN(item));
  }).length === arr.length;
};

function gcn() {} // may pass options later

gcn.prototype.circumTri = function(x, y, z) {
  var args = Array.prototype.slice.call(arguments);

  if (args.length != 3) {
    throw new Error('Wrong number of arguments');
  }
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }
  
  return x + y + z;
}

gcn.prototype.areaTri = function(b, h) {
  var args = Array.prototype.slice.call(arguments);
  
  if (args.length != 2) {
    throw new Error('Wrong number of arguments');
  }
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }
  
  return (b * h) / 2;
}

module.exports = gcn;