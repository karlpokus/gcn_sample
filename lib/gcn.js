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
  },
  circle: {
    area: function(radius) {
      return Math.round((radius *2) * Math.PI);
    }
  }
};

/**
 * Requires all items in array to be of type kind
 * @param {Array} arr
 * @param {String} kind
 * @return {Boolean}
 */
function allOfType(arr, kind) {
  var type = Object.prototype.toString,
      filterByNumber = function(item){
        return type.call(item) === kind && !isNaN(item);
      },
      filterByAny = function(item){
        return type.call(item) === kind;
      },
      n;

  if (type.call(kind) === '[object Number]') {
    n = arr.filter(filterByNumber);
  } else {
    n = arr.filter(filterByAny);
  }
  return n.length === arr.length;
};

/**
 * Requires obj key value types to match types in keyMap
 * @param {Object} obj
 * @param {Object} keyMap
 * @return {Boolean}
 */
function hasKeysOfType(obj, keyMap) {
  var type = Object.prototype.toString,
      keys = Object.keys(keyMap);

  return keys
    .filter(function(key){
      return type.call(obj[key]) === keyMap[key].type;
    }).length === keys.length;
}

/**
 * Requires values in obj to match allowed values in keyMap
 * Values of type String must be found in allowed array,
 * values of type Array must have each item match allowed type
 * and also its length match the arity of its function in shapes
 * @param {Object} obj
 * @param {Object} keyMap
 * @param {Object} shapes
 * @return {Boolean}
 */
function hasAllowedValues(obj, keyMap, shapes) {
  var type = Object.prototype.toString,
      keys = Object.keys(keyMap);

  return keys
    .filter(function(key){
      if (keyMap[key].type === '[object String]') {
        return keyMap[key].allowed.indexOf(obj[key]) !== -1;
      }
      if (keyMap[key].type === '[object Array]') {
        return allOfType(obj[key], keyMap[key].allowed) &&
          shapes[obj['shape']] &&
          shapes[obj['shape']][obj['geometry']] &&
          obj[key].length === shapes[obj['shape']][obj['geometry']].length;
      }
      return false;
    }).length === keys.length;
}

/**
 * Requires item to be of type Object
 * @param {Unknown} item
 * @return {Boolean}
 */
function isObj(item) {
  return Object.prototype.toString.call(item) === '[object Object]';
}

/**
 * Requires items in array to
 * be of type Object
 * have keys and values of certain type
 * have allowed values
 * @param {Array} obj
 * @param {Object} keyMap
 * @param {Object} shapes
 * @return {Boolean}
 */
function collectionIntegrity(arr, keyMap, shapes) {
  return arr.filter(function(item){
    return isObj(item) &&
      hasKeysOfType(item, keyMap) &&
      hasAllowedValues(item, keyMap, shapes)
  }).length === arr.length;
}

/**
 * Calculator constructor
 * @constructor
 */
function gcn() {} // may pass options later

/**
 * Calculates the [geometry] of the [shape] based on [dimensions]
 * @param {Object} shape
 * @return {Number} sum
 */
gcn.prototype.calc = function(shape) {
  if (arguments.length != 1) {
    throw new Error('Wrong number of arguments');
  }

  if (!isObj(shape)) {
    throw new Error('Argument is not an Object');
  }

  var keyMap = {
    shape: {
      type: '[object String]',
      allowed: ['triangle', 'rectangle']
    },
    geometry: {
      type: '[object String]',
      allowed: ['area', 'circumference']
    },
    dimensions: {
      type: '[object Array]',
      allowed: '[object Number]'
    }
  };

  if (!collectionIntegrity([shape], keyMap, shapes)) {
    throw new Error('Object key values are not allowed');
  }
  return shapes[shape.shape][shape.geometry].apply(null, shape.dimensions);
}

/**
 * Calculates the total area of shapes provided
 * @param {Array} arrayOfShapes
 * @return {Number} sum
 */
gcn.prototype.totalAreaMultipleShapes = function(arrayOfShapes) {
  var type = Object.prototype.toString;

  if (arguments.length != 1) {
    throw new Error('Wrong number of arguments');
  }

  if (type.call(arrayOfShapes) !== '[object Array]') {
    throw new Error('Argument is not an array');
  }

  if (arrayOfShapes.length === 0) {
    throw new Error('Empty array');
  }

  var keyMap = {
    shape: {
      type: '[object String]',
      allowed: Object.keys(shapes)
    },
    geometry: {
      type: '[object String]',
      allowed: ['area']
    },
    dimensions: {
      type: '[object Array]',
      allowed: '[object Number]'
    }
  };

  arrayOfShapes = arrayOfShapes.map(function(o){
    o.geometry = 'area';
    return o;
  });

  if (!collectionIntegrity(arrayOfShapes, keyMap, shapes)) {
    throw new Error('Array items are not allowed');
  }

  return arrayOfShapes
    .reduce(function(base, obj){
      base += shapes[obj.shape][obj.geometry].apply(null, obj.dimensions);
      return base;
    }, 0);
}

module.exports = gcn;
