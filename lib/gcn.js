function allNumbers(arr) {
  return arr.filter(function(item){
    return (typeof item === 'number' && !isNaN(item));
  }).length === arr.length;
};

var shapes = {
  triangle: {
    area: function(base, height) {
      return (base * height) / 2;
    },
    circumference: function(a, b, c) {
      return a + b + c;
    }
  },
  rectangle: {
    area: function(base, height) {
      return base * height;
    },
    circumference: function(base, height) {
      return (base * 2) + (height * 2);
    }
  }
};

function gcn() {} // may pass options later

gcn.prototype.calc = function(shape, geometry, dimensions) {
  var type = Object.prototype.toString;

  if (arguments.length != 3) {
    throw new Error('Wrong number of arguments');
  }

  if (typeof shape !== 'string' ||
      typeof geometry !== 'string' ||
      type.call(dimensions) !== '[object Array]') {
    throw new Error('One or more arguments is of the wrong type');
  }

  if (!shapes[shape]) {
    throw new Error('Unknown shape');
  }

  if (!shapes[shape][geometry]) {
    throw new Error('Unknown geometry');
  }

  if (dimensions.length === 0) {
    throw new Error('Dimension data is missing');
  }

  if (!allNumbers(dimensions)) {
    throw new Error('One or more dimensions is not a number');
  }

  return shapes[shape][geometry].apply(gcn, dimensions);
}

module.exports = gcn;
