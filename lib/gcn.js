function gcn() {
  
}

gcn.prototype.circumTri = function(x, y, z) {
  var args = Array.prototype.slice.call(arguments),
      allNumbers = function(arr) {
        return arr.filter(function(item){
          return (typeof item === 'number' && !isNaN(item));
        }).length === arr.length;
      };
  
  if (args.length != 3) {
    throw new Error('Wrong number of arguments');
  }
  
  if (!allNumbers(args)) {
    throw new Error('One or more arguments is not a number');
  }
  
  return x + y + z;
}

module.exports = gcn;