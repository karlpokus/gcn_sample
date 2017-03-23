function allNumbers(arr) {
  return arr.filter(function(item){
    return (typeof item === 'number' && !isNaN(item));
  }).length === arr.length;
};

function gcn() {} // may pass options later

gcn.prototype.circumTri = function(a, b, c) {
  var args = Array.prototype.slice.call(arguments);

  if (args.length != 3) {
    throw new Error('Wrong number of arguments');
  }
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }

  return a + b + c;
}

gcn.prototype.areaTri = function(base, height) {
  var args = Array.prototype.slice.call(arguments);

  if (args.length != 2) {
    throw new Error('Wrong number of arguments');
  }
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }

  return (base * height) / 2;
}

gcn.prototype.circumRect = function(base, height) {
  var args = Array.prototype.slice.call(arguments);

  if (args.length != 2) {
    throw new Error('Wrong number of arguments');
  }
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }
  
  return (base * 2) + (height * 2);
}

module.exports = gcn;
