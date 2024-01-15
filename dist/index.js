"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/matter-js/build/matter.js
  var require_matter = __commonJS({
    "node_modules/matter-js/build/matter.js"(exports, module) {
      init_live_reload();
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define("Matter", [], factory);
        else if (typeof exports === "object")
          exports["Matter"] = factory();
        else
          root["Matter"] = factory();
      })(exports, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1)
                value = __webpack_require__(value);
              if (mode & 8)
                return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string")
                for (var key in value)
                  __webpack_require__.d(ns, key, function(key2) {
                    return value[key2];
                  }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 20);
          }([
            /* 0 */
            /***/
            function(module2, exports2) {
              var Common = {};
              module2.exports = Common;
              (function() {
                Common._baseDelta = 1e3 / 60;
                Common._nextId = 0;
                Common._seed = 0;
                Common._nowStartTime = +/* @__PURE__ */ new Date();
                Common._warnedOnce = {};
                Common._decomp = null;
                Common.extend = function(obj, deep) {
                  var argsStart, args, deepClone;
                  if (typeof deep === "boolean") {
                    argsStart = 2;
                    deepClone = deep;
                  } else {
                    argsStart = 1;
                    deepClone = true;
                  }
                  for (var i = argsStart; i < arguments.length; i++) {
                    var source = arguments[i];
                    if (source) {
                      for (var prop in source) {
                        if (deepClone && source[prop] && source[prop].constructor === Object) {
                          if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                          } else {
                            obj[prop] = source[prop];
                          }
                        } else {
                          obj[prop] = source[prop];
                        }
                      }
                    }
                  }
                  return obj;
                };
                Common.clone = function(obj, deep) {
                  return Common.extend({}, deep, obj);
                };
                Common.keys = function(obj) {
                  if (Object.keys)
                    return Object.keys(obj);
                  var keys = [];
                  for (var key in obj)
                    keys.push(key);
                  return keys;
                };
                Common.values = function(obj) {
                  var values = [];
                  if (Object.keys) {
                    var keys = Object.keys(obj);
                    for (var i = 0; i < keys.length; i++) {
                      values.push(obj[keys[i]]);
                    }
                    return values;
                  }
                  for (var key in obj)
                    values.push(obj[key]);
                  return values;
                };
                Common.get = function(obj, path, begin, end) {
                  path = path.split(".").slice(begin, end);
                  for (var i = 0; i < path.length; i += 1) {
                    obj = obj[path[i]];
                  }
                  return obj;
                };
                Common.set = function(obj, path, val, begin, end) {
                  var parts = path.split(".").slice(begin, end);
                  Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                  return val;
                };
                Common.shuffle = function(array) {
                  for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Common.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                  }
                  return array;
                };
                Common.choose = function(choices) {
                  return choices[Math.floor(Common.random() * choices.length)];
                };
                Common.isElement = function(obj) {
                  if (typeof HTMLElement !== "undefined") {
                    return obj instanceof HTMLElement;
                  }
                  return !!(obj && obj.nodeType && obj.nodeName);
                };
                Common.isArray = function(obj) {
                  return Object.prototype.toString.call(obj) === "[object Array]";
                };
                Common.isFunction = function(obj) {
                  return typeof obj === "function";
                };
                Common.isPlainObject = function(obj) {
                  return typeof obj === "object" && obj.constructor === Object;
                };
                Common.isString = function(obj) {
                  return toString.call(obj) === "[object String]";
                };
                Common.clamp = function(value, min, max) {
                  if (value < min)
                    return min;
                  if (value > max)
                    return max;
                  return value;
                };
                Common.sign = function(value) {
                  return value < 0 ? -1 : 1;
                };
                Common.now = function() {
                  if (typeof window !== "undefined" && window.performance) {
                    if (window.performance.now) {
                      return window.performance.now();
                    } else if (window.performance.webkitNow) {
                      return window.performance.webkitNow();
                    }
                  }
                  if (Date.now) {
                    return Date.now();
                  }
                  return /* @__PURE__ */ new Date() - Common._nowStartTime;
                };
                Common.random = function(min, max) {
                  min = typeof min !== "undefined" ? min : 0;
                  max = typeof max !== "undefined" ? max : 1;
                  return min + _seededRandom() * (max - min);
                };
                var _seededRandom = function() {
                  Common._seed = (Common._seed * 9301 + 49297) % 233280;
                  return Common._seed / 233280;
                };
                Common.colorToNumber = function(colorString) {
                  colorString = colorString.replace("#", "");
                  if (colorString.length == 3) {
                    colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                  }
                  return parseInt(colorString, 16);
                };
                Common.logLevel = 1;
                Common.log = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                    console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.info = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
                    console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.warn = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                    console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.warnOnce = function() {
                  var message = Array.prototype.slice.call(arguments).join(" ");
                  if (!Common._warnedOnce[message]) {
                    Common.warn(message);
                    Common._warnedOnce[message] = true;
                  }
                };
                Common.deprecated = function(obj, prop, warning) {
                  obj[prop] = Common.chain(function() {
                    Common.warnOnce("\u{1F505} deprecated \u{1F505}", warning);
                  }, obj[prop]);
                };
                Common.nextId = function() {
                  return Common._nextId++;
                };
                Common.indexOf = function(haystack, needle) {
                  if (haystack.indexOf)
                    return haystack.indexOf(needle);
                  for (var i = 0; i < haystack.length; i++) {
                    if (haystack[i] === needle)
                      return i;
                  }
                  return -1;
                };
                Common.map = function(list, func) {
                  if (list.map) {
                    return list.map(func);
                  }
                  var mapped = [];
                  for (var i = 0; i < list.length; i += 1) {
                    mapped.push(func(list[i]));
                  }
                  return mapped;
                };
                Common.topologicalSort = function(graph) {
                  var result = [], visited = [], temp = [];
                  for (var node in graph) {
                    if (!visited[node] && !temp[node]) {
                      Common._topologicalSort(node, visited, temp, graph, result);
                    }
                  }
                  return result;
                };
                Common._topologicalSort = function(node, visited, temp, graph, result) {
                  var neighbors = graph[node] || [];
                  temp[node] = true;
                  for (var i = 0; i < neighbors.length; i += 1) {
                    var neighbor = neighbors[i];
                    if (temp[neighbor]) {
                      continue;
                    }
                    if (!visited[neighbor]) {
                      Common._topologicalSort(neighbor, visited, temp, graph, result);
                    }
                  }
                  temp[node] = false;
                  visited[node] = true;
                  result.push(node);
                };
                Common.chain = function() {
                  var funcs = [];
                  for (var i = 0; i < arguments.length; i += 1) {
                    var func = arguments[i];
                    if (func._chained) {
                      funcs.push.apply(funcs, func._chained);
                    } else {
                      funcs.push(func);
                    }
                  }
                  var chain = function() {
                    var lastResult, args = new Array(arguments.length);
                    for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
                      args[i2] = arguments[i2];
                    }
                    for (i2 = 0; i2 < funcs.length; i2 += 1) {
                      var result = funcs[i2].apply(lastResult, args);
                      if (typeof result !== "undefined") {
                        lastResult = result;
                      }
                    }
                    return lastResult;
                  };
                  chain._chained = funcs;
                  return chain;
                };
                Common.chainPathBefore = function(base, path, func) {
                  return Common.set(base, path, Common.chain(
                    func,
                    Common.get(base, path)
                  ));
                };
                Common.chainPathAfter = function(base, path, func) {
                  return Common.set(base, path, Common.chain(
                    Common.get(base, path),
                    func
                  ));
                };
                Common.setDecomp = function(decomp) {
                  Common._decomp = decomp;
                };
                Common.getDecomp = function() {
                  var decomp = Common._decomp;
                  try {
                    if (!decomp && typeof window !== "undefined") {
                      decomp = window.decomp;
                    }
                    if (!decomp && typeof global !== "undefined") {
                      decomp = global.decomp;
                    }
                  } catch (e) {
                    decomp = null;
                  }
                  return decomp;
                };
              })();
            },
            /* 1 */
            /***/
            function(module2, exports2) {
              var Bounds = {};
              module2.exports = Bounds;
              (function() {
                Bounds.create = function(vertices) {
                  var bounds = {
                    min: { x: 0, y: 0 },
                    max: { x: 0, y: 0 }
                  };
                  if (vertices)
                    Bounds.update(bounds, vertices);
                  return bounds;
                };
                Bounds.update = function(bounds, vertices, velocity) {
                  bounds.min.x = Infinity;
                  bounds.max.x = -Infinity;
                  bounds.min.y = Infinity;
                  bounds.max.y = -Infinity;
                  for (var i = 0; i < vertices.length; i++) {
                    var vertex = vertices[i];
                    if (vertex.x > bounds.max.x)
                      bounds.max.x = vertex.x;
                    if (vertex.x < bounds.min.x)
                      bounds.min.x = vertex.x;
                    if (vertex.y > bounds.max.y)
                      bounds.max.y = vertex.y;
                    if (vertex.y < bounds.min.y)
                      bounds.min.y = vertex.y;
                  }
                  if (velocity) {
                    if (velocity.x > 0) {
                      bounds.max.x += velocity.x;
                    } else {
                      bounds.min.x += velocity.x;
                    }
                    if (velocity.y > 0) {
                      bounds.max.y += velocity.y;
                    } else {
                      bounds.min.y += velocity.y;
                    }
                  }
                };
                Bounds.contains = function(bounds, point) {
                  return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
                };
                Bounds.overlaps = function(boundsA, boundsB) {
                  return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
                };
                Bounds.translate = function(bounds, vector) {
                  bounds.min.x += vector.x;
                  bounds.max.x += vector.x;
                  bounds.min.y += vector.y;
                  bounds.max.y += vector.y;
                };
                Bounds.shift = function(bounds, position) {
                  var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                  bounds.min.x = position.x;
                  bounds.max.x = position.x + deltaX;
                  bounds.min.y = position.y;
                  bounds.max.y = position.y + deltaY;
                };
              })();
            },
            /* 2 */
            /***/
            function(module2, exports2) {
              var Vector = {};
              module2.exports = Vector;
              (function() {
                Vector.create = function(x, y) {
                  return { x: x || 0, y: y || 0 };
                };
                Vector.clone = function(vector) {
                  return { x: vector.x, y: vector.y };
                };
                Vector.magnitude = function(vector) {
                  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                };
                Vector.magnitudeSquared = function(vector) {
                  return vector.x * vector.x + vector.y * vector.y;
                };
                Vector.rotate = function(vector, angle, output) {
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  if (!output)
                    output = {};
                  var x = vector.x * cos - vector.y * sin;
                  output.y = vector.x * sin + vector.y * cos;
                  output.x = x;
                  return output;
                };
                Vector.rotateAbout = function(vector, angle, point, output) {
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  if (!output)
                    output = {};
                  var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                  output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                  output.x = x;
                  return output;
                };
                Vector.normalise = function(vector) {
                  var magnitude = Vector.magnitude(vector);
                  if (magnitude === 0)
                    return { x: 0, y: 0 };
                  return { x: vector.x / magnitude, y: vector.y / magnitude };
                };
                Vector.dot = function(vectorA, vectorB) {
                  return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
                };
                Vector.cross = function(vectorA, vectorB) {
                  return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
                };
                Vector.cross3 = function(vectorA, vectorB, vectorC) {
                  return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
                };
                Vector.add = function(vectorA, vectorB, output) {
                  if (!output)
                    output = {};
                  output.x = vectorA.x + vectorB.x;
                  output.y = vectorA.y + vectorB.y;
                  return output;
                };
                Vector.sub = function(vectorA, vectorB, output) {
                  if (!output)
                    output = {};
                  output.x = vectorA.x - vectorB.x;
                  output.y = vectorA.y - vectorB.y;
                  return output;
                };
                Vector.mult = function(vector, scalar) {
                  return { x: vector.x * scalar, y: vector.y * scalar };
                };
                Vector.div = function(vector, scalar) {
                  return { x: vector.x / scalar, y: vector.y / scalar };
                };
                Vector.perp = function(vector, negate) {
                  negate = negate === true ? -1 : 1;
                  return { x: negate * -vector.y, y: negate * vector.x };
                };
                Vector.neg = function(vector) {
                  return { x: -vector.x, y: -vector.y };
                };
                Vector.angle = function(vectorA, vectorB) {
                  return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
                };
                Vector._temp = [
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create()
                ];
              })();
            },
            /* 3 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Vertices = {};
              module2.exports = Vertices;
              var Vector = __webpack_require__(2);
              var Common = __webpack_require__(0);
              (function() {
                Vertices.create = function(points, body) {
                  var vertices = [];
                  for (var i = 0; i < points.length; i++) {
                    var point = points[i], vertex = {
                      x: point.x,
                      y: point.y,
                      index: i,
                      body,
                      isInternal: false
                    };
                    vertices.push(vertex);
                  }
                  return vertices;
                };
                Vertices.fromPath = function(path, body) {
                  var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
                  path.replace(pathPattern, function(match, x, y) {
                    points.push({ x: parseFloat(x), y: parseFloat(y) });
                  });
                  return Vertices.create(points, body);
                };
                Vertices.centre = function(vertices) {
                  var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;
                  for (var i = 0; i < vertices.length; i++) {
                    j = (i + 1) % vertices.length;
                    cross = Vector.cross(vertices[i], vertices[j]);
                    temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                    centre = Vector.add(centre, temp);
                  }
                  return Vector.div(centre, 6 * area);
                };
                Vertices.mean = function(vertices) {
                  var average = { x: 0, y: 0 };
                  for (var i = 0; i < vertices.length; i++) {
                    average.x += vertices[i].x;
                    average.y += vertices[i].y;
                  }
                  return Vector.div(average, vertices.length);
                };
                Vertices.area = function(vertices, signed) {
                  var area = 0, j = vertices.length - 1;
                  for (var i = 0; i < vertices.length; i++) {
                    area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                    j = i;
                  }
                  if (signed)
                    return area / 2;
                  return Math.abs(area) / 2;
                };
                Vertices.inertia = function(vertices, mass) {
                  var numerator = 0, denominator = 0, v = vertices, cross, j;
                  for (var n = 0; n < v.length; n++) {
                    j = (n + 1) % v.length;
                    cross = Math.abs(Vector.cross(v[j], v[n]));
                    numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                    denominator += cross;
                  }
                  return mass / 6 * (numerator / denominator);
                };
                Vertices.translate = function(vertices, vector, scalar) {
                  scalar = typeof scalar !== "undefined" ? scalar : 1;
                  var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
                  for (i = 0; i < verticesLength; i++) {
                    vertices[i].x += translateX;
                    vertices[i].y += translateY;
                  }
                  return vertices;
                };
                Vertices.rotate = function(vertices, angle, point) {
                  if (angle === 0)
                    return;
                  var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
                  for (i = 0; i < verticesLength; i++) {
                    vertex = vertices[i];
                    dx = vertex.x - pointX;
                    dy = vertex.y - pointY;
                    vertex.x = pointX + (dx * cos - dy * sin);
                    vertex.y = pointY + (dx * sin + dy * cos);
                  }
                  return vertices;
                };
                Vertices.contains = function(vertices, point) {
                  var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
                  for (var i = 0; i < verticesLength; i++) {
                    nextVertex = vertices[i];
                    if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                      return false;
                    }
                    vertex = nextVertex;
                  }
                  return true;
                };
                Vertices.scale = function(vertices, scaleX, scaleY, point) {
                  if (scaleX === 1 && scaleY === 1)
                    return vertices;
                  point = point || Vertices.centre(vertices);
                  var vertex, delta;
                  for (var i = 0; i < vertices.length; i++) {
                    vertex = vertices[i];
                    delta = Vector.sub(vertex, point);
                    vertices[i].x = point.x + delta.x * scaleX;
                    vertices[i].y = point.y + delta.y * scaleY;
                  }
                  return vertices;
                };
                Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                  if (typeof radius === "number") {
                    radius = [radius];
                  } else {
                    radius = radius || [8];
                  }
                  quality = typeof quality !== "undefined" ? quality : -1;
                  qualityMin = qualityMin || 2;
                  qualityMax = qualityMax || 14;
                  var newVertices = [];
                  for (var i = 0; i < vertices.length; i++) {
                    var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                    if (currentRadius === 0) {
                      newVertices.push(vertex);
                      continue;
                    }
                    var prevNormal = Vector.normalise({
                      x: vertex.y - prevVertex.y,
                      y: prevVertex.x - vertex.x
                    });
                    var nextNormal = Vector.normalise({
                      x: nextVertex.y - vertex.y,
                      y: vertex.x - nextVertex.x
                    });
                    var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                    var precision = quality;
                    if (quality === -1) {
                      precision = Math.pow(currentRadius, 0.32) * 1.75;
                    }
                    precision = Common.clamp(precision, qualityMin, qualityMax);
                    if (precision % 2 === 1)
                      precision += 1;
                    var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                    for (var j = 0; j < precision; j++) {
                      newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                    }
                  }
                  return newVertices;
                };
                Vertices.clockwiseSort = function(vertices) {
                  var centre = Vertices.mean(vertices);
                  vertices.sort(function(vertexA, vertexB) {
                    return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                  });
                  return vertices;
                };
                Vertices.isConvex = function(vertices) {
                  var flag = 0, n = vertices.length, i, j, k, z;
                  if (n < 3)
                    return null;
                  for (i = 0; i < n; i++) {
                    j = (i + 1) % n;
                    k = (i + 2) % n;
                    z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                    z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                    if (z < 0) {
                      flag |= 1;
                    } else if (z > 0) {
                      flag |= 2;
                    }
                    if (flag === 3) {
                      return false;
                    }
                  }
                  if (flag !== 0) {
                    return true;
                  } else {
                    return null;
                  }
                };
                Vertices.hull = function(vertices) {
                  var upper = [], lower = [], vertex, i;
                  vertices = vertices.slice(0);
                  vertices.sort(function(vertexA, vertexB) {
                    var dx = vertexA.x - vertexB.x;
                    return dx !== 0 ? dx : vertexA.y - vertexB.y;
                  });
                  for (i = 0; i < vertices.length; i += 1) {
                    vertex = vertices[i];
                    while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                      lower.pop();
                    }
                    lower.push(vertex);
                  }
                  for (i = vertices.length - 1; i >= 0; i -= 1) {
                    vertex = vertices[i];
                    while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                      upper.pop();
                    }
                    upper.push(vertex);
                  }
                  upper.pop();
                  lower.pop();
                  return upper.concat(lower);
                };
              })();
            },
            /* 4 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Body = {};
              module2.exports = Body;
              var Vertices = __webpack_require__(3);
              var Vector = __webpack_require__(2);
              var Sleeping = __webpack_require__(7);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              var Axes = __webpack_require__(11);
              (function() {
                Body._timeCorrection = true;
                Body._inertiaScale = 4;
                Body._nextCollidingGroupId = 1;
                Body._nextNonCollidingGroupId = -1;
                Body._nextCategory = 1;
                Body._baseDelta = 1e3 / 60;
                Body.create = function(options) {
                  var defaults2 = {
                    id: Common.nextId(),
                    type: "body",
                    label: "Body",
                    parts: [],
                    plugin: {},
                    angle: 0,
                    vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                    position: { x: 0, y: 0 },
                    force: { x: 0, y: 0 },
                    torque: 0,
                    positionImpulse: { x: 0, y: 0 },
                    constraintImpulse: { x: 0, y: 0, angle: 0 },
                    totalContacts: 0,
                    speed: 0,
                    angularSpeed: 0,
                    velocity: { x: 0, y: 0 },
                    angularVelocity: 0,
                    isSensor: false,
                    isStatic: false,
                    isSleeping: false,
                    motion: 0,
                    sleepThreshold: 60,
                    density: 1e-3,
                    restitution: 0,
                    friction: 0.1,
                    frictionStatic: 0.5,
                    frictionAir: 0.01,
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0
                    },
                    slop: 0.05,
                    timeScale: 1,
                    render: {
                      visible: true,
                      opacity: 1,
                      strokeStyle: null,
                      fillStyle: null,
                      lineWidth: null,
                      sprite: {
                        xScale: 1,
                        yScale: 1,
                        xOffset: 0,
                        yOffset: 0
                      }
                    },
                    events: null,
                    bounds: null,
                    chamfer: null,
                    circleRadius: 0,
                    positionPrev: null,
                    anglePrev: 0,
                    parent: null,
                    axes: null,
                    area: 0,
                    mass: 0,
                    inertia: 0,
                    deltaTime: 1e3 / 60,
                    _original: null
                  };
                  var body = Common.extend(defaults2, options);
                  _initProperties(body, options);
                  return body;
                };
                Body.nextGroup = function(isNonColliding) {
                  if (isNonColliding)
                    return Body._nextNonCollidingGroupId--;
                  return Body._nextCollidingGroupId++;
                };
                Body.nextCategory = function() {
                  Body._nextCategory = Body._nextCategory << 1;
                  return Body._nextCategory;
                };
                var _initProperties = function(body, options) {
                  options = options || {};
                  Body.set(body, {
                    bounds: body.bounds || Bounds.create(body.vertices),
                    positionPrev: body.positionPrev || Vector.clone(body.position),
                    anglePrev: body.anglePrev || body.angle,
                    vertices: body.vertices,
                    parts: body.parts || [body],
                    isStatic: body.isStatic,
                    isSleeping: body.isSleeping,
                    parent: body.parent || body
                  });
                  Vertices.rotate(body.vertices, body.angle, body.position);
                  Axes.rotate(body.axes, body.angle);
                  Bounds.update(body.bounds, body.vertices, body.velocity);
                  Body.set(body, {
                    axes: options.axes || body.axes,
                    area: options.area || body.area,
                    mass: options.mass || body.mass,
                    inertia: options.inertia || body.inertia
                  });
                  var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                  body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                  body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                  body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                  body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                  body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
                };
                Body.set = function(body, settings, value) {
                  var property;
                  if (typeof settings === "string") {
                    property = settings;
                    settings = {};
                    settings[property] = value;
                  }
                  for (property in settings) {
                    if (!Object.prototype.hasOwnProperty.call(settings, property))
                      continue;
                    value = settings[property];
                    switch (property) {
                      case "isStatic":
                        Body.setStatic(body, value);
                        break;
                      case "isSleeping":
                        Sleeping.set(body, value);
                        break;
                      case "mass":
                        Body.setMass(body, value);
                        break;
                      case "density":
                        Body.setDensity(body, value);
                        break;
                      case "inertia":
                        Body.setInertia(body, value);
                        break;
                      case "vertices":
                        Body.setVertices(body, value);
                        break;
                      case "position":
                        Body.setPosition(body, value);
                        break;
                      case "angle":
                        Body.setAngle(body, value);
                        break;
                      case "velocity":
                        Body.setVelocity(body, value);
                        break;
                      case "angularVelocity":
                        Body.setAngularVelocity(body, value);
                        break;
                      case "speed":
                        Body.setSpeed(body, value);
                        break;
                      case "angularSpeed":
                        Body.setAngularSpeed(body, value);
                        break;
                      case "parts":
                        Body.setParts(body, value);
                        break;
                      case "centre":
                        Body.setCentre(body, value);
                        break;
                      default:
                        body[property] = value;
                    }
                  }
                };
                Body.setStatic = function(body, isStatic) {
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    part.isStatic = isStatic;
                    if (isStatic) {
                      part._original = {
                        restitution: part.restitution,
                        friction: part.friction,
                        mass: part.mass,
                        inertia: part.inertia,
                        density: part.density,
                        inverseMass: part.inverseMass,
                        inverseInertia: part.inverseInertia
                      };
                      part.restitution = 0;
                      part.friction = 1;
                      part.mass = part.inertia = part.density = Infinity;
                      part.inverseMass = part.inverseInertia = 0;
                      part.positionPrev.x = part.position.x;
                      part.positionPrev.y = part.position.y;
                      part.anglePrev = part.angle;
                      part.angularVelocity = 0;
                      part.speed = 0;
                      part.angularSpeed = 0;
                      part.motion = 0;
                    } else if (part._original) {
                      part.restitution = part._original.restitution;
                      part.friction = part._original.friction;
                      part.mass = part._original.mass;
                      part.inertia = part._original.inertia;
                      part.density = part._original.density;
                      part.inverseMass = part._original.inverseMass;
                      part.inverseInertia = part._original.inverseInertia;
                      part._original = null;
                    }
                  }
                };
                Body.setMass = function(body, mass) {
                  var moment = body.inertia / (body.mass / 6);
                  body.inertia = moment * (mass / 6);
                  body.inverseInertia = 1 / body.inertia;
                  body.mass = mass;
                  body.inverseMass = 1 / body.mass;
                  body.density = body.mass / body.area;
                };
                Body.setDensity = function(body, density) {
                  Body.setMass(body, density * body.area);
                  body.density = density;
                };
                Body.setInertia = function(body, inertia) {
                  body.inertia = inertia;
                  body.inverseInertia = 1 / body.inertia;
                };
                Body.setVertices = function(body, vertices) {
                  if (vertices[0].body === body) {
                    body.vertices = vertices;
                  } else {
                    body.vertices = Vertices.create(vertices, body);
                  }
                  body.axes = Axes.fromVertices(body.vertices);
                  body.area = Vertices.area(body.vertices);
                  Body.setMass(body, body.density * body.area);
                  var centre = Vertices.centre(body.vertices);
                  Vertices.translate(body.vertices, centre, -1);
                  Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                  Vertices.translate(body.vertices, body.position);
                  Bounds.update(body.bounds, body.vertices, body.velocity);
                };
                Body.setParts = function(body, parts, autoHull) {
                  var i;
                  parts = parts.slice(0);
                  body.parts.length = 0;
                  body.parts.push(body);
                  body.parent = body;
                  for (i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    if (part !== body) {
                      part.parent = body;
                      body.parts.push(part);
                    }
                  }
                  if (body.parts.length === 1)
                    return;
                  autoHull = typeof autoHull !== "undefined" ? autoHull : true;
                  if (autoHull) {
                    var vertices = [];
                    for (i = 0; i < parts.length; i++) {
                      vertices = vertices.concat(parts[i].vertices);
                    }
                    Vertices.clockwiseSort(vertices);
                    var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                    Body.setVertices(body, hull);
                    Vertices.translate(body.vertices, hullCentre);
                  }
                  var total = Body._totalProperties(body);
                  body.area = total.area;
                  body.parent = body;
                  body.position.x = total.centre.x;
                  body.position.y = total.centre.y;
                  body.positionPrev.x = total.centre.x;
                  body.positionPrev.y = total.centre.y;
                  Body.setMass(body, total.mass);
                  Body.setInertia(body, total.inertia);
                  Body.setPosition(body, total.centre);
                };
                Body.setCentre = function(body, centre, relative) {
                  if (!relative) {
                    body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                    body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                    body.position.x = centre.x;
                    body.position.y = centre.y;
                  } else {
                    body.positionPrev.x += centre.x;
                    body.positionPrev.y += centre.y;
                    body.position.x += centre.x;
                    body.position.y += centre.y;
                  }
                };
                Body.setPosition = function(body, position, updateVelocity) {
                  var delta = Vector.sub(position, body.position);
                  if (updateVelocity) {
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.velocity.x = delta.x;
                    body.velocity.y = delta.y;
                    body.speed = Vector.magnitude(delta);
                  } else {
                    body.positionPrev.x += delta.x;
                    body.positionPrev.y += delta.y;
                  }
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    part.position.x += delta.x;
                    part.position.y += delta.y;
                    Vertices.translate(part.vertices, delta);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                };
                Body.setAngle = function(body, angle, updateVelocity) {
                  var delta = angle - body.angle;
                  if (updateVelocity) {
                    body.anglePrev = body.angle;
                    body.angularVelocity = delta;
                    body.angularSpeed = Math.abs(delta);
                  } else {
                    body.anglePrev += delta;
                  }
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    part.angle += delta;
                    Vertices.rotate(part.vertices, delta, body.position);
                    Axes.rotate(part.axes, delta);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                    if (i > 0) {
                      Vector.rotateAbout(part.position, delta, body.position, part.position);
                    }
                  }
                };
                Body.setVelocity = function(body, velocity) {
                  var timeScale = body.deltaTime / Body._baseDelta;
                  body.positionPrev.x = body.position.x - velocity.x * timeScale;
                  body.positionPrev.y = body.position.y - velocity.y * timeScale;
                  body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
                  body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
                  body.speed = Vector.magnitude(body.velocity);
                };
                Body.getVelocity = function(body) {
                  var timeScale = Body._baseDelta / body.deltaTime;
                  return {
                    x: (body.position.x - body.positionPrev.x) * timeScale,
                    y: (body.position.y - body.positionPrev.y) * timeScale
                  };
                };
                Body.getSpeed = function(body) {
                  return Vector.magnitude(Body.getVelocity(body));
                };
                Body.setSpeed = function(body, speed) {
                  Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
                };
                Body.setAngularVelocity = function(body, velocity) {
                  var timeScale = body.deltaTime / Body._baseDelta;
                  body.anglePrev = body.angle - velocity * timeScale;
                  body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
                  body.angularSpeed = Math.abs(body.angularVelocity);
                };
                Body.getAngularVelocity = function(body) {
                  return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
                };
                Body.getAngularSpeed = function(body) {
                  return Math.abs(Body.getAngularVelocity(body));
                };
                Body.setAngularSpeed = function(body, speed) {
                  Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
                };
                Body.translate = function(body, translation, updateVelocity) {
                  Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
                };
                Body.rotate = function(body, rotation, point, updateVelocity) {
                  if (!point) {
                    Body.setAngle(body, body.angle + rotation, updateVelocity);
                  } else {
                    var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + (dx * cos - dy * sin),
                      y: point.y + (dx * sin + dy * cos)
                    }, updateVelocity);
                    Body.setAngle(body, body.angle + rotation, updateVelocity);
                  }
                };
                Body.scale = function(body, scaleX, scaleY, point) {
                  var totalArea = 0, totalInertia = 0;
                  point = point || body.position;
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    Vertices.scale(part.vertices, scaleX, scaleY, point);
                    part.axes = Axes.fromVertices(part.vertices);
                    part.area = Vertices.area(part.vertices);
                    Body.setMass(part, body.density * part.area);
                    Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
                    Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                    Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
                    if (i > 0) {
                      totalArea += part.area;
                      totalInertia += part.inertia;
                    }
                    part.position.x = point.x + (part.position.x - point.x) * scaleX;
                    part.position.y = point.y + (part.position.y - point.y) * scaleY;
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                  if (body.parts.length > 1) {
                    body.area = totalArea;
                    if (!body.isStatic) {
                      Body.setMass(body, body.density * totalArea);
                      Body.setInertia(body, totalInertia);
                    }
                  }
                  if (body.circleRadius) {
                    if (scaleX === scaleY) {
                      body.circleRadius *= scaleX;
                    } else {
                      body.circleRadius = null;
                    }
                  }
                };
                Body.update = function(body, deltaTime) {
                  deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
                  var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
                  var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
                  body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
                  body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
                  body.positionPrev.x = body.position.x;
                  body.positionPrev.y = body.position.y;
                  body.position.x += body.velocity.x;
                  body.position.y += body.velocity.y;
                  body.deltaTime = deltaTime;
                  body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                  body.anglePrev = body.angle;
                  body.angle += body.angularVelocity;
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    Vertices.translate(part.vertices, body.velocity);
                    if (i > 0) {
                      part.position.x += body.velocity.x;
                      part.position.y += body.velocity.y;
                    }
                    if (body.angularVelocity !== 0) {
                      Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                      Axes.rotate(part.axes, body.angularVelocity);
                      if (i > 0) {
                        Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                      }
                    }
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                };
                Body.updateVelocities = function(body) {
                  var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
                  bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
                  bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
                  body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
                  body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
                  body.angularSpeed = Math.abs(body.angularVelocity);
                };
                Body.applyForce = function(body, position, force) {
                  var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
                  body.force.x += force.x;
                  body.force.y += force.y;
                  body.torque += offset.x * force.y - offset.y * force.x;
                };
                Body._totalProperties = function(body) {
                  var properties = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: { x: 0, y: 0 }
                  };
                  for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                    var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                    properties.mass += mass;
                    properties.area += part.area;
                    properties.inertia += part.inertia;
                    properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                  }
                  properties.centre = Vector.div(properties.centre, properties.mass);
                  return properties;
                };
              })();
            },
            /* 5 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Events2 = {};
              module2.exports = Events2;
              var Common = __webpack_require__(0);
              (function() {
                Events2.on = function(object, eventNames, callback) {
                  var names = eventNames.split(" "), name;
                  for (var i = 0; i < names.length; i++) {
                    name = names[i];
                    object.events = object.events || {};
                    object.events[name] = object.events[name] || [];
                    object.events[name].push(callback);
                  }
                  return callback;
                };
                Events2.off = function(object, eventNames, callback) {
                  if (!eventNames) {
                    object.events = {};
                    return;
                  }
                  if (typeof eventNames === "function") {
                    callback = eventNames;
                    eventNames = Common.keys(object.events).join(" ");
                  }
                  var names = eventNames.split(" ");
                  for (var i = 0; i < names.length; i++) {
                    var callbacks = object.events[names[i]], newCallbacks = [];
                    if (callback && callbacks) {
                      for (var j = 0; j < callbacks.length; j++) {
                        if (callbacks[j] !== callback)
                          newCallbacks.push(callbacks[j]);
                      }
                    }
                    object.events[names[i]] = newCallbacks;
                  }
                };
                Events2.trigger = function(object, eventNames, event) {
                  var names, name, callbacks, eventClone;
                  var events = object.events;
                  if (events && Common.keys(events).length > 0) {
                    if (!event)
                      event = {};
                    names = eventNames.split(" ");
                    for (var i = 0; i < names.length; i++) {
                      name = names[i];
                      callbacks = events[name];
                      if (callbacks) {
                        eventClone = Common.clone(event, false);
                        eventClone.name = name;
                        eventClone.source = object;
                        for (var j = 0; j < callbacks.length; j++) {
                          callbacks[j].apply(object, [eventClone]);
                        }
                      }
                    }
                  }
                };
              })();
            },
            /* 6 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Composite = {};
              module2.exports = Composite;
              var Events2 = __webpack_require__(5);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              var Body = __webpack_require__(4);
              (function() {
                Composite.create = function(options) {
                  return Common.extend({
                    id: Common.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: false,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {},
                    cache: {
                      allBodies: null,
                      allConstraints: null,
                      allComposites: null
                    }
                  }, options);
                };
                Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                  composite.isModified = isModified;
                  if (isModified && composite.cache) {
                    composite.cache.allBodies = null;
                    composite.cache.allConstraints = null;
                    composite.cache.allComposites = null;
                  }
                  if (updateParents && composite.parent) {
                    Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                  }
                  if (updateChildren) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      var childComposite = composite.composites[i];
                      Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                    }
                  }
                };
                Composite.add = function(composite, object) {
                  var objects = [].concat(object);
                  Events2.trigger(composite, "beforeAdd", { object });
                  for (var i = 0; i < objects.length; i++) {
                    var obj = objects[i];
                    switch (obj.type) {
                      case "body":
                        if (obj.parent !== obj) {
                          Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                          break;
                        }
                        Composite.addBody(composite, obj);
                        break;
                      case "constraint":
                        Composite.addConstraint(composite, obj);
                        break;
                      case "composite":
                        Composite.addComposite(composite, obj);
                        break;
                      case "mouseConstraint":
                        Composite.addConstraint(composite, obj.constraint);
                        break;
                    }
                  }
                  Events2.trigger(composite, "afterAdd", { object });
                  return composite;
                };
                Composite.remove = function(composite, object, deep) {
                  var objects = [].concat(object);
                  Events2.trigger(composite, "beforeRemove", { object });
                  for (var i = 0; i < objects.length; i++) {
                    var obj = objects[i];
                    switch (obj.type) {
                      case "body":
                        Composite.removeBody(composite, obj, deep);
                        break;
                      case "constraint":
                        Composite.removeConstraint(composite, obj, deep);
                        break;
                      case "composite":
                        Composite.removeComposite(composite, obj, deep);
                        break;
                      case "mouseConstraint":
                        Composite.removeConstraint(composite, obj.constraint);
                        break;
                    }
                  }
                  Events2.trigger(composite, "afterRemove", { object });
                  return composite;
                };
                Composite.addComposite = function(compositeA, compositeB) {
                  compositeA.composites.push(compositeB);
                  compositeB.parent = compositeA;
                  Composite.setModified(compositeA, true, true, false);
                  return compositeA;
                };
                Composite.removeComposite = function(compositeA, compositeB, deep) {
                  var position = Common.indexOf(compositeA.composites, compositeB);
                  if (position !== -1) {
                    Composite.removeCompositeAt(compositeA, position);
                  }
                  if (deep) {
                    for (var i = 0; i < compositeA.composites.length; i++) {
                      Composite.removeComposite(compositeA.composites[i], compositeB, true);
                    }
                  }
                  return compositeA;
                };
                Composite.removeCompositeAt = function(composite, position) {
                  composite.composites.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.addBody = function(composite, body) {
                  composite.bodies.push(body);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.removeBody = function(composite, body, deep) {
                  var position = Common.indexOf(composite.bodies, body);
                  if (position !== -1) {
                    Composite.removeBodyAt(composite, position);
                  }
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.removeBody(composite.composites[i], body, true);
                    }
                  }
                  return composite;
                };
                Composite.removeBodyAt = function(composite, position) {
                  composite.bodies.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.addConstraint = function(composite, constraint) {
                  composite.constraints.push(constraint);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.removeConstraint = function(composite, constraint, deep) {
                  var position = Common.indexOf(composite.constraints, constraint);
                  if (position !== -1) {
                    Composite.removeConstraintAt(composite, position);
                  }
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.removeConstraint(composite.composites[i], constraint, true);
                    }
                  }
                  return composite;
                };
                Composite.removeConstraintAt = function(composite, position) {
                  composite.constraints.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.clear = function(composite, keepStatic, deep) {
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.clear(composite.composites[i], keepStatic, true);
                    }
                  }
                  if (keepStatic) {
                    composite.bodies = composite.bodies.filter(function(body) {
                      return body.isStatic;
                    });
                  } else {
                    composite.bodies.length = 0;
                  }
                  composite.constraints.length = 0;
                  composite.composites.length = 0;
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.allBodies = function(composite) {
                  if (composite.cache && composite.cache.allBodies) {
                    return composite.cache.allBodies;
                  }
                  var bodies = [].concat(composite.bodies);
                  for (var i = 0; i < composite.composites.length; i++)
                    bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allBodies = bodies;
                  }
                  return bodies;
                };
                Composite.allConstraints = function(composite) {
                  if (composite.cache && composite.cache.allConstraints) {
                    return composite.cache.allConstraints;
                  }
                  var constraints = [].concat(composite.constraints);
                  for (var i = 0; i < composite.composites.length; i++)
                    constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allConstraints = constraints;
                  }
                  return constraints;
                };
                Composite.allComposites = function(composite) {
                  if (composite.cache && composite.cache.allComposites) {
                    return composite.cache.allComposites;
                  }
                  var composites = [].concat(composite.composites);
                  for (var i = 0; i < composite.composites.length; i++)
                    composites = composites.concat(Composite.allComposites(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allComposites = composites;
                  }
                  return composites;
                };
                Composite.get = function(composite, id, type) {
                  var objects, object;
                  switch (type) {
                    case "body":
                      objects = Composite.allBodies(composite);
                      break;
                    case "constraint":
                      objects = Composite.allConstraints(composite);
                      break;
                    case "composite":
                      objects = Composite.allComposites(composite).concat(composite);
                      break;
                  }
                  if (!objects)
                    return null;
                  object = objects.filter(function(object2) {
                    return object2.id.toString() === id.toString();
                  });
                  return object.length === 0 ? null : object[0];
                };
                Composite.move = function(compositeA, objects, compositeB) {
                  Composite.remove(compositeA, objects);
                  Composite.add(compositeB, objects);
                  return compositeA;
                };
                Composite.rebase = function(composite) {
                  var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                  for (var i = 0; i < objects.length; i++) {
                    objects[i].id = Common.nextId();
                  }
                  return composite;
                };
                Composite.translate = function(composite, translation, recursive) {
                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    Body.translate(bodies[i], translation);
                  }
                  return composite;
                };
                Composite.rotate = function(composite, rotation, point, recursive) {
                  var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + (dx * cos - dy * sin),
                      y: point.y + (dx * sin + dy * cos)
                    });
                    Body.rotate(body, rotation);
                  }
                  return composite;
                };
                Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + dx * scaleX,
                      y: point.y + dy * scaleY
                    });
                    Body.scale(body, scaleX, scaleY);
                  }
                  return composite;
                };
                Composite.bounds = function(composite) {
                  var bodies = Composite.allBodies(composite), vertices = [];
                  for (var i = 0; i < bodies.length; i += 1) {
                    var body = bodies[i];
                    vertices.push(body.bounds.min, body.bounds.max);
                  }
                  return Bounds.create(vertices);
                };
              })();
            },
            /* 7 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Sleeping = {};
              module2.exports = Sleeping;
              var Body = __webpack_require__(4);
              var Events2 = __webpack_require__(5);
              var Common = __webpack_require__(0);
              (function() {
                Sleeping._motionWakeThreshold = 0.18;
                Sleeping._motionSleepThreshold = 0.08;
                Sleeping._minBias = 0.9;
                Sleeping.update = function(bodies, delta) {
                  var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                    if (body.force.x !== 0 || body.force.y !== 0) {
                      Sleeping.set(body, false);
                      continue;
                    }
                    var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                    body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                    if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                      body.sleepCounter += 1;
                      if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                        Sleeping.set(body, true);
                      }
                    } else if (body.sleepCounter > 0) {
                      body.sleepCounter -= 1;
                    }
                  }
                };
                Sleeping.afterCollisions = function(pairs) {
                  var motionSleepThreshold = Sleeping._motionSleepThreshold;
                  for (var i = 0; i < pairs.length; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                    if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)
                      continue;
                    if (bodyA.isSleeping || bodyB.isSleeping) {
                      var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                      if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                        Sleeping.set(sleepingBody, false);
                      }
                    }
                  }
                };
                Sleeping.set = function(body, isSleeping) {
                  var wasSleeping = body.isSleeping;
                  if (isSleeping) {
                    body.isSleeping = true;
                    body.sleepCounter = body.sleepThreshold;
                    body.positionImpulse.x = 0;
                    body.positionImpulse.y = 0;
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.anglePrev = body.angle;
                    body.speed = 0;
                    body.angularSpeed = 0;
                    body.motion = 0;
                    if (!wasSleeping) {
                      Events2.trigger(body, "sleepStart");
                    }
                  } else {
                    body.isSleeping = false;
                    body.sleepCounter = 0;
                    if (wasSleeping) {
                      Events2.trigger(body, "sleepEnd");
                    }
                  }
                };
              })();
            },
            /* 8 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Collision = {};
              module2.exports = Collision;
              var Vertices = __webpack_require__(3);
              var Pair = __webpack_require__(9);
              (function() {
                var _supports = [];
                var _overlapAB = {
                  overlap: 0,
                  axis: null
                };
                var _overlapBA = {
                  overlap: 0,
                  axis: null
                };
                Collision.create = function(bodyA, bodyB) {
                  return {
                    pair: null,
                    collided: false,
                    bodyA,
                    bodyB,
                    parentA: bodyA.parent,
                    parentB: bodyB.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: []
                  };
                };
                Collision.collides = function(bodyA, bodyB, pairs) {
                  Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                  if (_overlapAB.overlap <= 0) {
                    return null;
                  }
                  Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                  if (_overlapBA.overlap <= 0) {
                    return null;
                  }
                  var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
                  if (!pair) {
                    collision = Collision.create(bodyA, bodyB);
                    collision.collided = true;
                    collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                    collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                    collision.parentA = collision.bodyA.parent;
                    collision.parentB = collision.bodyB.parent;
                  } else {
                    collision = pair.collision;
                  }
                  bodyA = collision.bodyA;
                  bodyB = collision.bodyB;
                  var minOverlap;
                  if (_overlapAB.overlap < _overlapBA.overlap) {
                    minOverlap = _overlapAB;
                  } else {
                    minOverlap = _overlapBA;
                  }
                  var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
                  if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
                    normal.x = minAxisX;
                    normal.y = minAxisY;
                  } else {
                    normal.x = -minAxisX;
                    normal.y = -minAxisY;
                  }
                  collision.tangent.x = -normal.y;
                  collision.tangent.y = normal.x;
                  collision.depth = minOverlap.overlap;
                  collision.penetration.x = normal.x * collision.depth;
                  collision.penetration.y = normal.y * collision.depth;
                  var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                  if (Vertices.contains(bodyA.vertices, supportsB[0])) {
                    supports[supportCount++] = supportsB[0];
                  }
                  if (Vertices.contains(bodyA.vertices, supportsB[1])) {
                    supports[supportCount++] = supportsB[1];
                  }
                  if (supportCount < 2) {
                    var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                    if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                      supports[supportCount++] = supportsA[0];
                    }
                    if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                      supports[supportCount++] = supportsA[1];
                    }
                  }
                  if (supportCount === 0) {
                    supports[supportCount++] = supportsB[0];
                  }
                  supports.length = supportCount;
                  return collision;
                };
                Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                  var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
                  for (i = 0; i < axesLength; i++) {
                    var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                    for (j = 1; j < verticesALength; j += 1) {
                      dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                      if (dot > maxA) {
                        maxA = dot;
                      } else if (dot < minA) {
                        minA = dot;
                      }
                    }
                    for (j = 1; j < verticesBLength; j += 1) {
                      dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                      if (dot > maxB) {
                        maxB = dot;
                      } else if (dot < minB) {
                        minB = dot;
                      }
                    }
                    overlapAB = maxA - minB;
                    overlapBA = maxB - minA;
                    overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                    if (overlap < overlapMin) {
                      overlapMin = overlap;
                      overlapAxisNumber = i;
                      if (overlap <= 0) {
                        break;
                      }
                    }
                  }
                  result.axis = axes[overlapAxisNumber];
                  result.overlap = overlapMin;
                };
                Collision._projectToAxis = function(projection, vertices, axis) {
                  var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
                  for (var i = 1; i < vertices.length; i += 1) {
                    var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
                    if (dot > max) {
                      max = dot;
                    } else if (dot < min) {
                      min = dot;
                    }
                  }
                  projection.min = min;
                  projection.max = max;
                };
                Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                  var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
                  for (j = 0; j < verticesLength; j += 1) {
                    vertexB = vertices[j];
                    distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                    if (distance < nearestDistance) {
                      nearestDistance = distance;
                      vertexA = vertexB;
                    }
                  }
                  vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                  nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                  vertexB = vertices[(vertexA.index + 1) % verticesLength];
                  if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                    _supports[0] = vertexA;
                    _supports[1] = vertexB;
                    return _supports;
                  }
                  _supports[0] = vertexA;
                  _supports[1] = vertexC;
                  return _supports;
                };
              })();
            },
            /* 9 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Pair = {};
              module2.exports = Pair;
              var Contact = __webpack_require__(16);
              (function() {
                Pair.create = function(collision, timestamp) {
                  var bodyA = collision.bodyA, bodyB = collision.bodyB;
                  var pair = {
                    id: Pair.id(bodyA, bodyB),
                    bodyA,
                    bodyB,
                    collision,
                    contacts: [],
                    activeContacts: [],
                    separation: 0,
                    isActive: true,
                    confirmedActive: true,
                    isSensor: bodyA.isSensor || bodyB.isSensor,
                    timeCreated: timestamp,
                    timeUpdated: timestamp,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0
                  };
                  Pair.update(pair, collision, timestamp);
                  return pair;
                };
                Pair.update = function(pair, collision, timestamp) {
                  var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
                  pair.isActive = true;
                  pair.timeUpdated = timestamp;
                  pair.collision = collision;
                  pair.separation = collision.depth;
                  pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                  pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                  pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                  pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                  pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                  collision.pair = pair;
                  activeContacts.length = 0;
                  for (var i = 0; i < supports.length; i++) {
                    var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
                    if (contact) {
                      activeContacts.push(contact);
                    } else {
                      activeContacts.push(contacts[contactId] = Contact.create(support));
                    }
                  }
                };
                Pair.setActive = function(pair, isActive, timestamp) {
                  if (isActive) {
                    pair.isActive = true;
                    pair.timeUpdated = timestamp;
                  } else {
                    pair.isActive = false;
                    pair.activeContacts.length = 0;
                  }
                };
                Pair.id = function(bodyA, bodyB) {
                  if (bodyA.id < bodyB.id) {
                    return "A" + bodyA.id + "B" + bodyB.id;
                  } else {
                    return "A" + bodyB.id + "B" + bodyA.id;
                  }
                };
              })();
            },
            /* 10 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Constraint = {};
              module2.exports = Constraint;
              var Vertices = __webpack_require__(3);
              var Vector = __webpack_require__(2);
              var Sleeping = __webpack_require__(7);
              var Bounds = __webpack_require__(1);
              var Axes = __webpack_require__(11);
              var Common = __webpack_require__(0);
              (function() {
                Constraint._warming = 0.4;
                Constraint._torqueDampen = 1;
                Constraint._minLength = 1e-6;
                Constraint.create = function(options) {
                  var constraint = options;
                  if (constraint.bodyA && !constraint.pointA)
                    constraint.pointA = { x: 0, y: 0 };
                  if (constraint.bodyB && !constraint.pointB)
                    constraint.pointB = { x: 0, y: 0 };
                  var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                  constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
                  constraint.id = constraint.id || Common.nextId();
                  constraint.label = constraint.label || "Constraint";
                  constraint.type = "constraint";
                  constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
                  constraint.damping = constraint.damping || 0;
                  constraint.angularStiffness = constraint.angularStiffness || 0;
                  constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                  constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                  constraint.plugin = {};
                  var render5 = {
                    visible: true,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: true
                  };
                  if (constraint.length === 0 && constraint.stiffness > 0.1) {
                    render5.type = "pin";
                    render5.anchors = false;
                  } else if (constraint.stiffness < 0.9) {
                    render5.type = "spring";
                  }
                  constraint.render = Common.extend(render5, constraint.render);
                  return constraint;
                };
                Constraint.preSolveAll = function(bodies) {
                  for (var i = 0; i < bodies.length; i += 1) {
                    var body = bodies[i], impulse = body.constraintImpulse;
                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                      continue;
                    }
                    body.position.x += impulse.x;
                    body.position.y += impulse.y;
                    body.angle += impulse.angle;
                  }
                };
                Constraint.solveAll = function(constraints, delta) {
                  var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
                  for (var i = 0; i < constraints.length; i += 1) {
                    var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                    if (fixedA || fixedB) {
                      Constraint.solve(constraints[i], timeScale);
                    }
                  }
                  for (i = 0; i < constraints.length; i += 1) {
                    constraint = constraints[i];
                    fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                    fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                    if (!fixedA && !fixedB) {
                      Constraint.solve(constraints[i], timeScale);
                    }
                  }
                };
                Constraint.solve = function(constraint, timeScale) {
                  var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                  if (!bodyA && !bodyB)
                    return;
                  if (bodyA && !bodyA.isStatic) {
                    Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                    constraint.angleA = bodyA.angle;
                  }
                  if (bodyB && !bodyB.isStatic) {
                    Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                    constraint.angleB = bodyB.angle;
                  }
                  var pointAWorld = pointA, pointBWorld = pointB;
                  if (bodyA)
                    pointAWorld = Vector.add(bodyA.position, pointA);
                  if (bodyB)
                    pointBWorld = Vector.add(bodyB.position, pointB);
                  if (!pointAWorld || !pointBWorld)
                    return;
                  var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                  if (currentLength < Constraint._minLength) {
                    currentLength = Constraint._minLength;
                  }
                  var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
                  if (damping > 0) {
                    var zero = Vector.create();
                    normal = Vector.div(delta, currentLength);
                    relativeVelocity = Vector.sub(
                      bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                      bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
                    );
                    normalVelocity = Vector.dot(normal, relativeVelocity);
                  }
                  if (bodyA && !bodyA.isStatic) {
                    share = bodyA.inverseMass / massTotal;
                    bodyA.constraintImpulse.x -= force.x * share;
                    bodyA.constraintImpulse.y -= force.y * share;
                    bodyA.position.x -= force.x * share;
                    bodyA.position.y -= force.y * share;
                    if (damping > 0) {
                      bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                      bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                    }
                    torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                    bodyA.constraintImpulse.angle -= torque;
                    bodyA.angle -= torque;
                  }
                  if (bodyB && !bodyB.isStatic) {
                    share = bodyB.inverseMass / massTotal;
                    bodyB.constraintImpulse.x += force.x * share;
                    bodyB.constraintImpulse.y += force.y * share;
                    bodyB.position.x += force.x * share;
                    bodyB.position.y += force.y * share;
                    if (damping > 0) {
                      bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                      bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                    }
                    torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                    bodyB.constraintImpulse.angle += torque;
                    bodyB.angle += torque;
                  }
                };
                Constraint.postSolveAll = function(bodies) {
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], impulse = body.constraintImpulse;
                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                      continue;
                    }
                    Sleeping.set(body, false);
                    for (var j = 0; j < body.parts.length; j++) {
                      var part = body.parts[j];
                      Vertices.translate(part.vertices, impulse);
                      if (j > 0) {
                        part.position.x += impulse.x;
                        part.position.y += impulse.y;
                      }
                      if (impulse.angle !== 0) {
                        Vertices.rotate(part.vertices, impulse.angle, body.position);
                        Axes.rotate(part.axes, impulse.angle);
                        if (j > 0) {
                          Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                        }
                      }
                      Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                    impulse.angle *= Constraint._warming;
                    impulse.x *= Constraint._warming;
                    impulse.y *= Constraint._warming;
                  }
                };
                Constraint.pointAWorld = function(constraint) {
                  return {
                    x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                    y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
                  };
                };
                Constraint.pointBWorld = function(constraint) {
                  return {
                    x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                    y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
                  };
                };
              })();
            },
            /* 11 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Axes = {};
              module2.exports = Axes;
              var Vector = __webpack_require__(2);
              var Common = __webpack_require__(0);
              (function() {
                Axes.fromVertices = function(vertices) {
                  var axes = {};
                  for (var i = 0; i < vertices.length; i++) {
                    var j = (i + 1) % vertices.length, normal = Vector.normalise({
                      x: vertices[j].y - vertices[i].y,
                      y: vertices[i].x - vertices[j].x
                    }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                    gradient = gradient.toFixed(3).toString();
                    axes[gradient] = normal;
                  }
                  return Common.values(axes);
                };
                Axes.rotate = function(axes, angle) {
                  if (angle === 0)
                    return;
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  for (var i = 0; i < axes.length; i++) {
                    var axis = axes[i], xx;
                    xx = axis.x * cos - axis.y * sin;
                    axis.y = axis.x * sin + axis.y * cos;
                    axis.x = xx;
                  }
                };
              })();
            },
            /* 12 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Bodies = {};
              module2.exports = Bodies;
              var Vertices = __webpack_require__(3);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              var Bounds = __webpack_require__(1);
              var Vector = __webpack_require__(2);
              (function() {
                Bodies.rectangle = function(x, y, width, height, options) {
                  options = options || {};
                  var rectangle = {
                    label: "Rectangle Body",
                    position: { x, y },
                    vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    rectangle.vertices = Vertices.chamfer(
                      rectangle.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, rectangle, options));
                };
                Bodies.trapezoid = function(x, y, width, height, slope, options) {
                  options = options || {};
                  slope *= 0.5;
                  var roof = (1 - slope * 2) * width;
                  var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
                  if (slope < 0.5) {
                    verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
                  } else {
                    verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
                  }
                  var trapezoid = {
                    label: "Trapezoid Body",
                    position: { x, y },
                    vertices: Vertices.fromPath(verticesPath)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    trapezoid.vertices = Vertices.chamfer(
                      trapezoid.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, trapezoid, options));
                };
                Bodies.circle = function(x, y, radius, options, maxSides) {
                  options = options || {};
                  var circle = {
                    label: "Circle Body",
                    circleRadius: radius
                  };
                  maxSides = maxSides || 25;
                  var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                  if (sides % 2 === 1)
                    sides += 1;
                  return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
                };
                Bodies.polygon = function(x, y, sides, radius, options) {
                  options = options || {};
                  if (sides < 3)
                    return Bodies.circle(x, y, radius, options);
                  var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
                  for (var i = 0; i < sides; i += 1) {
                    var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                    path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
                  }
                  var polygon = {
                    label: "Polygon Body",
                    position: { x, y },
                    vertices: Vertices.fromPath(path)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    polygon.vertices = Vertices.chamfer(
                      polygon.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, polygon, options));
                };
                Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                  var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
                  canDecomp = Boolean(decomp && decomp.quickDecomp);
                  options = options || {};
                  parts = [];
                  flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
                  removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
                  minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
                  removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
                  if (!Common.isArray(vertexSets[0])) {
                    vertexSets = [vertexSets];
                  }
                  for (v = 0; v < vertexSets.length; v += 1) {
                    vertices = vertexSets[v];
                    isConvex = Vertices.isConvex(vertices);
                    isConcave = !isConvex;
                    if (isConcave && !canDecomp) {
                      Common.warnOnce(
                        "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                      );
                    }
                    if (isConvex || !canDecomp) {
                      if (isConvex) {
                        vertices = Vertices.clockwiseSort(vertices);
                      } else {
                        vertices = Vertices.hull(vertices);
                      }
                      parts.push({
                        position: { x, y },
                        vertices
                      });
                    } else {
                      var concave = vertices.map(function(vertex) {
                        return [vertex.x, vertex.y];
                      });
                      decomp.makeCCW(concave);
                      if (removeCollinear !== false)
                        decomp.removeCollinearPoints(concave, removeCollinear);
                      if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                        decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                      var decomposed = decomp.quickDecomp(concave);
                      for (i = 0; i < decomposed.length; i++) {
                        var chunk = decomposed[i];
                        var chunkVertices = chunk.map(function(vertices2) {
                          return {
                            x: vertices2[0],
                            y: vertices2[1]
                          };
                        });
                        if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                          continue;
                        parts.push({
                          position: Vertices.centre(chunkVertices),
                          vertices: chunkVertices
                        });
                      }
                    }
                  }
                  for (i = 0; i < parts.length; i++) {
                    parts[i] = Body.create(Common.extend(parts[i], options));
                  }
                  if (flagInternal) {
                    var coincident_max_dist = 5;
                    for (i = 0; i < parts.length; i++) {
                      var partA = parts[i];
                      for (j = i + 1; j < parts.length; j++) {
                        var partB = parts[j];
                        if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                          var pav = partA.vertices, pbv = partB.vertices;
                          for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                              var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                              if (da < coincident_max_dist && db < coincident_max_dist) {
                                pav[k].isInternal = true;
                                pbv[z].isInternal = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (parts.length > 1) {
                    body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
                    Body.setPosition(body, { x, y });
                    return body;
                  } else {
                    return parts[0];
                  }
                };
              })();
            },
            /* 13 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Detector = {};
              module2.exports = Detector;
              var Common = __webpack_require__(0);
              var Collision = __webpack_require__(8);
              (function() {
                Detector.create = function(options) {
                  var defaults2 = {
                    bodies: [],
                    pairs: null
                  };
                  return Common.extend(defaults2, options);
                };
                Detector.setBodies = function(detector, bodies) {
                  detector.bodies = bodies.slice(0);
                };
                Detector.clear = function(detector) {
                  detector.bodies = [];
                };
                Detector.collisions = function(detector) {
                  var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, i, j;
                  bodies.sort(Detector._compareBoundsX);
                  for (i = 0; i < bodiesLength; i++) {
                    var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                    for (j = i + 1; j < bodiesLength; j++) {
                      var bodyB = bodies[j], boundsB = bodyB.bounds;
                      if (boundsB.min.x > boundXMax) {
                        break;
                      }
                      if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                        continue;
                      }
                      if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                        continue;
                      }
                      if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                        continue;
                      }
                      var partsBLength = bodyB.parts.length;
                      if (partsASingle && partsBLength === 1) {
                        var collision = collides(bodyA, bodyB, pairs);
                        if (collision) {
                          collisions.push(collision);
                        }
                      } else {
                        var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                        for (var k = partsAStart; k < partsALength; k++) {
                          var partA = bodyA.parts[k], boundsA = partA.bounds;
                          for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z], boundsB = partB.bounds;
                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                              continue;
                            }
                            var collision = collides(partA, partB, pairs);
                            if (collision) {
                              collisions.push(collision);
                            }
                          }
                        }
                      }
                    }
                  }
                  return collisions;
                };
                Detector.canCollide = function(filterA, filterB) {
                  if (filterA.group === filterB.group && filterA.group !== 0)
                    return filterA.group > 0;
                  return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
                };
                Detector._compareBoundsX = function(bodyA, bodyB) {
                  return bodyA.bounds.min.x - bodyB.bounds.min.x;
                };
              })();
            },
            /* 14 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Mouse = {};
              module2.exports = Mouse;
              var Common = __webpack_require__(0);
              (function() {
                Mouse.create = function(element) {
                  var mouse = {};
                  if (!element) {
                    Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
                  }
                  mouse.element = element || document.body;
                  mouse.absolute = { x: 0, y: 0 };
                  mouse.position = { x: 0, y: 0 };
                  mouse.mousedownPosition = { x: 0, y: 0 };
                  mouse.mouseupPosition = { x: 0, y: 0 };
                  mouse.offset = { x: 0, y: 0 };
                  mouse.scale = { x: 1, y: 1 };
                  mouse.wheelDelta = 0;
                  mouse.button = -1;
                  mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
                  mouse.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null
                  };
                  mouse.mousemove = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      mouse.button = 0;
                      event.preventDefault();
                    }
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.sourceEvents.mousemove = event;
                  };
                  mouse.mousedown = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      mouse.button = 0;
                      event.preventDefault();
                    } else {
                      mouse.button = event.button;
                    }
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.mousedownPosition.x = mouse.position.x;
                    mouse.mousedownPosition.y = mouse.position.y;
                    mouse.sourceEvents.mousedown = event;
                  };
                  mouse.mouseup = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      event.preventDefault();
                    }
                    mouse.button = -1;
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.mouseupPosition.x = mouse.position.x;
                    mouse.mouseupPosition.y = mouse.position.y;
                    mouse.sourceEvents.mouseup = event;
                  };
                  mouse.mousewheel = function(event) {
                    mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                    event.preventDefault();
                  };
                  Mouse.setElement(mouse, mouse.element);
                  return mouse;
                };
                Mouse.setElement = function(mouse, element) {
                  mouse.element = element;
                  element.addEventListener("mousemove", mouse.mousemove);
                  element.addEventListener("mousedown", mouse.mousedown);
                  element.addEventListener("mouseup", mouse.mouseup);
                  element.addEventListener("mousewheel", mouse.mousewheel);
                  element.addEventListener("DOMMouseScroll", mouse.mousewheel);
                  element.addEventListener("touchmove", mouse.mousemove);
                  element.addEventListener("touchstart", mouse.mousedown);
                  element.addEventListener("touchend", mouse.mouseup);
                };
                Mouse.clearSourceEvents = function(mouse) {
                  mouse.sourceEvents.mousemove = null;
                  mouse.sourceEvents.mousedown = null;
                  mouse.sourceEvents.mouseup = null;
                  mouse.sourceEvents.mousewheel = null;
                  mouse.wheelDelta = 0;
                };
                Mouse.setOffset = function(mouse, offset) {
                  mouse.offset.x = offset.x;
                  mouse.offset.y = offset.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                Mouse.setScale = function(mouse, scale) {
                  mouse.scale.x = scale.x;
                  mouse.scale.y = scale.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                  var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
                  if (touches) {
                    x = touches[0].pageX - elementBounds.left - scrollX;
                    y = touches[0].pageY - elementBounds.top - scrollY;
                  } else {
                    x = event.pageX - elementBounds.left - scrollX;
                    y = event.pageY - elementBounds.top - scrollY;
                  }
                  return {
                    x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                    y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                  };
                };
              })();
            },
            /* 15 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Plugin = {};
              module2.exports = Plugin;
              var Common = __webpack_require__(0);
              (function() {
                Plugin._registry = {};
                Plugin.register = function(plugin) {
                  if (!Plugin.isPlugin(plugin)) {
                    Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
                  }
                  if (plugin.name in Plugin._registry) {
                    var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                    if (pluginVersion > registeredVersion) {
                      Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                      Plugin._registry[plugin.name] = plugin;
                    } else if (pluginVersion < registeredVersion) {
                      Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                    } else if (plugin !== registered) {
                      Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                    }
                  } else {
                    Plugin._registry[plugin.name] = plugin;
                  }
                  return plugin;
                };
                Plugin.resolve = function(dependency) {
                  return Plugin._registry[Plugin.dependencyParse(dependency).name];
                };
                Plugin.toString = function(plugin) {
                  return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
                };
                Plugin.isPlugin = function(obj) {
                  return obj && obj.name && obj.version && obj.install;
                };
                Plugin.isUsed = function(module3, name) {
                  return module3.used.indexOf(name) > -1;
                };
                Plugin.isFor = function(plugin, module3) {
                  var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                  return !plugin.for || module3.name === parsed.name && Plugin.versionSatisfies(module3.version, parsed.range);
                };
                Plugin.use = function(module3, plugins) {
                  module3.uses = (module3.uses || []).concat(plugins || []);
                  if (module3.uses.length === 0) {
                    Common.warn("Plugin.use:", Plugin.toString(module3), "does not specify any dependencies to install.");
                    return;
                  }
                  var dependencies = Plugin.dependencies(module3), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                  for (var i = 0; i < sortedDependencies.length; i += 1) {
                    if (sortedDependencies[i] === module3.name) {
                      continue;
                    }
                    var plugin = Plugin.resolve(sortedDependencies[i]);
                    if (!plugin) {
                      status.push("\u274C " + sortedDependencies[i]);
                      continue;
                    }
                    if (Plugin.isUsed(module3, plugin.name)) {
                      continue;
                    }
                    if (!Plugin.isFor(plugin, module3)) {
                      Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module3) + ".");
                      plugin._warned = true;
                    }
                    if (plugin.install) {
                      plugin.install(module3);
                    } else {
                      Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                      plugin._warned = true;
                    }
                    if (plugin._warned) {
                      status.push("\u{1F536} " + Plugin.toString(plugin));
                      delete plugin._warned;
                    } else {
                      status.push("\u2705 " + Plugin.toString(plugin));
                    }
                    module3.used.push(plugin.name);
                  }
                  if (status.length > 0) {
                    Common.info(status.join("  "));
                  }
                };
                Plugin.dependencies = function(module3, tracked) {
                  var parsedBase = Plugin.dependencyParse(module3), name = parsedBase.name;
                  tracked = tracked || {};
                  if (name in tracked) {
                    return;
                  }
                  module3 = Plugin.resolve(module3) || module3;
                  tracked[name] = Common.map(module3.uses || [], function(dependency) {
                    if (Plugin.isPlugin(dependency)) {
                      Plugin.register(dependency);
                    }
                    var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                    if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                      Common.warn(
                        "Plugin.dependencies:",
                        Plugin.toString(resolved),
                        "does not satisfy",
                        Plugin.toString(parsed),
                        "used by",
                        Plugin.toString(parsedBase) + "."
                      );
                      resolved._warned = true;
                      module3._warned = true;
                    } else if (!resolved) {
                      Common.warn(
                        "Plugin.dependencies:",
                        Plugin.toString(dependency),
                        "used by",
                        Plugin.toString(parsedBase),
                        "could not be resolved."
                      );
                      module3._warned = true;
                    }
                    return parsed.name;
                  });
                  for (var i = 0; i < tracked[name].length; i += 1) {
                    Plugin.dependencies(tracked[name][i], tracked);
                  }
                  return tracked;
                };
                Plugin.dependencyParse = function(dependency) {
                  if (Common.isString(dependency)) {
                    var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                    if (!pattern.test(dependency)) {
                      Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                    }
                    return {
                      name: dependency.split("@")[0],
                      range: dependency.split("@")[1] || "*"
                    };
                  }
                  return {
                    name: dependency.name,
                    range: dependency.range || dependency.version
                  };
                };
                Plugin.versionParse = function(range) {
                  var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                  if (!pattern.test(range)) {
                    Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
                  }
                  var parts = pattern.exec(range);
                  var major = Number(parts[4]);
                  var minor = Number(parts[5]);
                  var patch = Number(parts[6]);
                  return {
                    isRange: Boolean(parts[1] || parts[2]),
                    version: parts[3],
                    range,
                    operator: parts[1] || parts[2] || "",
                    major,
                    minor,
                    patch,
                    parts: [major, minor, patch],
                    prerelease: parts[7],
                    number: major * 1e8 + minor * 1e4 + patch
                  };
                };
                Plugin.versionSatisfies = function(version, range) {
                  range = range || "*";
                  var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                  if (r.isRange) {
                    if (r.operator === "*" || version === "*") {
                      return true;
                    }
                    if (r.operator === ">") {
                      return v.number > r.number;
                    }
                    if (r.operator === ">=") {
                      return v.number >= r.number;
                    }
                    if (r.operator === "~") {
                      return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                    }
                    if (r.operator === "^") {
                      if (r.major > 0) {
                        return v.major === r.major && v.number >= r.number;
                      }
                      if (r.minor > 0) {
                        return v.minor === r.minor && v.patch >= r.patch;
                      }
                      return v.patch === r.patch;
                    }
                  }
                  return version === range || version === "*";
                };
              })();
            },
            /* 16 */
            /***/
            function(module2, exports2) {
              var Contact = {};
              module2.exports = Contact;
              (function() {
                Contact.create = function(vertex) {
                  return {
                    vertex,
                    normalImpulse: 0,
                    tangentImpulse: 0
                  };
                };
              })();
            },
            /* 17 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Engine = {};
              module2.exports = Engine;
              var Sleeping = __webpack_require__(7);
              var Resolver = __webpack_require__(18);
              var Detector = __webpack_require__(13);
              var Pairs = __webpack_require__(19);
              var Events2 = __webpack_require__(5);
              var Composite = __webpack_require__(6);
              var Constraint = __webpack_require__(10);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              (function() {
                Engine.create = function(options) {
                  options = options || {};
                  var defaults2 = {
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: false,
                    events: [],
                    plugin: {},
                    gravity: {
                      x: 0,
                      y: 1,
                      scale: 1e-3
                    },
                    timing: {
                      timestamp: 0,
                      timeScale: 1,
                      lastDelta: 0,
                      lastElapsed: 0
                    }
                  };
                  var engine = Common.extend(defaults2, options);
                  engine.world = options.world || Composite.create({ label: "World" });
                  engine.pairs = options.pairs || Pairs.create();
                  engine.detector = options.detector || Detector.create();
                  engine.grid = { buckets: [] };
                  engine.world.gravity = engine.gravity;
                  engine.broadphase = engine.grid;
                  engine.metrics = {};
                  return engine;
                };
                Engine.update = function(engine, delta) {
                  var startTime = Common.now();
                  var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
                  delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
                  delta *= timing.timeScale;
                  timing.timestamp += delta;
                  timing.lastDelta = delta;
                  var event = {
                    timestamp: timing.timestamp,
                    delta
                  };
                  Events2.trigger(engine, "beforeUpdate", event);
                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                  if (world.isModified) {
                    Detector.setBodies(detector, allBodies);
                    Composite.setModified(world, false, false, true);
                  }
                  if (engine.enableSleeping)
                    Sleeping.update(allBodies, delta);
                  Engine._bodiesApplyGravity(allBodies, engine.gravity);
                  if (delta > 0) {
                    Engine._bodiesUpdate(allBodies, delta);
                  }
                  Constraint.preSolveAll(allBodies);
                  for (i = 0; i < engine.constraintIterations; i++) {
                    Constraint.solveAll(allConstraints, delta);
                  }
                  Constraint.postSolveAll(allBodies);
                  detector.pairs = engine.pairs;
                  var collisions = Detector.collisions(detector);
                  Pairs.update(pairs, collisions, timestamp);
                  if (engine.enableSleeping)
                    Sleeping.afterCollisions(pairs.list);
                  if (pairs.collisionStart.length > 0)
                    Events2.trigger(engine, "collisionStart", { pairs: pairs.collisionStart });
                  var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
                  Resolver.preSolvePosition(pairs.list);
                  for (i = 0; i < engine.positionIterations; i++) {
                    Resolver.solvePosition(pairs.list, delta, positionDamping);
                  }
                  Resolver.postSolvePosition(allBodies);
                  Constraint.preSolveAll(allBodies);
                  for (i = 0; i < engine.constraintIterations; i++) {
                    Constraint.solveAll(allConstraints, delta);
                  }
                  Constraint.postSolveAll(allBodies);
                  Resolver.preSolveVelocity(pairs.list);
                  for (i = 0; i < engine.velocityIterations; i++) {
                    Resolver.solveVelocity(pairs.list, delta);
                  }
                  Engine._bodiesUpdateVelocities(allBodies);
                  if (pairs.collisionActive.length > 0)
                    Events2.trigger(engine, "collisionActive", { pairs: pairs.collisionActive });
                  if (pairs.collisionEnd.length > 0)
                    Events2.trigger(engine, "collisionEnd", { pairs: pairs.collisionEnd });
                  Engine._bodiesClearForces(allBodies);
                  Events2.trigger(engine, "afterUpdate", event);
                  engine.timing.lastElapsed = Common.now() - startTime;
                  return engine;
                };
                Engine.merge = function(engineA, engineB) {
                  Common.extend(engineA, engineB);
                  if (engineB.world) {
                    engineA.world = engineB.world;
                    Engine.clear(engineA);
                    var bodies = Composite.allBodies(engineA.world);
                    for (var i = 0; i < bodies.length; i++) {
                      var body = bodies[i];
                      Sleeping.set(body, false);
                      body.id = Common.nextId();
                    }
                  }
                };
                Engine.clear = function(engine) {
                  Pairs.clear(engine.pairs);
                  Detector.clear(engine.detector);
                };
                Engine._bodiesClearForces = function(bodies) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    body.force.x = 0;
                    body.force.y = 0;
                    body.torque = 0;
                  }
                };
                Engine._bodiesApplyGravity = function(bodies, gravity) {
                  var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 1e-3, bodiesLength = bodies.length;
                  if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
                    return;
                  }
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    if (body.isStatic || body.isSleeping)
                      continue;
                    body.force.y += body.mass * gravity.y * gravityScale;
                    body.force.x += body.mass * gravity.x * gravityScale;
                  }
                };
                Engine._bodiesUpdate = function(bodies, delta) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    if (body.isStatic || body.isSleeping)
                      continue;
                    Body.update(body, delta);
                  }
                };
                Engine._bodiesUpdateVelocities = function(bodies) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    Body.updateVelocities(bodies[i]);
                  }
                };
              })();
            },
            /* 18 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Resolver = {};
              module2.exports = Resolver;
              var Vertices = __webpack_require__(3);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              (function() {
                Resolver._restingThresh = 2;
                Resolver._restingThreshTangent = Math.sqrt(6);
                Resolver._positionDampen = 0.9;
                Resolver._positionWarming = 0.8;
                Resolver._frictionNormalMultiplier = 5;
                Resolver._frictionMaxStatic = Number.MAX_VALUE;
                Resolver.preSolvePosition = function(pairs) {
                  var i, pair, activeCount, pairsLength = pairs.length;
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    activeCount = pair.activeContacts.length;
                    pair.collision.parentA.totalContacts += activeCount;
                    pair.collision.parentB.totalContacts += activeCount;
                  }
                };
                Resolver.solvePosition = function(pairs, delta, damping) {
                  var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.parentA;
                    bodyB = collision.parentB;
                    normal = collision.normal;
                    pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
                  }
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.parentA;
                    bodyB = collision.parentB;
                    normal = collision.normal;
                    positionImpulse = pair.separation - pair.slop * slopDampen;
                    if (bodyA.isStatic || bodyB.isStatic)
                      positionImpulse *= 2;
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                      contactShare = positionDampen / bodyA.totalContacts;
                      bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                      bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                    }
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                      contactShare = positionDampen / bodyB.totalContacts;
                      bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                      bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                    }
                  }
                };
                Resolver.postSolvePosition = function(bodies) {
                  var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                    body.totalContacts = 0;
                    if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                      for (var j = 0; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        verticesTranslate(part.vertices, positionImpulse);
                        boundsUpdate(part.bounds, part.vertices, velocity);
                        part.position.x += positionImpulseX;
                        part.position.y += positionImpulseY;
                      }
                      body.positionPrev.x += positionImpulseX;
                      body.positionPrev.y += positionImpulseY;
                      if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                        positionImpulse.x = 0;
                        positionImpulse.y = 0;
                      } else {
                        positionImpulse.x *= positionWarming;
                        positionImpulse.y *= positionWarming;
                      }
                    }
                  }
                };
                Resolver.preSolveVelocity = function(pairs) {
                  var pairsLength = pairs.length, i, j;
                  for (i = 0; i < pairsLength; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                    for (j = 0; j < contactsLength; j++) {
                      var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                      if (normalImpulse !== 0 || tangentImpulse !== 0) {
                        var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                          bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                          bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                          bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                        }
                        if (!(bodyB.isStatic || bodyB.isSleeping)) {
                          bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                          bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                          bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                        }
                      }
                    }
                  }
                };
                Resolver.solveVelocity = function(pairs, delta) {
                  var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
                  for (i = 0; i < pairsLength; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;
                    bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
                    bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
                    bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
                    bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
                    bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
                    bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
                    for (j = 0; j < contactsLength; j++) {
                      var contact = contacts[j], contactVertex = contact.vertex;
                      var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                      var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                      var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                      var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                      var normalOverlap = pair.separation + normalVelocity;
                      var normalForce = Math.min(normalOverlap, 1);
                      normalForce = normalOverlap < 0 ? 0 : normalForce;
                      var frictionLimit = normalForce * friction;
                      if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                        maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                        tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                        if (tangentImpulse < -maxFriction) {
                          tangentImpulse = -maxFriction;
                        } else if (tangentImpulse > maxFriction) {
                          tangentImpulse = maxFriction;
                        }
                      } else {
                        tangentImpulse = tangentVelocity;
                        maxFriction = frictionMaxStatic;
                      }
                      var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                      var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                      tangentImpulse *= share;
                      if (normalVelocity < restingThresh) {
                        contact.normalImpulse = 0;
                      } else {
                        var contactNormalImpulse = contact.normalImpulse;
                        contact.normalImpulse += normalImpulse;
                        if (contact.normalImpulse > 0)
                          contact.normalImpulse = 0;
                        normalImpulse = contact.normalImpulse - contactNormalImpulse;
                      }
                      if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                        contact.tangentImpulse = 0;
                      } else {
                        var contactTangentImpulse = contact.tangentImpulse;
                        contact.tangentImpulse += tangentImpulse;
                        if (contact.tangentImpulse < -maxFriction)
                          contact.tangentImpulse = -maxFriction;
                        if (contact.tangentImpulse > maxFriction)
                          contact.tangentImpulse = maxFriction;
                        tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                      }
                      var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                      if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                      }
                      if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                      }
                    }
                  }
                };
              })();
            },
            /* 19 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Pairs = {};
              module2.exports = Pairs;
              var Pair = __webpack_require__(9);
              var Common = __webpack_require__(0);
              (function() {
                Pairs.create = function(options) {
                  return Common.extend({
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: []
                  }, options);
                };
                Pairs.update = function(pairs, collisions, timestamp) {
                  var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
                  collisionStart.length = 0;
                  collisionEnd.length = 0;
                  collisionActive.length = 0;
                  for (i = 0; i < pairsListLength; i++) {
                    pairsList[i].confirmedActive = false;
                  }
                  for (i = 0; i < collisionsLength; i++) {
                    collision = collisions[i];
                    pair = collision.pair;
                    if (pair) {
                      if (pair.isActive) {
                        collisionActive.push(pair);
                      } else {
                        collisionStart.push(pair);
                      }
                      Pair.update(pair, collision, timestamp);
                      pair.confirmedActive = true;
                    } else {
                      pair = Pair.create(collision, timestamp);
                      pairsTable[pair.id] = pair;
                      collisionStart.push(pair);
                      pairsList.push(pair);
                    }
                  }
                  var removePairIndex = [];
                  pairsListLength = pairsList.length;
                  for (i = 0; i < pairsListLength; i++) {
                    pair = pairsList[i];
                    if (!pair.confirmedActive) {
                      Pair.setActive(pair, false, timestamp);
                      collisionEnd.push(pair);
                      if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                        removePairIndex.push(i);
                      }
                    }
                  }
                  for (i = 0; i < removePairIndex.length; i++) {
                    pairIndex = removePairIndex[i] - i;
                    pair = pairsList[pairIndex];
                    pairsList.splice(pairIndex, 1);
                    delete pairsTable[pair.id];
                  }
                };
                Pairs.clear = function(pairs) {
                  pairs.table = {};
                  pairs.list.length = 0;
                  pairs.collisionStart.length = 0;
                  pairs.collisionActive.length = 0;
                  pairs.collisionEnd.length = 0;
                  return pairs;
                };
              })();
            },
            /* 20 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Matter2 = module2.exports = __webpack_require__(21);
              Matter2.Axes = __webpack_require__(11);
              Matter2.Bodies = __webpack_require__(12);
              Matter2.Body = __webpack_require__(4);
              Matter2.Bounds = __webpack_require__(1);
              Matter2.Collision = __webpack_require__(8);
              Matter2.Common = __webpack_require__(0);
              Matter2.Composite = __webpack_require__(6);
              Matter2.Composites = __webpack_require__(22);
              Matter2.Constraint = __webpack_require__(10);
              Matter2.Contact = __webpack_require__(16);
              Matter2.Detector = __webpack_require__(13);
              Matter2.Engine = __webpack_require__(17);
              Matter2.Events = __webpack_require__(5);
              Matter2.Grid = __webpack_require__(23);
              Matter2.Mouse = __webpack_require__(14);
              Matter2.MouseConstraint = __webpack_require__(24);
              Matter2.Pair = __webpack_require__(9);
              Matter2.Pairs = __webpack_require__(19);
              Matter2.Plugin = __webpack_require__(15);
              Matter2.Query = __webpack_require__(25);
              Matter2.Render = __webpack_require__(26);
              Matter2.Resolver = __webpack_require__(18);
              Matter2.Runner = __webpack_require__(27);
              Matter2.SAT = __webpack_require__(28);
              Matter2.Sleeping = __webpack_require__(7);
              Matter2.Svg = __webpack_require__(29);
              Matter2.Vector = __webpack_require__(2);
              Matter2.Vertices = __webpack_require__(3);
              Matter2.World = __webpack_require__(30);
              Matter2.Engine.run = Matter2.Runner.run;
              Matter2.Common.deprecated(Matter2.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
            },
            /* 21 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Matter2 = {};
              module2.exports = Matter2;
              var Plugin = __webpack_require__(15);
              var Common = __webpack_require__(0);
              (function() {
                Matter2.name = "matter-js";
                Matter2.version = true ? "0.19.0" : void 0;
                Matter2.uses = [];
                Matter2.used = [];
                Matter2.use = function() {
                  Plugin.use(Matter2, Array.prototype.slice.call(arguments));
                };
                Matter2.before = function(path, func) {
                  path = path.replace(/^Matter./, "");
                  return Common.chainPathBefore(Matter2, path, func);
                };
                Matter2.after = function(path, func) {
                  path = path.replace(/^Matter./, "");
                  return Common.chainPathAfter(Matter2, path, func);
                };
              })();
            },
            /* 22 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Composites = {};
              module2.exports = Composites;
              var Composite = __webpack_require__(6);
              var Constraint = __webpack_require__(10);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              var Bodies = __webpack_require__(12);
              var deprecated = Common.deprecated;
              (function() {
                Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                  var stack = Composite.create({ label: "Stack" }), x = xx, y = yy, lastBody, i = 0;
                  for (var row = 0; row < rows; row++) {
                    var maxHeight = 0;
                    for (var column = 0; column < columns; column++) {
                      var body = callback(x, y, column, row, lastBody, i);
                      if (body) {
                        var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                        if (bodyHeight > maxHeight)
                          maxHeight = bodyHeight;
                        Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });
                        x = body.bounds.max.x + columnGap;
                        Composite.addBody(stack, body);
                        lastBody = body;
                        i += 1;
                      } else {
                        x += columnGap;
                      }
                    }
                    y += maxHeight + rowGap;
                    x = xx;
                  }
                  return stack;
                };
                Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                  var bodies = composite.bodies;
                  for (var i = 1; i < bodies.length; i++) {
                    var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                    var defaults2 = {
                      bodyA,
                      pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                      bodyB,
                      pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
                    };
                    var constraint = Common.extend(defaults2, options);
                    Composite.addConstraint(composite, Constraint.create(constraint));
                  }
                  composite.label += " Chain";
                  return composite;
                };
                Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                  var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
                  for (row = 0; row < rows; row++) {
                    for (col = 1; col < columns; col++) {
                      bodyA = bodies[col - 1 + row * columns];
                      bodyB = bodies[col + row * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                    }
                    if (row > 0) {
                      for (col = 0; col < columns; col++) {
                        bodyA = bodies[col + (row - 1) * columns];
                        bodyB = bodies[col + row * columns];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                        if (crossBrace && col > 0) {
                          bodyC = bodies[col - 1 + (row - 1) * columns];
                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                        }
                        if (crossBrace && col < columns - 1) {
                          bodyC = bodies[col + 1 + (row - 1) * columns];
                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                        }
                      }
                    }
                  }
                  composite.label += " Mesh";
                  return composite;
                };
                Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                  return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
                    var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                    if (row > actualRows)
                      return;
                    row = actualRows - row;
                    var start = row, end = columns - 1 - row;
                    if (column < start || column > end)
                      return;
                    if (i === 1) {
                      Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
                    }
                    var xOffset = lastBody ? column * lastBodyWidth : 0;
                    return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
                  });
                };
                Composites.newtonsCradle = function(xx, yy, number, size, length) {
                  var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
                  for (var i = 0; i < number; i++) {
                    var separation = 1.9, circle = Bodies.circle(
                      xx + i * (size * separation),
                      yy + length,
                      size,
                      { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                    ), constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });
                    Composite.addBody(newtonsCradle, circle);
                    Composite.addConstraint(newtonsCradle, constraint);
                  }
                  return newtonsCradle;
                };
                deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
                Composites.car = function(xx, yy, width, height, wheelSize) {
                  var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
                  var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(xx, yy, width, height, {
                    collisionFilter: {
                      group
                    },
                    chamfer: {
                      radius: height * 0.5
                    },
                    density: 2e-4
                  });
                  var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
                    collisionFilter: {
                      group
                    },
                    friction: 0.8
                  });
                  var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
                    collisionFilter: {
                      group
                    },
                    friction: 0.8
                  });
                  var axelA = Constraint.create({
                    bodyB: body,
                    pointB: { x: wheelAOffset, y: wheelYOffset },
                    bodyA: wheelA,
                    stiffness: 1,
                    length: 0
                  });
                  var axelB = Constraint.create({
                    bodyB: body,
                    pointB: { x: wheelBOffset, y: wheelYOffset },
                    bodyA: wheelB,
                    stiffness: 1,
                    length: 0
                  });
                  Composite.addBody(car, body);
                  Composite.addBody(car, wheelA);
                  Composite.addBody(car, wheelB);
                  Composite.addConstraint(car, axelA);
                  Composite.addConstraint(car, axelB);
                  return car;
                };
                deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
                Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                  particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
                  constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);
                  var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
                    return Bodies.circle(x, y, particleRadius, particleOptions);
                  });
                  Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                  softBody.label = "Soft Body";
                  return softBody;
                };
                deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
              })();
            },
            /* 23 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Grid = {};
              module2.exports = Grid;
              var Pair = __webpack_require__(9);
              var Common = __webpack_require__(0);
              var deprecated = Common.deprecated;
              (function() {
                Grid.create = function(options) {
                  var defaults2 = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48
                  };
                  return Common.extend(defaults2, options);
                };
                Grid.update = function(grid, bodies, engine, forceUpdate) {
                  var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
                  for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (body.isSleeping && !forceUpdate)
                      continue;
                    if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                      continue;
                    var newRegion = Grid._getRegion(grid, body);
                    if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                      if (!body.region || forceUpdate)
                        body.region = newRegion;
                      var union = Grid._regionUnion(newRegion, body.region);
                      for (col = union.startCol; col <= union.endCol; col++) {
                        for (row = union.startRow; row <= union.endRow; row++) {
                          bucketId = Grid._getBucketId(col, row);
                          bucket = buckets[bucketId];
                          var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                          var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                          if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                              if (bucket)
                                Grid._bucketRemoveBody(grid, bucket, body);
                            }
                          }
                          if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                            if (!bucket)
                              bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                          }
                        }
                      }
                      body.region = newRegion;
                      gridChanged = true;
                    }
                  }
                  if (gridChanged)
                    grid.pairsList = Grid._createActivePairsList(grid);
                };
                deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
                Grid.clear = function(grid) {
                  grid.buckets = {};
                  grid.pairs = {};
                  grid.pairsList = [];
                };
                deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
                Grid._regionUnion = function(regionA, regionB) {
                  var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                  return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                Grid._getRegion = function(grid, body) {
                  var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                  return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                  return {
                    id: startCol + "," + endCol + "," + startRow + "," + endRow,
                    startCol,
                    endCol,
                    startRow,
                    endRow
                  };
                };
                Grid._getBucketId = function(column, row) {
                  return "C" + column + "R" + row;
                };
                Grid._createBucket = function(buckets, bucketId) {
                  var bucket = buckets[bucketId] = [];
                  return bucket;
                };
                Grid._bucketAddBody = function(grid, bucket, body) {
                  var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
                  for (i = 0; i < bucketLength; i++) {
                    var bodyB = bucket[i];
                    if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)
                      continue;
                    var id = pairId(body, bodyB), pair = gridPairs[id];
                    if (pair) {
                      pair[2] += 1;
                    } else {
                      gridPairs[id] = [body, bodyB, 1];
                    }
                  }
                  bucket.push(body);
                };
                Grid._bucketRemoveBody = function(grid, bucket, body) {
                  var gridPairs = grid.pairs, pairId = Pair.id, i;
                  bucket.splice(Common.indexOf(bucket, body), 1);
                  var bucketLength = bucket.length;
                  for (i = 0; i < bucketLength; i++) {
                    var pair = gridPairs[pairId(body, bucket[i])];
                    if (pair)
                      pair[2] -= 1;
                  }
                };
                Grid._createActivePairsList = function(grid) {
                  var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
                  for (k = 0; k < pairKeysLength; k++) {
                    pair = gridPairs[pairKeys[k]];
                    if (pair[2] > 0) {
                      pairs.push(pair);
                    } else {
                      delete gridPairs[pairKeys[k]];
                    }
                  }
                  return pairs;
                };
              })();
            },
            /* 24 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var MouseConstraint = {};
              module2.exports = MouseConstraint;
              var Vertices = __webpack_require__(3);
              var Sleeping = __webpack_require__(7);
              var Mouse = __webpack_require__(14);
              var Events2 = __webpack_require__(5);
              var Detector = __webpack_require__(13);
              var Constraint = __webpack_require__(10);
              var Composite = __webpack_require__(6);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              (function() {
                MouseConstraint.create = function(engine, options) {
                  var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                  if (!mouse) {
                    if (engine && engine.render && engine.render.canvas) {
                      mouse = Mouse.create(engine.render.canvas);
                    } else if (options && options.element) {
                      mouse = Mouse.create(options.element);
                    } else {
                      mouse = Mouse.create();
                      Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                    }
                  }
                  var constraint = Constraint.create({
                    label: "Mouse Constraint",
                    pointA: mouse.position,
                    pointB: { x: 0, y: 0 },
                    length: 0.01,
                    stiffness: 0.1,
                    angularStiffness: 1,
                    render: {
                      strokeStyle: "#90EE90",
                      lineWidth: 3
                    }
                  });
                  var defaults2 = {
                    type: "mouseConstraint",
                    mouse,
                    element: null,
                    body: null,
                    constraint,
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0
                    }
                  };
                  var mouseConstraint = Common.extend(defaults2, options);
                  Events2.on(engine, "beforeUpdate", function() {
                    var allBodies = Composite.allBodies(engine.world);
                    MouseConstraint.update(mouseConstraint, allBodies);
                    MouseConstraint._triggerEvents(mouseConstraint);
                  });
                  return mouseConstraint;
                };
                MouseConstraint.update = function(mouseConstraint, bodies) {
                  var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                  if (mouse.button === 0) {
                    if (!constraint.bodyB) {
                      for (var i = 0; i < bodies.length; i++) {
                        body = bodies[i];
                        if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                          for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                              constraint.pointA = mouse.position;
                              constraint.bodyB = mouseConstraint.body = body;
                              constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                              constraint.angleB = body.angle;
                              Sleeping.set(body, false);
                              Events2.trigger(mouseConstraint, "startdrag", { mouse, body });
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      Sleeping.set(constraint.bodyB, false);
                      constraint.pointA = mouse.position;
                    }
                  } else {
                    constraint.bodyB = mouseConstraint.body = null;
                    constraint.pointB = null;
                    if (body)
                      Events2.trigger(mouseConstraint, "enddrag", { mouse, body });
                  }
                };
                MouseConstraint._triggerEvents = function(mouseConstraint) {
                  var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                  if (mouseEvents.mousemove)
                    Events2.trigger(mouseConstraint, "mousemove", { mouse });
                  if (mouseEvents.mousedown)
                    Events2.trigger(mouseConstraint, "mousedown", { mouse });
                  if (mouseEvents.mouseup)
                    Events2.trigger(mouseConstraint, "mouseup", { mouse });
                  Mouse.clearSourceEvents(mouse);
                };
              })();
            },
            /* 25 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Query = {};
              module2.exports = Query;
              var Vector = __webpack_require__(2);
              var Collision = __webpack_require__(8);
              var Bounds = __webpack_require__(1);
              var Bodies = __webpack_require__(12);
              var Vertices = __webpack_require__(3);
              (function() {
                Query.collides = function(body, bodies) {
                  var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                  for (var i = 0; i < bodiesLength; i++) {
                    var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                    if (overlaps(bodyA.bounds, bounds)) {
                      for (var j = partsAStart; j < partsALength; j++) {
                        var part = bodyA.parts[j];
                        if (overlaps(part.bounds, bounds)) {
                          var collision = collides(part, body);
                          if (collision) {
                            collisions.push(collision);
                            break;
                          }
                        }
                      }
                    }
                  }
                  return collisions;
                };
                Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                  rayWidth = rayWidth || 1e-100;
                  var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
                  for (var i = 0; i < collisions.length; i += 1) {
                    var collision = collisions[i];
                    collision.body = collision.bodyB = collision.bodyA;
                  }
                  return collisions;
                };
                Query.region = function(bodies, bounds, outside) {
                  var result = [];
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                    if (overlaps && !outside || !overlaps && outside)
                      result.push(body);
                  }
                  return result;
                };
                Query.point = function(bodies, point) {
                  var result = [];
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (Bounds.contains(body.bounds, point)) {
                      for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                          result.push(body);
                          break;
                        }
                      }
                    }
                  }
                  return result;
                };
              })();
            },
            /* 26 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Render = {};
              module2.exports = Render;
              var Body = __webpack_require__(4);
              var Common = __webpack_require__(0);
              var Composite = __webpack_require__(6);
              var Bounds = __webpack_require__(1);
              var Events2 = __webpack_require__(5);
              var Vector = __webpack_require__(2);
              var Mouse = __webpack_require__(14);
              (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== "undefined") {
                  _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(function() {
                      callback(Common.now());
                    }, 1e3 / 60);
                  };
                  _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                Render._goodFps = 30;
                Render._goodDelta = 1e3 / 60;
                Render.create = function(options) {
                  var defaults2 = {
                    engine: null,
                    element: null,
                    canvas: null,
                    mouse: null,
                    frameRequestId: null,
                    timing: {
                      historySize: 60,
                      delta: 0,
                      deltaHistory: [],
                      lastTime: 0,
                      lastTimestamp: 0,
                      lastElapsed: 0,
                      timestampElapsed: 0,
                      timestampElapsedHistory: [],
                      engineDeltaHistory: [],
                      engineElapsedHistory: [],
                      elapsedHistory: []
                    },
                    options: {
                      width: 800,
                      height: 600,
                      pixelRatio: 1,
                      background: "#14151f",
                      wireframeBackground: "#14151f",
                      hasBounds: !!options.bounds,
                      enabled: true,
                      wireframes: true,
                      showSleeping: true,
                      showDebug: false,
                      showStats: false,
                      showPerformance: false,
                      showBounds: false,
                      showVelocity: false,
                      showCollisions: false,
                      showSeparations: false,
                      showAxes: false,
                      showPositions: false,
                      showAngleIndicator: false,
                      showIds: false,
                      showVertexNumbers: false,
                      showConvexHulls: false,
                      showInternalEdges: false,
                      showMousePosition: false
                    }
                  };
                  var render5 = Common.extend(defaults2, options);
                  if (render5.canvas) {
                    render5.canvas.width = render5.options.width || render5.canvas.width;
                    render5.canvas.height = render5.options.height || render5.canvas.height;
                  }
                  render5.mouse = options.mouse;
                  render5.engine = options.engine;
                  render5.canvas = render5.canvas || _createCanvas(render5.options.width, render5.options.height);
                  render5.context = render5.canvas.getContext("2d");
                  render5.textures = {};
                  render5.bounds = render5.bounds || {
                    min: {
                      x: 0,
                      y: 0
                    },
                    max: {
                      x: render5.canvas.width,
                      y: render5.canvas.height
                    }
                  };
                  render5.controller = Render;
                  render5.options.showBroadphase = false;
                  if (render5.options.pixelRatio !== 1) {
                    Render.setPixelRatio(render5, render5.options.pixelRatio);
                  }
                  if (Common.isElement(render5.element)) {
                    render5.element.appendChild(render5.canvas);
                  }
                  return render5;
                };
                Render.run = function(render5) {
                  (function loop(time) {
                    render5.frameRequestId = _requestAnimationFrame(loop);
                    _updateTiming(render5, time);
                    Render.world(render5, time);
                    if (render5.options.showStats || render5.options.showDebug) {
                      Render.stats(render5, render5.context, time);
                    }
                    if (render5.options.showPerformance || render5.options.showDebug) {
                      Render.performance(render5, render5.context, time);
                    }
                  })();
                };
                Render.stop = function(render5) {
                  _cancelAnimationFrame(render5.frameRequestId);
                };
                Render.setPixelRatio = function(render5, pixelRatio) {
                  var options = render5.options, canvas = render5.canvas;
                  if (pixelRatio === "auto") {
                    pixelRatio = _getPixelRatio(canvas);
                  }
                  options.pixelRatio = pixelRatio;
                  canvas.setAttribute("data-pixel-ratio", pixelRatio);
                  canvas.width = options.width * pixelRatio;
                  canvas.height = options.height * pixelRatio;
                  canvas.style.width = options.width + "px";
                  canvas.style.height = options.height + "px";
                };
                Render.lookAt = function(render5, objects, padding, center) {
                  center = typeof center !== "undefined" ? center : true;
                  objects = Common.isArray(objects) ? objects : [objects];
                  padding = padding || {
                    x: 0,
                    y: 0
                  };
                  var bounds = {
                    min: { x: Infinity, y: Infinity },
                    max: { x: -Infinity, y: -Infinity }
                  };
                  for (var i = 0; i < objects.length; i += 1) {
                    var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                    if (min && max) {
                      if (min.x < bounds.min.x)
                        bounds.min.x = min.x;
                      if (max.x > bounds.max.x)
                        bounds.max.x = max.x;
                      if (min.y < bounds.min.y)
                        bounds.min.y = min.y;
                      if (max.y > bounds.max.y)
                        bounds.max.y = max.y;
                    }
                  }
                  var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render5.canvas.height, viewWidth = render5.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                  if (innerRatio > outerRatio) {
                    scaleY = innerRatio / outerRatio;
                  } else {
                    scaleX = outerRatio / innerRatio;
                  }
                  render5.options.hasBounds = true;
                  render5.bounds.min.x = bounds.min.x;
                  render5.bounds.max.x = bounds.min.x + width * scaleX;
                  render5.bounds.min.y = bounds.min.y;
                  render5.bounds.max.y = bounds.min.y + height * scaleY;
                  if (center) {
                    render5.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                    render5.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                    render5.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                    render5.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
                  }
                  render5.bounds.min.x -= padding.x;
                  render5.bounds.max.x -= padding.x;
                  render5.bounds.min.y -= padding.y;
                  render5.bounds.max.y -= padding.y;
                  if (render5.mouse) {
                    Mouse.setScale(render5.mouse, {
                      x: (render5.bounds.max.x - render5.bounds.min.x) / render5.canvas.width,
                      y: (render5.bounds.max.y - render5.bounds.min.y) / render5.canvas.height
                    });
                    Mouse.setOffset(render5.mouse, render5.bounds.min);
                  }
                };
                Render.startViewTransform = function(render5) {
                  var boundsWidth = render5.bounds.max.x - render5.bounds.min.x, boundsHeight = render5.bounds.max.y - render5.bounds.min.y, boundsScaleX = boundsWidth / render5.options.width, boundsScaleY = boundsHeight / render5.options.height;
                  render5.context.setTransform(
                    render5.options.pixelRatio / boundsScaleX,
                    0,
                    0,
                    render5.options.pixelRatio / boundsScaleY,
                    0,
                    0
                  );
                  render5.context.translate(-render5.bounds.min.x, -render5.bounds.min.y);
                };
                Render.endViewTransform = function(render5) {
                  render5.context.setTransform(render5.options.pixelRatio, 0, 0, render5.options.pixelRatio, 0, 0);
                };
                Render.world = function(render5, time) {
                  var startTime = Common.now(), engine = render5.engine, world = engine.world, canvas = render5.canvas, context3 = render5.context, options = render5.options, timing = render5.timing;
                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
                  var event = {
                    timestamp: engine.timing.timestamp
                  };
                  Events2.trigger(render5, "beforeRender", event);
                  if (render5.currentBackground !== background)
                    _applyBackground(render5, background);
                  context3.globalCompositeOperation = "source-in";
                  context3.fillStyle = "transparent";
                  context3.fillRect(0, 0, canvas.width, canvas.height);
                  context3.globalCompositeOperation = "source-over";
                  if (options.hasBounds) {
                    for (i = 0; i < allBodies.length; i++) {
                      var body = allBodies[i];
                      if (Bounds.overlaps(body.bounds, render5.bounds))
                        bodies.push(body);
                    }
                    for (i = 0; i < allConstraints.length; i++) {
                      var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                      if (bodyA)
                        pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                      if (bodyB)
                        pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                      if (!pointAWorld || !pointBWorld)
                        continue;
                      if (Bounds.contains(render5.bounds, pointAWorld) || Bounds.contains(render5.bounds, pointBWorld))
                        constraints.push(constraint);
                    }
                    Render.startViewTransform(render5);
                    if (render5.mouse) {
                      Mouse.setScale(render5.mouse, {
                        x: (render5.bounds.max.x - render5.bounds.min.x) / render5.options.width,
                        y: (render5.bounds.max.y - render5.bounds.min.y) / render5.options.height
                      });
                      Mouse.setOffset(render5.mouse, render5.bounds.min);
                    }
                  } else {
                    constraints = allConstraints;
                    bodies = allBodies;
                    if (render5.options.pixelRatio !== 1) {
                      render5.context.setTransform(render5.options.pixelRatio, 0, 0, render5.options.pixelRatio, 0, 0);
                    }
                  }
                  if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
                    Render.bodies(render5, bodies, context3);
                  } else {
                    if (options.showConvexHulls)
                      Render.bodyConvexHulls(render5, bodies, context3);
                    Render.bodyWireframes(render5, bodies, context3);
                  }
                  if (options.showBounds)
                    Render.bodyBounds(render5, bodies, context3);
                  if (options.showAxes || options.showAngleIndicator)
                    Render.bodyAxes(render5, bodies, context3);
                  if (options.showPositions)
                    Render.bodyPositions(render5, bodies, context3);
                  if (options.showVelocity)
                    Render.bodyVelocity(render5, bodies, context3);
                  if (options.showIds)
                    Render.bodyIds(render5, bodies, context3);
                  if (options.showSeparations)
                    Render.separations(render5, engine.pairs.list, context3);
                  if (options.showCollisions)
                    Render.collisions(render5, engine.pairs.list, context3);
                  if (options.showVertexNumbers)
                    Render.vertexNumbers(render5, bodies, context3);
                  if (options.showMousePosition)
                    Render.mousePosition(render5, render5.mouse, context3);
                  Render.constraints(constraints, context3);
                  if (options.hasBounds) {
                    Render.endViewTransform(render5);
                  }
                  Events2.trigger(render5, "afterRender", event);
                  timing.lastElapsed = Common.now() - startTime;
                };
                Render.stats = function(render5, context3, time) {
                  var engine = render5.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                  for (var i = 0; i < bodies.length; i += 1) {
                    parts += bodies[i].parts.length;
                  }
                  var sections = {
                    "Part": parts,
                    "Body": bodies.length,
                    "Cons": Composite.allConstraints(world).length,
                    "Comp": Composite.allComposites(world).length,
                    "Pair": engine.pairs.list.length
                  };
                  context3.fillStyle = "#0e0f19";
                  context3.fillRect(x, y, width * 5.5, height);
                  context3.font = "12px Arial";
                  context3.textBaseline = "top";
                  context3.textAlign = "right";
                  for (var key in sections) {
                    var section = sections[key];
                    context3.fillStyle = "#aaa";
                    context3.fillText(key, x + width, y + 8);
                    context3.fillStyle = "#eee";
                    context3.fillText(section, x + width, y + 26);
                    x += width;
                  }
                };
                Render.performance = function(render5, context3) {
                  var engine = render5.engine, timing = render5.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
                  var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1e3 / deltaMean || 0;
                  var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                  context3.fillStyle = "#0e0f19";
                  context3.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
                  Render.status(
                    context3,
                    x,
                    y,
                    width,
                    graphHeight,
                    deltaHistory.length,
                    Math.round(fps) + " fps",
                    fps / Render._goodFps,
                    function(i) {
                      return deltaHistory[i] / deltaMean - 1;
                    }
                  );
                  Render.status(
                    context3,
                    x + gap + width,
                    y,
                    width,
                    graphHeight,
                    engineDeltaHistory.length,
                    lastEngineDelta.toFixed(2) + " dt",
                    Render._goodDelta / lastEngineDelta,
                    function(i) {
                      return engineDeltaHistory[i] / engineDeltaMean - 1;
                    }
                  );
                  Render.status(
                    context3,
                    x + (gap + width) * 2,
                    y,
                    width,
                    graphHeight,
                    engineElapsedHistory.length,
                    engineElapsedMean.toFixed(2) + " ut",
                    1 - engineElapsedMean / Render._goodFps,
                    function(i) {
                      return engineElapsedHistory[i] / engineElapsedMean - 1;
                    }
                  );
                  Render.status(
                    context3,
                    x + (gap + width) * 3,
                    y,
                    width,
                    graphHeight,
                    elapsedHistory.length,
                    elapsedMean.toFixed(2) + " rt",
                    1 - elapsedMean / Render._goodFps,
                    function(i) {
                      return elapsedHistory[i] / elapsedMean - 1;
                    }
                  );
                  Render.status(
                    context3,
                    x + (gap + width) * 4,
                    y,
                    width,
                    graphHeight,
                    timestampElapsedHistory.length,
                    rateMean.toFixed(2) + " x",
                    rateMean * rateMean * rateMean,
                    function(i) {
                      return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                    }
                  );
                };
                Render.status = function(context3, x, y, width, height, count, label, indicator, plotY) {
                  context3.strokeStyle = "#888";
                  context3.fillStyle = "#444";
                  context3.lineWidth = 1;
                  context3.fillRect(x, y + 7, width, 1);
                  context3.beginPath();
                  context3.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
                  for (var i = 0; i < width; i += 1) {
                    context3.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
                  }
                  context3.stroke();
                  context3.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
                  context3.fillRect(x, y - 7, 4, 4);
                  context3.font = "12px Arial";
                  context3.textBaseline = "middle";
                  context3.textAlign = "right";
                  context3.fillStyle = "#eee";
                  context3.fillText(label, x + width, y - 5);
                };
                Render.constraints = function(constraints, context3) {
                  var c = context3;
                  for (var i = 0; i < constraints.length; i++) {
                    var constraint = constraints[i];
                    if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                      continue;
                    var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                    if (bodyA) {
                      start = Vector.add(bodyA.position, constraint.pointA);
                    } else {
                      start = constraint.pointA;
                    }
                    if (constraint.render.type === "pin") {
                      c.beginPath();
                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                      c.closePath();
                    } else {
                      if (bodyB) {
                        end = Vector.add(bodyB.position, constraint.pointB);
                      } else {
                        end = constraint.pointB;
                      }
                      c.beginPath();
                      c.moveTo(start.x, start.y);
                      if (constraint.render.type === "spring") {
                        var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                        for (var j = 1; j < coils; j += 1) {
                          offset = j % 2 === 0 ? 1 : -1;
                          c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                          );
                        }
                      }
                      c.lineTo(end.x, end.y);
                    }
                    if (constraint.render.lineWidth) {
                      c.lineWidth = constraint.render.lineWidth;
                      c.strokeStyle = constraint.render.strokeStyle;
                      c.stroke();
                    }
                    if (constraint.render.anchors) {
                      c.fillStyle = constraint.render.strokeStyle;
                      c.beginPath();
                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                      c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                      c.closePath();
                      c.fill();
                    }
                  }
                };
                Render.bodies = function(render5, bodies, context3) {
                  var c = context3, engine = render5.engine, options = render5.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      if (!part.render.visible)
                        continue;
                      if (options.showSleeping && body.isSleeping) {
                        c.globalAlpha = 0.5 * part.render.opacity;
                      } else if (part.render.opacity !== 1) {
                        c.globalAlpha = part.render.opacity;
                      }
                      if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                        var sprite = part.render.sprite, texture = _getTexture(render5, sprite.texture);
                        c.translate(part.position.x, part.position.y);
                        c.rotate(part.angle);
                        c.drawImage(
                          texture,
                          texture.width * -sprite.xOffset * sprite.xScale,
                          texture.height * -sprite.yOffset * sprite.yScale,
                          texture.width * sprite.xScale,
                          texture.height * sprite.yScale
                        );
                        c.rotate(-part.angle);
                        c.translate(-part.position.x, -part.position.y);
                      } else {
                        if (part.circleRadius) {
                          c.beginPath();
                          c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                        } else {
                          c.beginPath();
                          c.moveTo(part.vertices[0].x, part.vertices[0].y);
                          for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                              c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                              c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }
                            if (part.vertices[j].isInternal && !showInternalEdges) {
                              c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                          }
                          c.lineTo(part.vertices[0].x, part.vertices[0].y);
                          c.closePath();
                        }
                        if (!options.wireframes) {
                          c.fillStyle = part.render.fillStyle;
                          if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                          }
                          c.fill();
                        } else {
                          c.lineWidth = 1;
                          c.strokeStyle = "#bbb";
                          c.stroke();
                        }
                      }
                      c.globalAlpha = 1;
                    }
                  }
                };
                Render.bodyWireframes = function(render5, bodies, context3) {
                  var c = context3, showInternalEdges = render5.options.showInternalEdges, body, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      c.moveTo(part.vertices[0].x, part.vertices[0].y);
                      for (j = 1; j < part.vertices.length; j++) {
                        if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                          c.lineTo(part.vertices[j].x, part.vertices[j].y);
                        } else {
                          c.moveTo(part.vertices[j].x, part.vertices[j].y);
                        }
                        if (part.vertices[j].isInternal && !showInternalEdges) {
                          c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                        }
                      }
                      c.lineTo(part.vertices[0].x, part.vertices[0].y);
                    }
                  }
                  c.lineWidth = 1;
                  c.strokeStyle = "#bbb";
                  c.stroke();
                };
                Render.bodyConvexHulls = function(render5, bodies, context3) {
                  var c = context3, body, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible || body.parts.length === 1)
                      continue;
                    c.moveTo(body.vertices[0].x, body.vertices[0].y);
                    for (j = 1; j < body.vertices.length; j++) {
                      c.lineTo(body.vertices[j].x, body.vertices[j].y);
                    }
                    c.lineTo(body.vertices[0].x, body.vertices[0].y);
                  }
                  c.lineWidth = 1;
                  c.strokeStyle = "rgba(255,255,255,0.2)";
                  c.stroke();
                };
                Render.vertexNumbers = function(render5, bodies, context3) {
                  var c = context3, i, j, k;
                  for (i = 0; i < bodies.length; i++) {
                    var parts = bodies[i].parts;
                    for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                      var part = parts[k];
                      for (j = 0; j < part.vertices.length; j++) {
                        c.fillStyle = "rgba(255,255,255,0.2)";
                        c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                      }
                    }
                  }
                };
                Render.mousePosition = function(render5, mouse, context3) {
                  var c = context3;
                  c.fillStyle = "rgba(255,255,255,0.8)";
                  c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
                };
                Render.bodyBounds = function(render5, bodies, context3) {
                  var c = context3, engine = render5.engine, options = render5.options;
                  c.beginPath();
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (body.render.visible) {
                      var parts = bodies[i].parts;
                      for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        var part = parts[j];
                        c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                      }
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,255,255,0.08)";
                  } else {
                    c.strokeStyle = "rgba(0,0,0,0.1)";
                  }
                  c.lineWidth = 1;
                  c.stroke();
                };
                Render.bodyAxes = function(render5, bodies, context3) {
                  var c = context3, engine = render5.engine, options = render5.options, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i], parts = body.parts;
                    if (!body.render.visible)
                      continue;
                    if (options.showAxes) {
                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        part = parts[j];
                        for (k = 0; k < part.axes.length; k++) {
                          var axis = part.axes[k];
                          c.moveTo(part.position.x, part.position.y);
                          c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                        }
                      }
                    } else {
                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        part = parts[j];
                        for (k = 0; k < part.axes.length; k++) {
                          c.moveTo(part.position.x, part.position.y);
                          c.lineTo(
                            (part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2
                          );
                        }
                      }
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "indianred";
                    c.lineWidth = 1;
                  } else {
                    c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                    c.globalCompositeOperation = "overlay";
                    c.lineWidth = 2;
                  }
                  c.stroke();
                  c.globalCompositeOperation = "source-over";
                };
                Render.bodyPositions = function(render5, bodies, context3) {
                  var c = context3, engine = render5.engine, options = render5.options, body, part, i, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                      c.closePath();
                    }
                  }
                  if (options.wireframes) {
                    c.fillStyle = "indianred";
                  } else {
                    c.fillStyle = "rgba(0,0,0,0.5)";
                  }
                  c.fill();
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (body.render.visible) {
                      c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                      c.closePath();
                    }
                  }
                  c.fillStyle = "rgba(255,165,0,0.8)";
                  c.fill();
                };
                Render.bodyVelocity = function(render5, bodies, context3) {
                  var c = context3;
                  c.beginPath();
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    var velocity = Body.getVelocity(body);
                    c.moveTo(body.position.x, body.position.y);
                    c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
                  }
                  c.lineWidth = 3;
                  c.strokeStyle = "cornflowerblue";
                  c.stroke();
                };
                Render.bodyIds = function(render5, bodies, context3) {
                  var c = context3, i, j;
                  for (i = 0; i < bodies.length; i++) {
                    if (!bodies[i].render.visible)
                      continue;
                    var parts = bodies[i].parts;
                    for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                      var part = parts[j];
                      c.font = "12px Arial";
                      c.fillStyle = "rgba(255,255,255,0.5)";
                      c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                    }
                  }
                };
                Render.collisions = function(render5, pairs, context3) {
                  var c = context3, options = render5.options, pair, collision, corrected, bodyA, bodyB, i, j;
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    for (j = 0; j < pair.activeContacts.length; j++) {
                      var contact = pair.activeContacts[j], vertex = contact.vertex;
                      c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                    }
                  }
                  if (options.wireframes) {
                    c.fillStyle = "rgba(255,255,255,0.7)";
                  } else {
                    c.fillStyle = "orange";
                  }
                  c.fill();
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    if (pair.activeContacts.length > 0) {
                      var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                      if (pair.activeContacts.length === 2) {
                        normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                        normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                      }
                      if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                        c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                      } else {
                        c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                      }
                      c.lineTo(normalPosX, normalPosY);
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,165,0,0.7)";
                  } else {
                    c.strokeStyle = "orange";
                  }
                  c.lineWidth = 1;
                  c.stroke();
                };
                Render.separations = function(render5, pairs, context3) {
                  var c = context3, options = render5.options, pair, collision, corrected, bodyA, bodyB, i, j;
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.bodyA;
                    bodyB = collision.bodyB;
                    var k = 1;
                    if (!bodyB.isStatic && !bodyA.isStatic)
                      k = 0.5;
                    if (bodyB.isStatic)
                      k = 0;
                    c.moveTo(bodyB.position.x, bodyB.position.y);
                    c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                    k = 1;
                    if (!bodyB.isStatic && !bodyA.isStatic)
                      k = 0.5;
                    if (bodyA.isStatic)
                      k = 0;
                    c.moveTo(bodyA.position.x, bodyA.position.y);
                    c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,165,0,0.5)";
                  } else {
                    c.strokeStyle = "orange";
                  }
                  c.stroke();
                };
                Render.inspector = function(inspector, context3) {
                  var engine = inspector.engine, selected = inspector.selected, render5 = inspector.render, options = render5.options, bounds;
                  if (options.hasBounds) {
                    var boundsWidth = render5.bounds.max.x - render5.bounds.min.x, boundsHeight = render5.bounds.max.y - render5.bounds.min.y, boundsScaleX = boundsWidth / render5.options.width, boundsScaleY = boundsHeight / render5.options.height;
                    context3.scale(1 / boundsScaleX, 1 / boundsScaleY);
                    context3.translate(-render5.bounds.min.x, -render5.bounds.min.y);
                  }
                  for (var i = 0; i < selected.length; i++) {
                    var item = selected[i].data;
                    context3.translate(0.5, 0.5);
                    context3.lineWidth = 1;
                    context3.strokeStyle = "rgba(255,165,0,0.9)";
                    context3.setLineDash([1, 2]);
                    switch (item.type) {
                      case "body":
                        bounds = item.bounds;
                        context3.beginPath();
                        context3.rect(
                          Math.floor(bounds.min.x - 3),
                          Math.floor(bounds.min.y - 3),
                          Math.floor(bounds.max.x - bounds.min.x + 6),
                          Math.floor(bounds.max.y - bounds.min.y + 6)
                        );
                        context3.closePath();
                        context3.stroke();
                        break;
                      case "constraint":
                        var point = item.pointA;
                        if (item.bodyA)
                          point = item.pointB;
                        context3.beginPath();
                        context3.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                        context3.closePath();
                        context3.stroke();
                        break;
                    }
                    context3.setLineDash([]);
                    context3.translate(-0.5, -0.5);
                  }
                  if (inspector.selectStart !== null) {
                    context3.translate(0.5, 0.5);
                    context3.lineWidth = 1;
                    context3.strokeStyle = "rgba(255,165,0,0.6)";
                    context3.fillStyle = "rgba(255,165,0,0.1)";
                    bounds = inspector.selectBounds;
                    context3.beginPath();
                    context3.rect(
                      Math.floor(bounds.min.x),
                      Math.floor(bounds.min.y),
                      Math.floor(bounds.max.x - bounds.min.x),
                      Math.floor(bounds.max.y - bounds.min.y)
                    );
                    context3.closePath();
                    context3.stroke();
                    context3.fill();
                    context3.translate(-0.5, -0.5);
                  }
                  if (options.hasBounds)
                    context3.setTransform(1, 0, 0, 1, 0, 0);
                };
                var _updateTiming = function(render5, time) {
                  var engine = render5.engine, timing = render5.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                  timing.delta = time - timing.lastTime || Render._goodDelta;
                  timing.lastTime = time;
                  timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                  timing.lastTimestamp = timestamp;
                  timing.deltaHistory.unshift(timing.delta);
                  timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                  timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                  timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                  timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                  timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                  timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                  timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                  timing.elapsedHistory.unshift(timing.lastElapsed);
                  timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
                };
                var _mean = function(values) {
                  var result = 0;
                  for (var i = 0; i < values.length; i += 1) {
                    result += values[i];
                  }
                  return result / values.length || 0;
                };
                var _createCanvas = function(width, height) {
                  var canvas = document.createElement("canvas");
                  canvas.width = width;
                  canvas.height = height;
                  canvas.oncontextmenu = function() {
                    return false;
                  };
                  canvas.onselectstart = function() {
                    return false;
                  };
                  return canvas;
                };
                var _getPixelRatio = function(canvas) {
                  var context3 = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context3.webkitBackingStorePixelRatio || context3.mozBackingStorePixelRatio || context3.msBackingStorePixelRatio || context3.oBackingStorePixelRatio || context3.backingStorePixelRatio || 1;
                  return devicePixelRatio / backingStorePixelRatio;
                };
                var _getTexture = function(render5, imagePath) {
                  var image = render5.textures[imagePath];
                  if (image)
                    return image;
                  image = render5.textures[imagePath] = new Image();
                  image.src = imagePath;
                  return image;
                };
                var _applyBackground = function(render5, background) {
                  var cssBackground = background;
                  if (/(jpg|gif|png)$/.test(background))
                    cssBackground = "url(" + background + ")";
                  render5.canvas.style.background = cssBackground;
                  render5.canvas.style.backgroundSize = "contain";
                  render5.currentBackground = background;
                };
              })();
            },
            /* 27 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Runner = {};
              module2.exports = Runner;
              var Events2 = __webpack_require__(5);
              var Engine = __webpack_require__(17);
              var Common = __webpack_require__(0);
              (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== "undefined") {
                  _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
                  _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                if (!_requestAnimationFrame) {
                  var _frameTimeout;
                  _requestAnimationFrame = function(callback) {
                    _frameTimeout = setTimeout(function() {
                      callback(Common.now());
                    }, 1e3 / 60);
                  };
                  _cancelAnimationFrame = function() {
                    clearTimeout(_frameTimeout);
                  };
                }
                Runner.create = function(options) {
                  var defaults2 = {
                    fps: 60,
                    deltaSampleSize: 60,
                    counterTimestamp: 0,
                    frameCounter: 0,
                    deltaHistory: [],
                    timePrev: null,
                    frameRequestId: null,
                    isFixed: false,
                    enabled: true
                  };
                  var runner = Common.extend(defaults2, options);
                  runner.delta = runner.delta || 1e3 / runner.fps;
                  runner.deltaMin = runner.deltaMin || 1e3 / runner.fps;
                  runner.deltaMax = runner.deltaMax || 1e3 / (runner.fps * 0.5);
                  runner.fps = 1e3 / runner.delta;
                  return runner;
                };
                Runner.run = function(runner, engine) {
                  if (typeof runner.positionIterations !== "undefined") {
                    engine = runner;
                    runner = Runner.create();
                  }
                  (function run(time) {
                    runner.frameRequestId = _requestAnimationFrame(run);
                    if (time && runner.enabled) {
                      Runner.tick(runner, engine, time);
                    }
                  })();
                  return runner;
                };
                Runner.tick = function(runner, engine, time) {
                  var timing = engine.timing, delta;
                  if (runner.isFixed) {
                    delta = runner.delta;
                  } else {
                    delta = time - runner.timePrev || runner.delta;
                    runner.timePrev = time;
                    runner.deltaHistory.push(delta);
                    runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
                    delta = Math.min.apply(null, runner.deltaHistory);
                    delta = delta < runner.deltaMin ? runner.deltaMin : delta;
                    delta = delta > runner.deltaMax ? runner.deltaMax : delta;
                    runner.delta = delta;
                  }
                  var event = {
                    timestamp: timing.timestamp
                  };
                  Events2.trigger(runner, "beforeTick", event);
                  runner.frameCounter += 1;
                  if (time - runner.counterTimestamp >= 1e3) {
                    runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1e3);
                    runner.counterTimestamp = time;
                    runner.frameCounter = 0;
                  }
                  Events2.trigger(runner, "tick", event);
                  Events2.trigger(runner, "beforeUpdate", event);
                  Engine.update(engine, delta);
                  Events2.trigger(runner, "afterUpdate", event);
                  Events2.trigger(runner, "afterTick", event);
                };
                Runner.stop = function(runner) {
                  _cancelAnimationFrame(runner.frameRequestId);
                };
                Runner.start = function(runner, engine) {
                  Runner.run(runner, engine);
                };
              })();
            },
            /* 28 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var SAT = {};
              module2.exports = SAT;
              var Collision = __webpack_require__(8);
              var Common = __webpack_require__(0);
              var deprecated = Common.deprecated;
              (function() {
                SAT.collides = function(bodyA, bodyB) {
                  return Collision.collides(bodyA, bodyB);
                };
                deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
              })();
            },
            /* 29 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var Svg = {};
              module2.exports = Svg;
              var Bounds = __webpack_require__(1);
              var Common = __webpack_require__(0);
              (function() {
                Svg.pathToVertices = function(path, sampleLength) {
                  if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
                    Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                  }
                  var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
                  sampleLength = sampleLength || 15;
                  var addPoint = function(px, py, pathSegType) {
                    var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                    if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                      if (lastPoint && isRelative) {
                        lx = lastPoint.x;
                        ly = lastPoint.y;
                      } else {
                        lx = 0;
                        ly = 0;
                      }
                      var point2 = {
                        x: lx + px,
                        y: ly + py
                      };
                      if (isRelative || !lastPoint) {
                        lastPoint = point2;
                      }
                      points.push(point2);
                      x = lx + px;
                      y = ly + py;
                    }
                  };
                  var addSegmentPoint = function(segment2) {
                    var segType = segment2.pathSegTypeAsLetter.toUpperCase();
                    if (segType === "Z")
                      return;
                    switch (segType) {
                      case "M":
                      case "L":
                      case "T":
                      case "C":
                      case "S":
                      case "Q":
                        x = segment2.x;
                        y = segment2.y;
                        break;
                      case "H":
                        x = segment2.x;
                        break;
                      case "V":
                        y = segment2.y;
                        break;
                    }
                    addPoint(x, y, segment2.pathSegType);
                  };
                  Svg._svgPathToAbsolute(path);
                  total = path.getTotalLength();
                  segments = [];
                  for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
                    segments.push(path.pathSegList.getItem(i));
                  segmentsQueue = segments.concat();
                  while (length < total) {
                    segmentIndex = path.getPathSegAtLength(length);
                    segment = segments[segmentIndex];
                    if (segment != lastSegment) {
                      while (segmentsQueue.length && segmentsQueue[0] != segment)
                        addSegmentPoint(segmentsQueue.shift());
                      lastSegment = segment;
                    }
                    switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                      case "C":
                      case "T":
                      case "S":
                      case "Q":
                      case "A":
                        point = path.getPointAtLength(length);
                        addPoint(point.x, point.y, 0);
                        break;
                    }
                    length += sampleLength;
                  }
                  for (i = 0, il = segmentsQueue.length; i < il; ++i)
                    addSegmentPoint(segmentsQueue[i]);
                  return points;
                };
                Svg._svgPathToAbsolute = function(path) {
                  var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                  for (var i = 0; i < len; ++i) {
                    var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(segType)) {
                      if ("x" in seg)
                        x = seg.x;
                      if ("y" in seg)
                        y = seg.y;
                    } else {
                      if ("x1" in seg)
                        x1 = x + seg.x1;
                      if ("x2" in seg)
                        x2 = x + seg.x2;
                      if ("y1" in seg)
                        y1 = y + seg.y1;
                      if ("y2" in seg)
                        y2 = y + seg.y2;
                      if ("x" in seg)
                        x += seg.x;
                      if ("y" in seg)
                        y += seg.y;
                      switch (segType) {
                        case "m":
                          segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                          break;
                        case "l":
                          segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                          break;
                        case "h":
                          segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                          break;
                        case "v":
                          segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                          break;
                        case "c":
                          segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                          break;
                        case "s":
                          segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                          break;
                        case "q":
                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                          break;
                        case "t":
                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                          break;
                        case "a":
                          segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                          break;
                        case "z":
                        case "Z":
                          x = x0;
                          y = y0;
                          break;
                      }
                    }
                    if (segType == "M" || segType == "m") {
                      x0 = x;
                      y0 = y;
                    }
                  }
                };
              })();
            },
            /* 30 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var World = {};
              module2.exports = World;
              var Composite = __webpack_require__(6);
              var Common = __webpack_require__(0);
              (function() {
                World.create = Composite.create;
                World.add = Composite.add;
                World.remove = Composite.remove;
                World.clear = Composite.clear;
                World.addComposite = Composite.addComposite;
                World.addBody = Composite.addBody;
                World.addConstraint = Composite.addConstraint;
              })();
            }
            /******/
          ])
        );
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // node_modules/gsap/index.js
  init_live_reload();

  // node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (_windowExists() && config3) {
      config3 = !config3.name && config3["default"] || config3;
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      config3 && _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime2 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime2(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime2() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill2() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render5(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render5(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill2(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween3(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween3.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween3;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill2(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function(t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function(t) {
          return {
            g: t.globalTime(0),
            t
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        this.data.forEach(function(e) {
          return !(e instanceof Tween) && e.revert && e.revert(revert);
        });
        this._r.forEach(function(f) {
          return f(revert, _this4);
        });
        this.isReverted = true;
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3);
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill2(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init6(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.2";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/gsap/utils/paths.js
  init_live_reload();
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG2 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _roundingNum = 1e5;
  var _round3 = function _round4(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  function getRawPath(value) {
    value = _isString3(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
    var e = value.getAttribute ? value : 0, rawPath;
    if (e && (value = value.getAttribute("d"))) {
      if (!e._gsPath) {
        e._gsPath = {};
      }
      rawPath = e._gsPath[value];
      return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
    }
    return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString3(value) ? stringToRawPath(value) : _isNumber3(value[0]) ? [value] : value;
  }
  function reverseSegment(segment) {
    var i = 0, y;
    segment.reverse();
    for (; i < segment.length; i += 2) {
      y = segment[i];
      segment[i] = segment[i + 1];
      segment[i + 1] = y;
    }
    segment.reversed = !segment.reversed;
  }
  var _createPath = function _createPath2(e, ignore) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i = attr.length, name;
    ignore = "," + ignore + ",";
    while (--i > -1) {
      name = attr[i].nodeName.toLowerCase();
      if (ignore.indexOf("," + name + ",") < 0) {
        path.setAttributeNS(null, name, attr[i].nodeValue);
      }
    }
    return path;
  };
  var _typeAttrs = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  };
  var _attrToObj = function _attrToObj2(e, attrs) {
    var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;
    while (--i > -1) {
      obj[props[i]] = +e.getAttribute(props[i]) || 0;
    }
    return obj;
  };
  function convertToPath(element, swap) {
    var type = element.tagName.toLowerCase(), circ = 0.552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;
    if (type === "path" || !element.getBBox) {
      return element;
    }
    path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
    attr = _attrToObj(element, _typeAttrs[type]);
    if (type === "rect") {
      r = attr.rx;
      ry = attr.ry || r;
      x = attr.x;
      y = attr.y;
      w = attr.width - r * 2;
      h = attr.height - ry * 2;
      if (r || ry) {
        x2 = x + r * (1 - circ);
        x3 = x + r;
        x4 = x3 + w;
        x5 = x4 + r * circ;
        x6 = x4 + r;
        y2 = y + ry * (1 - circ);
        y3 = y + ry;
        y4 = y3 + h;
        y5 = y4 + ry * circ;
        y6 = y4 + ry;
        data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
      } else {
        data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
      }
    } else if (type === "circle" || type === "ellipse") {
      if (type === "circle") {
        r = ry = attr.r;
        rycirc = r * circ;
      } else {
        r = attr.rx;
        ry = attr.ry;
        rycirc = ry * circ;
      }
      x = attr.cx;
      y = attr.cy;
      rcirc = r * circ;
      data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
    } else if (type === "line") {
      data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
    } else if (type === "polyline" || type === "polygon") {
      points = (element.getAttribute("points") + "").match(_numbersExp) || [];
      x = points.shift();
      y = points.shift();
      data = "M" + x + "," + y + " L" + points.join(",");
      if (type === "polygon") {
        data += "," + x + "," + y + "z";
      }
    }
    path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
    if (swap && element.parentNode) {
      element.parentNode.insertBefore(path, element);
      element.parentNode.removeChild(element);
    }
    return path;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs(rx);
    ry = _abs(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
    for (i = 0; i < segments; i++) {
      angle = angleStart + i * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i = 0; i < rawPath.length; i += 2) {
      x1 = rawPath[i];
      y1 = rawPath[i + 1];
      rawPath[i] = x1 * ma + y1 * mc + cx;
      rawPath[i + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i - 2] = x;
    rawPath[i - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n = +m;
      return n < 1e-4 && n > -1e-4 ? 0 : n;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i = 0; i < elements; i++) {
      prevCommand = command;
      if (isNaN(a[i])) {
        command = a[i].toUpperCase();
        isRelative = command !== a[i];
      } else {
        i--;
      }
      x = +a[i + 1];
      y = +a[i + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
        i += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
        i += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i + 3] * 1;
        relativeY += a[i + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i + 4];
        flag2 = a[i + 5];
        difX = a[i + 6];
        difY = a[i + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i = segment.length;
    if (i < 6) {
      path.pop();
      i = 0;
    } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s, i, segment;
    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round3(segment[0]) + "," + _round3(segment[1]) + " C";
      sl = segment.length;
      for (i = 2; i < sl; i++) {
        result += _round3(segment[i++]) + "," + _round3(segment[i++]) + " " + _round3(segment[i++]) + "," + _round3(segment[i++]) + " " + _round3(segment[i++]) + "," + _round3(segment[i]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/gsap/Draggable.js
  init_live_reload();

  // node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc3;
  var _win3;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win3 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc3 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div");
      _body.appendChild(d1);
      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp2] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;
      _body.removeChild(d1);
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e) {
    var a, cache;
    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }
      e = e.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win3.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e);
        }
      }
      return e;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c = new Matrix2D(), i = 0;
    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }
    return c;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win3) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win3.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c === void 0) {
        c = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e === void 0) {
        e = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a, b, c, d, e, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/gsap/Draggable.js
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var gsap2;
  var _win4;
  var _doc4;
  var _docElement3;
  var _body2;
  var _tempDiv2;
  var _placeholderDiv;
  var _coreInitted2;
  var _checkPrefix;
  var _toArray;
  var _supportsPassive;
  var _isTouchDevice;
  var _touchEventLookup;
  var _isMultiTouching;
  var _isAndroid;
  var InertiaPlugin;
  var _defaultCursor;
  var _supportsPointer;
  var _context2;
  var _getStyleSaver3;
  var _dragCount = 0;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap2 || _windowExists5() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _isUndefined3 = function _isUndefined4(value) {
    return typeof value === "undefined";
  };
  var _emptyFunc3 = function _emptyFunc4() {
    return false;
  };
  var _transformProp3 = "transform";
  var _transformOriginProp3 = "transformOrigin";
  var _round5 = function _round6(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _isArray2 = Array.isArray;
  var _createElement3 = function _createElement4(type, ns) {
    var e = _doc4.createElementNS ? _doc4.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc4.createElement(type);
    return e.style ? e : _doc4.createElement(type);
  };
  var _RAD2DEG3 = 180 / Math.PI;
  var _bigNum3 = 1e20;
  var _identityMatrix2 = new Matrix2D();
  var _getTime = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  var _renderQueue = [];
  var _lookup = {};
  var _lookupCount = 0;
  var _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
  var _lastDragTime = 0;
  var _temp1 = {};
  var _windowProxy = {};
  var _copy = function _copy2(obj, factor) {
    var copy = {}, p;
    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }
    return copy;
  };
  var _extend = function _extend2(obj, defaults2) {
    for (var p in defaults2) {
      if (!(p in obj)) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
    var i = elements.length, children;
    while (i--) {
      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
      children = elements[i].children;
      children && children.length && _setTouchActionForAllDescendants2(children, value);
    }
  };
  var _renderQueueTick = function _renderQueueTick2() {
    return _renderQueue.forEach(function(func) {
      return func();
    });
  };
  var _addToRenderQueue = function _addToRenderQueue2(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) {
      gsap2.ticker.add(_renderQueueTick);
    }
  };
  var _renderQueueTimeout = function _renderQueueTimeout2() {
    return !_renderQueue.length && gsap2.ticker.remove(_renderQueueTick);
  };
  var _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
    var i = _renderQueue.length;
    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }
    gsap2.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      if (!(p in obj)) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _addListener = function _addListener2(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.removeEventListener(type, func, capture);
    }
  };
  var _preventDefault = function _preventDefault2(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  };
  var _hasTouchID = function _hasTouchID2(list, ID) {
    var i = list.length;
    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  };
  var _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd2);
  };
  var _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  };
  var _getDocScrollTop3 = function _getDocScrollTop4(doc) {
    return _win4.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  };
  var _getDocScrollLeft3 = function _getDocScrollLeft4(doc) {
    return _win4.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  };
  var _addScrollListener = function _addScrollListener2(e, callback) {
    _addListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _addScrollListener2(e.parentNode, callback);
    }
  };
  var _removeScrollListener = function _removeScrollListener2(e, callback) {
    _removeListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _removeScrollListener2(e.parentNode, callback);
    }
  };
  var _isRoot = function _isRoot2(e) {
    return !!(!e || e === _docElement3 || e.nodeType === 9 || e === _doc4.body || e === _win4 || !e.nodeType || !e.parentNode);
  };
  var _getMaxScroll = function _getMaxScroll2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body2[scroll]) - (_win4["inner" + dim] || _docElement3[client] || _body2[client]) : element[scroll] - element[client]);
  };
  var _recordMaxScrolls = function _recordMaxScrolls2(e, skipCurrent) {
    var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls2(e.parentNode, skipCurrent);
    }
    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    if (!skipCurrent) {
      e._gsScrollX = e.scrollLeft || 0;
      e._gsScrollY = e.scrollTop || 0;
    }
  };
  var _setStyle = function _setStyle2(element, property, value) {
    var style = element.style;
    if (!style) {
      return;
    }
    if (_isUndefined3(style[property])) {
      property = _checkPrefix(property, element) || property;
    }
    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  };
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win4.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  };
  var _tempRect = {};
  var _parseRect = function _parseRect2(e) {
    if (e === _win4) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement3.clientWidth || e.innerWidth || _body2.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e.innerHeight || _body2.clientHeight || 0;
      return _tempRect;
    }
    var doc = e.ownerDocument || _doc4, r = !_isUndefined3(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft3(doc),
      top: e.pageY - _getDocScrollTop3(doc),
      right: e.pageX - _getDocScrollLeft3(doc) + 1,
      bottom: e.pageY - _getDocScrollTop3(doc) + 1
    } : !e.nodeType && !_isUndefined3(e.left) && !_isUndefined3(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
    if (_isUndefined3(r.right) && !_isUndefined3(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined3(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }
    return r;
  };
  var _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
    var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
    if (_isFunction3(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }
    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }
    return result;
  };
  var _getBounds = function _getBounds2(target, context3) {
    var e = _toArray(target)[0], top, left, offset;
    if (!e.nodeType && e !== _win4) {
      if (!_isUndefined3(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }
      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left,
        top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }
    return _getElementBounds(e, context3);
  };
  var _point1 = {};
  var _getElementBounds = function _getElementBounds2(element, context3) {
    context3 = _toArray(context3)[0];
    var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc4, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
    if (element === _win4) {
      top = _getDocScrollTop3(doc);
      left = _getDocScrollLeft3(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context3 === _win4 || _isUndefined3(context3)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;
      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }
        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }
      right = width;
      bottom = height;
    }
    if (element === context3) {
      return {
        left,
        top,
        width: right - left,
        height: bottom - top
      };
    }
    matrix = getGlobalMatrix(context3, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    return {
      left,
      top,
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  };
  var _parseInertia = function _parseInertia2(draggable, snap3, max, min, factor, forceZeroVelocity) {
    var vars = {}, a, i, l;
    if (snap3) {
      if (factor !== 1 && snap3 instanceof Array) {
        vars.end = a = [];
        l = snap3.length;
        if (_isObject3(snap3[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap3[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap3[i] * factor;
          }
        }
        max += 1.1;
        min -= 1.1;
      } else if (_isFunction3(snap3)) {
        vars.end = function(value) {
          var result = snap3.call(draggable, value), copy, p;
          if (factor !== 1) {
            if (_isObject3(result)) {
              copy = {};
              for (p in result) {
                copy[p] = result[p] * factor;
              }
              result = copy;
            } else {
              result *= factor;
            }
          }
          return result;
        };
      } else {
        vars.end = snap3;
      }
    }
    if (max || max === 0) {
      vars.max = max;
    }
    if (min || min === 0) {
      vars.min = min;
    }
    if (forceZeroVelocity) {
      vars.velocity = 0;
    }
    return vars;
  };
  var _isClickable = function _isClickable2(element) {
    var data;
    return !element || !element.getAttribute || element === _body2 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (_clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
  };
  var _setSelectable = function _setSelectable2(elements, selectable) {
    var i = elements.length, e;
    while (i--) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc3;
      gsap2.set(e, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  };
  var _isFixed3 = function _isFixed4(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed4(element);
    }
  };
  var _supports3D2;
  var _addPaddingBR;
  var ScrollProxy = function ScrollProxy2(element, vars) {
    element = gsap2.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D2 && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp3) {
      transformStart = "translate(";
      transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
      if (!arguments.length) {
        return -this.top();
      }
      this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
      if (!arguments.length) {
        return -this.left();
      }
      this.left(-value, force);
    };
    this.left = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }
      var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap2.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }
      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }
      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };
    this.top = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }
      var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap2.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }
      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }
      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
      return maxTop;
    };
    this.maxScrollLeft = function() {
      return maxLeft;
    };
    this.disable = function() {
      node = content.firstChild;
      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }
      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };
    this.enable = function() {
      node = element.firstChild;
      if (node === content) {
        return;
      }
      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }
      element.appendChild(content);
      this.calibrate();
    };
    this.calibrate = function(force) {
      var widthMatches = element.clientWidth === elementWidth, cs, x, y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;
      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }
      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }
      cs = _getComputedStyle(element);
      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }
      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";
      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }
      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";
      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };
    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  };
  var _initCore3 = function _initCore4(required) {
    if (_windowExists5() && document.body) {
      var nav = window && window.navigator;
      _win4 = window;
      _doc4 = document;
      _docElement3 = _doc4.documentElement;
      _body2 = _doc4.body;
      _tempDiv2 = _createElement3("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement3("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win4 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
      _addPaddingBR = function() {
        var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent = _body2, val;
        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();
      _touchEventLookup = function(types) {
        var standard = types.split(","), converted = ("onpointerdown" in _tempDiv2 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv2 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }
        try {
          _docElement3.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {
        }
        return obj;
      }("touchstart,touchmove,touchend,touchcancel");
      _addListener(_doc4, "touchcancel", _emptyFunc3);
      _addListener(_win4, "touchmove", _emptyFunc3);
      _body2 && _body2.addEventListener("touchstart", _emptyFunc3);
      _addListener(_doc4, "contextmenu", function() {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });
      gsap2 = _coreInitted2 = _getGSAP();
    }
    if (gsap2) {
      InertiaPlugin = gsap2.plugins.inertia;
      _context2 = gsap2.core.context || function() {
      };
      _checkPrefix = gsap2.utils.checkPrefix;
      _transformProp3 = _checkPrefix(_transformProp3);
      _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
      _toArray = gsap2.utils.toArray;
      _getStyleSaver3 = gsap2.core.getStyleSaver;
      _supports3D2 = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };
  var EventDispatcher = /* @__PURE__ */ function() {
    function EventDispatcher2(target) {
      this._listeners = {};
      this.target = target || this;
    }
    var _proto = EventDispatcher2.prototype;
    _proto.addEventListener = function addEventListener2(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);
      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };
    _proto.removeEventListener = function removeEventListener2(type, callback) {
      var list = this._listeners[type], i = list && list.indexOf(callback);
      i >= 0 && list.splice(i, 1);
    };
    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;
      var result;
      (this._listeners[type] || []).forEach(function(callback) {
        return callback.call(_this, {
          type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };
    return EventDispatcher2;
  }();
  var Draggable = /* @__PURE__ */ function(_EventDispatcher) {
    _inheritsLoose2(Draggable2, _EventDispatcher);
    function Draggable2(target, vars) {
      var _this2;
      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted2 || _initCore3(1);
      target = _toArray(target)[0];
      _this2.styles = _getStyleSaver3 && _getStyleSaver3(target, "transform,left,top");
      if (!InertiaPlugin) {
        InertiaPlugin = gsap2.plugins.inertia;
      }
      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap2.getProperty(target, "x");
      var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized2(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap2.core.getCache(target), isFixed = _isFixed3(target), getPropAsNum = function getPropAsNum2(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      }, ownerDoc = target.ownerDocument || _doc4, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e) {
        _preventDefault(e);
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      }, render5 = function render6(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win4.pageYOffset != null ? _win4.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win4.pageXOffset != null ? _win4.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;
          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement3.clientHeight, _win4.innerHeight || 0),
              right: Math.max(_docElement3.clientWidth, _win4.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;
            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;
              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }
              if (changeY) {
                parent.scrollTop += changeY;
              }
            }
            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;
              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }
              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }
            if (isRoot && (changeX || changeY)) {
              _win4.scrollTo(parent.scrollLeft, parent.scrollTop);
              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }
            e = parent;
          }
        }
        if (dirty) {
          var x = self.x, y = self.y;
          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }
              if (allowX) {
                self.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }
              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }
              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }
              if (allowX) {
                self.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }
          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;
            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }
              if (allowY) {
                self.y -= self.deltaY;
              }
              render6(true);
            }
            isDispatching = false;
          }
        }
        dirty = false;
      }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
        var x = self.x, y = self.y, snappedValue, cs;
        if (!target._gsap) {
          gsCache = gsap2.core.getCache(target);
        }
        gsCache.uncache && gsap2.getProperty(target, "x");
        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }
        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);
            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }
            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }
          if (snapX) {
            snappedValue = snapX(self.x);
            if (snappedValue !== self.x) {
              self.x = snappedValue;
              if (rotationMode) {
                self.rotation = snappedValue;
              }
              dirty = true;
            }
          }
          if (snapY) {
            snappedValue = snapY(self.y);
            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }
            dirty = true;
          }
        }
        dirty && render5(true);
        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;
          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
        if (min == null) {
          min = -_bigNum3;
        }
        if (max == null) {
          max = _bigNum3;
        }
        if (_isFunction3(snap3)) {
          return function(n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap3.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
          };
        }
        if (_isArray2(snap3)) {
          return function(n) {
            var i = snap3.length, closest = 0, absDif = _bigNum3, val, dif;
            while (--i > -1) {
              val = snap3[i];
              dif = val - n;
              if (dif < 0) {
                dif = -dif;
              }
              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }
            return snap3[closest];
          };
        }
        return isNaN(snap3) ? function(n) {
          return n;
        } : function() {
          return snap3 * factor;
        };
      }, buildPointSnapFunc = function buildPointSnapFunc2(snap3, minX2, maxX2, minY2, maxY2, radius, factor) {
        radius = radius && radius < _bigNum3 ? radius * radius : _bigNum3;
        if (_isFunction3(snap3)) {
          return function(point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
            point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
            point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
            result = snap3.call(self, point);
            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }
            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }
            if (radius < _bigNum3) {
              dx = point.x - x;
              dy = point.y - y;
              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }
            return point;
          };
        }
        if (_isArray2(snap3)) {
          return function(p) {
            var i = snap3.length, closest = 0, minDist = _bigNum3, x, y, point, dist;
            while (--i > -1) {
              point = snap3[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;
              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }
            return minDist <= radius ? snap3[closest] : p;
          };
        }
        return function(n) {
          return n;
        };
      }, calculateBounds = function calculateBounds2() {
        var bounds, targetBounds, snap3, snapIsRaw;
        hasBounds = false;
        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);
          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }
          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }
          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }
          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }
          hasBounds = true;
        }
        if (vars.liveSnap) {
          snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap3.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap3 : snap3.points, minX, maxX, minY, maxY, snap3.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.x || snap3.left || snap3.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }
              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap3 : snap3.y || snap3.top || snap3.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      }, onThrowComplete = function onThrowComplete2() {
        self.isThrowing = false;
        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      }, onThrowInterrupt = function onThrowInterrupt2() {
        self.isThrowing = false;
      }, animate = function animate2(inertia, forceZeroVelocity) {
        var snap3, snapIsRaw, tween, overshootTolerance;
        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap3 = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
            };
            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }
              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }
              if (snap3.points || _isArray2(snap3) && _isObject3(snap3[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap3.radius;
              }
            }
          }
          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject3(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }
          self.tween = tween = gsap2.to(scrollProxy || target, {
            inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
          });
          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }
            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;
            if (rotationMode) {
              self.endRotation = self.x;
            }
            tween.play(0);
            syncXY(true, true);
            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      }, updateMatrix = function updateMatrix2(shiftStart) {
        var start = matrix, p;
        matrix = getGlobalMatrix(target.parentNode, true);
        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }
        if (matrix.equals(_identityMatrix2)) {
          matrix = null;
        }
      }, recordStartPositions = function recordStartPositions2() {
        var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x, y;
        if (xyMode) {
          gsCache.x = getPropAsNum(xProp, "px") + "px";
          gsCache.y = getPropAsNum(yProp, "px") + "px";
          gsCache.renderTransform();
        }
        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;
        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render5(true);
        }
        innerMatrix = getGlobalMatrix(target);
        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening2()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }
          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp3] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG3;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }
        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }
          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }
        self.startX = startElementX = _round5(startElementX);
        self.startY = startElementY = _round5(startElementY);
      }, isTweening2 = function isTweening3() {
        return self.tween && self.tween.isActive();
      }, removePlaceholder = function removePlaceholder2() {
        if (_placeholderDiv.parentNode && !isTweening2() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      }, onPress = function onPress2(e, force) {
        var i;
        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        interrupted = isTweening2();
        dragged = false;
        self.pointerEvent = e;
        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
          _addListener(touchEventTarget, "touchend", onRelease);
          _addListener(touchEventTarget, "touchmove", onMove);
          _addListener(touchEventTarget, "touchcancel", onRelease);
          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;
          _addListener(ownerDoc, "mousemove", onMove);
        }
        touchDragAxis = null;
        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);
          e && e.target && _addListener(e.target, "mouseup", onRelease);
        }
        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
        if (isClicking) {
          _addListener(e.target, "change", onRelease);
          _dispatchEvent(self, "pressInit", "onPressInit");
          _dispatchEvent(self, "press", "onPress");
          _setSelectable(triggers, true);
          isPreventingDefault = false;
          return;
        }
        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
        if (isPreventingDefault) {
          _preventDefault(e);
          _addListener(_win4, "touchforcechange", _preventDefault);
        }
        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }
        _dragCount++;
        _addToRenderQueue(render5);
        startPointerY = self.pointerY = e.pageY;
        startPointerX = self.pointerX = e.pageX;
        _dispatchEvent(self, "pressInit", "onPressInit");
        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }
        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }
        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap2.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap2.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;
        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable2.zIndex++;
        }
        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);
        if (vars.cursor !== false || vars.activeCursor) {
          i = triggers.length;
          while (--i > -1) {
            gsap2.set(triggers[i], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }
        _dispatchEvent(self, "press", "onPress");
      }, onMove = function onMove2(e) {
        var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        self.pointerEvent = e;
        touches = e.changedTouches;
        if (touches) {
          e = touches[0];
          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;
            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
            }
            if (i < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX - (isFixed ? _getDocScrollLeft3(ownerDoc) : 0);
          _point1.y = e.pageY - (isFixed ? _getDocScrollTop3(ownerDoc) : 0);
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);
          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";
            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win4, "touchforcechange", _preventDefault);
            }
            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction3(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }
            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }
        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }
        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }
        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
      }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;
        if (isFixed) {
          pointerX -= _getDocScrollLeft3(ownerDoc);
          pointerY -= _getDocScrollTop3(ownerDoc);
        }
        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG3;
          dif = self.y - y;
          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }
          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }
          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;
          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }
          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }
          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;
            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
              if (temp && _isFunction3(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }
            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }
          x = _round5(startElementX + xChange * dragTolerance);
          y = _round5(startElementY + yChange * dragTolerance);
        }
        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round5(temp.x);
            y = _round5(temp.y);
          }
          if (snapX) {
            x = _round5(snapX(x));
          }
          if (snapY) {
            y = _round5(snapY(y));
          }
        }
        if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }
          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }
        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }
            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }
          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = dragged = true;
              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      }, onRelease = function onRelease2(e, force) {
        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        self.isPressed = false;
        var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap2.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease2);
          _removeListener(touchEventTarget, "touchmove", onMove);
          _removeListener(touchEventTarget, "touchcancel", onRelease2);
          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeListener(_win4, "touchforcechange", _preventDefault);
        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease2);
          e && e.target && _removeListener(e.target, "mouseup", onRelease2);
        }
        dirty = false;
        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }
        _removeFromRenderQueue(render5);
        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease2);
            self.pointerEvent = originalEvent;
          }
          _setSelectable(triggers, false);
          _dispatchEvent(self, "release", "onRelease");
          _dispatchEvent(self, "click", "onClick");
          isClicking = false;
          return;
        }
        i = triggers.length;
        while (--i > -1) {
          _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
        }
        _dragCount--;
        if (e) {
          touches = e.changedTouches;
          if (touches) {
            e = touches[0];
            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;
              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
              }
              if (i < 0 && !force) {
                return;
              }
            }
          }
          self.pointerEvent = originalEvent;
          self.pointerX = e.pageX;
          self.pointerY = e.pageY;
        }
        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;
          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }
          _dispatchEvent(self, "release", "onRelease");
          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");
            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }
            eventTarget = originalEvent.target || target;
            clickTime = _getTime();
            syntheticClick = function syntheticClick2() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };
            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap2.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);
          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;
            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }
          _dispatchEvent(self, "release", "onRelease");
        }
        isTweening2() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      }, updateScroll = function updateScroll2(e) {
        if (e && self.isDragging && !scrollProxy) {
          var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }
            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      }, onClick = function onClick2(e) {
        var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }
        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }
          clickDispatch = clickTime;
          return;
        }
        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }
        if (!recentlyClicked && !recentlyDragged && !dragged) {
          e && e.target && (self.pointerEvent = e);
          _dispatchEvent(self, "click", "onClick");
        }
      }, localizePoint = function localizePoint2(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };
      old = Draggable2.get(target);
      old && old.kill();
      _this2.startDrag = function(event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);
        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }
        if (!self.isDragging) {
          self.isDragging = dragged = true;
          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };
      _this2.drag = onMove;
      _this2.endDrag = function(e) {
        return onRelease(e || self.pointerEvent, true);
      };
      _this2.timeSinceDrag = function() {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
      };
      _this2.timeSinceClick = function() {
        return (_getTime() - clickTime) / 1e3;
      };
      _this2.hitTest = function(target2, threshold) {
        return Draggable2.hitTest(self.target, target2, threshold);
      };
      _this2.getDirection = function(from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject3(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }
        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }
            direction += yChange < 0 ? "up" : "down";
          }
        }
        return direction;
      };
      _this2.applyBounds = function(newBounds, sticky) {
        var x, y, forceZeroVelocity, e, parent, isRoot;
        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }
        syncXY(true);
        calculateBounds();
        if (hasBounds && !isTweening2()) {
          x = self.x;
          y = self.y;
          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }
          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }
          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;
            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }
            dirty = true;
            render5(true);
            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);
              e = target;
              _windowProxy.scrollTop = _win4.pageYOffset != null ? _win4.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win4.pageXOffset != null ? _win4.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;
                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }
                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }
                e = parent;
              }
            }
          }
          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }
        return self;
      };
      _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
        if (sticky && self.isPressed) {
          var m = getGlobalMatrix(target), p = innerMatrix.apply({
            x: self.x - startElementX,
            y: self.y - startElementY
          }), m2 = getGlobalMatrix(target.parentNode, true);
          m2.apply({
            x: m.e - p.x,
            y: m.f - p.y
          }, p);
          self.x -= p.x - m2.e;
          self.y -= p.y - m2.f;
          render5(true);
          recordStartPositions();
        }
        var x = self.x, y = self.y;
        updateMatrix(!sticky);
        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render5(true);
          syncXY(true);
        }
        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render5(true);
        }
        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }
        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);
          checkAutoScrollBounds = self.isDragging;
          render5(true);
          _removeScrollListener(target, updateScroll);
          _addScrollListener(target, updateScroll);
        }
        return self;
      };
      _this2.enable = function(type2) {
        var setVars = {
          lazy: true
        }, id, i, trigger;
        if (vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }
        if (gsap2.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
          i = triggers.length;
          while (--i > -1) {
            trigger = triggers[i];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);
            _addListener(trigger, "touchstart", onPress);
            _addListener(trigger, "click", onClick, true);
            gsap2.set(trigger, setVars);
            if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
              gsap2.set(trigger.ownerSVGElement, {
                touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }
            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, false);
        }
        _addScrollListener(target, updateScroll);
        enabled = true;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }
        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;
        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }
        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };
      _this2.disable = function(type2) {
        var dragging = self.isDragging, i = triggers.length, trigger;
        while (--i > -1) {
          _setStyle(triggers[i], "cursor", null);
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);
          i = triggers.length;
          while (--i > -1) {
            trigger = triggers[i];
            _setStyle(trigger, "touchCallout", null);
            _removeListener(trigger, "mousedown", onPress);
            _removeListener(trigger, "touchstart", onPress);
            _removeListener(trigger, "click", onClick, true);
            _removeListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, true);
          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);
            _removeListener(touchEventTarget, "touchend", onRelease);
            _removeListener(touchEventTarget, "touchmove", onMove);
          }
          _removeListener(ownerDoc, "mouseup", onRelease);
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeScrollListener(target, updateScroll);
        enabled = false;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
          self.tween && self.tween.kill();
        }
        scrollProxy && scrollProxy.disable();
        _removeFromRenderQueue(render5);
        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };
      _this2.enabled = function(value, type2) {
        return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
      };
      _this2.kill = function() {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap2.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };
      _this2.revert = function() {
        this.kill();
        this.styles && this.styles.revert();
      };
      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }
      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }
        if (allowY) {
          killProps[yProp] = 1;
        }
      }
      gsCache.force3D = "force3D" in vars ? vars.force3D : true;
      _context2(_assertThisInitialized2(_this2));
      _this2.enable();
      return _this2;
    }
    Draggable2.register = function register3(core) {
      gsap2 = core;
      _initCore3();
    };
    Draggable2.create = function create(targets, vars) {
      _coreInitted2 || _initCore3(true);
      return _toArray(targets).map(function(target) {
        return new Draggable2(target, vars);
      });
    };
    Draggable2.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };
    Draggable2.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1e3;
    };
    Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }
      var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
      if (isOutside || !threshold) {
        return !isOutside;
      }
      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }
      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }
      return overlap.width > threshold && overlap.height > threshold;
    };
    return Draggable2;
  }(EventDispatcher);
  _setDefaults3(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });
  Draggable.zIndex = 1e3;
  Draggable.version = "3.12.2";
  _getGSAP() && gsap2.registerPlugin(Draggable);

  // node_modules/gsap/InertiaPlugin.js
  init_live_reload();

  // node_modules/gsap/utils/VelocityTracker.js
  init_live_reload();
  var gsap3;
  var _coreInitted3;
  var _toArray2;
  var _getUnit;
  var _first;
  var _ticker2;
  var _time1;
  var _time2;
  var _getCache3;
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap);
  };
  var _lookup2 = {};
  var _round7 = function _round8(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _getID = function _getID2(target) {
    return _getCache3(target).id;
  };
  var _getByTarget = function _getByTarget2(target) {
    return _lookup2[_getID(typeof target === "string" ? _toArray2(target)[0] : target)];
  };
  var _onTick = function _onTick2(time) {
    var pt = _first, val;
    if (time - _time1 >= 0.05) {
      _time2 = _time1;
      _time1 = time;
      while (pt) {
        val = pt.g(pt.t, pt.p);
        if (val !== pt.v1 || time - pt.t1 > 0.2) {
          pt.v2 = pt.v1;
          pt.v1 = val;
          pt.t2 = pt.t1;
          pt.t1 = time;
        }
        pt = pt._next;
      }
    }
  };
  var _types = {
    deg: 360,
    rad: Math.PI * 2
  };
  var _initCore5 = function _initCore6() {
    gsap3 = _getGSAP3();
    if (gsap3) {
      _toArray2 = gsap3.utils.toArray;
      _getUnit = gsap3.utils.getUnit;
      _getCache3 = gsap3.core.getCache;
      _ticker2 = gsap3.ticker;
      _coreInitted3 = 1;
    }
  };
  var PropTracker = function PropTracker2(target, property, type, next) {
    this.t = target;
    this.p = property;
    this.g = target._gsap.get;
    this.rCap = _types[type || _getUnit(this.g(target, property))];
    this.v1 = this.v2 = 0;
    this.t1 = this.t2 = _ticker2.time;
    if (next) {
      this._next = next;
      next._prev = this;
    }
  };
  var VelocityTracker = /* @__PURE__ */ function() {
    function VelocityTracker2(target, property) {
      if (!_coreInitted3) {
        _initCore5();
      }
      this.target = _toArray2(target)[0];
      _lookup2[_getID(this.target)] = this;
      this._props = {};
      property && this.add(property);
    }
    VelocityTracker2.register = function register3(core) {
      gsap3 = core;
      _initCore5();
    };
    var _proto = VelocityTracker2.prototype;
    _proto.get = function get(property, skipRecentTick) {
      var pt = this._props[property] || console.warn("Not tracking " + property + " velocity."), val, dif, rotationCap;
      val = parseFloat(skipRecentTick ? pt.v1 : pt.g(pt.t, pt.p));
      dif = val - parseFloat(pt.v2);
      rotationCap = pt.rCap;
      if (rotationCap) {
        dif = dif % rotationCap;
        if (dif !== dif % (rotationCap / 2)) {
          dif = dif < 0 ? dif + rotationCap : dif - rotationCap;
        }
      }
      return _round7(dif / ((skipRecentTick ? pt.t1 : _ticker2.time) - pt.t2));
    };
    _proto.getAll = function getAll() {
      var result = {}, props = this._props, p;
      for (p in props) {
        result[p] = this.get(p);
      }
      return result;
    };
    _proto.isTracking = function isTracking(property) {
      return property in this._props;
    };
    _proto.add = function add(property, type) {
      if (!(property in this._props)) {
        if (!_first) {
          _ticker2.add(_onTick);
          _time1 = _time2 = _ticker2.time;
        }
        _first = this._props[property] = new PropTracker(this.target, property, type, _first);
      }
    };
    _proto.remove = function remove(property) {
      var pt = this._props[property], prev, next;
      if (pt) {
        prev = pt._prev;
        next = pt._next;
        if (prev) {
          prev._next = next;
        }
        if (next) {
          next._prev = prev;
        } else if (_first === pt) {
          _ticker2.remove(_onTick);
          _first = 0;
        }
        delete this._props[property];
      }
    };
    _proto.kill = function kill2(shallow) {
      for (var p in this._props) {
        this.remove(p);
      }
      if (!shallow) {
        delete _lookup2[_getID(this.target)];
      }
    };
    VelocityTracker2.track = function track(targets, properties, types) {
      if (!_coreInitted3) {
        _initCore5();
      }
      var result = [], targs = _toArray2(targets), a = properties.split(","), t = (types || "").split(","), i = targs.length, tracker, j;
      while (i--) {
        tracker = _getByTarget(targs[i]) || new VelocityTracker2(targs[i]);
        j = a.length;
        while (j--) {
          tracker.add(a[j], t[j] || t[0]);
        }
        result.push(tracker);
      }
      return result;
    };
    VelocityTracker2.untrack = function untrack(targets, properties) {
      var props = (properties || "").split(",");
      _toArray2(targets).forEach(function(target) {
        var tracker = _getByTarget(target);
        if (tracker) {
          if (!props.length) {
            tracker.kill(1);
          } else {
            props.forEach(function(p) {
              return tracker.remove(p);
            });
          }
        }
      });
    };
    VelocityTracker2.isTracking = function isTracking(target, property) {
      var tracker = _getByTarget(target);
      return tracker && tracker.isTracking(property);
    };
    VelocityTracker2.getVelocity = function getVelocity(target, property) {
      var tracker = _getByTarget(target);
      return !tracker || !tracker.isTracking(property) ? console.warn("Not tracking velocity of " + property) : tracker.get(property);
    };
    return VelocityTracker2;
  }();
  VelocityTracker.getByTarget = _getByTarget;
  _getGSAP3() && gsap3.registerPlugin(VelocityTracker);

  // node_modules/gsap/InertiaPlugin.js
  var gsap4;
  var _coreInitted4;
  var _parseEase3;
  var _toArray3;
  var _power3;
  var _config2;
  var _getUnit2;
  var PropTween2;
  var _getCache4;
  var _checkPointRatio;
  var _clamp3;
  var _processingVars;
  var _getStyleSaver4;
  var _reverting3;
  var _getTracker = VelocityTracker.getByTarget;
  var _getGSAP5 = function _getGSAP6() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _isString5 = function _isString6(value) {
    return typeof value === "string";
  };
  var _isNumber5 = function _isNumber6(value) {
    return typeof value === "number";
  };
  var _isObject5 = function _isObject6(value) {
    return typeof value === "object";
  };
  var _isFunction5 = function _isFunction6(value) {
    return typeof value === "function";
  };
  var _bonusValidated = 1;
  var _isArray3 = Array.isArray;
  var _emptyFunc5 = function _emptyFunc6(p) {
    return p;
  };
  var _bigNum4 = 1e10;
  var _tinyNum2 = 1 / _bigNum4;
  var _checkPoint = 0.05;
  var _round9 = function _round10(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _extend3 = function _extend4(obj, defaults2, exclude) {
    for (var p in defaults2) {
      if (!(p in obj) && p !== exclude) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _deepClone = function _deepClone2(obj) {
    var copy = {}, p, v;
    for (p in obj) {
      copy[p] = _isObject5(v = obj[p]) && !_isArray3(v) ? _deepClone2(v) : v;
    }
    return copy;
  };
  var _getClosest = function _getClosest2(n, values, max, min, radius) {
    var i = values.length, closest = 0, absDif = _bigNum4, val, dif, p, dist;
    if (_isObject5(n)) {
      while (i--) {
        val = values[i];
        dif = 0;
        for (p in n) {
          dist = val[p] - n[p];
          dif += dist * dist;
        }
        if (dif < absDif) {
          closest = i;
          absDif = dif;
        }
      }
      if ((radius || _bigNum4) < _bigNum4 && radius < Math.sqrt(absDif)) {
        return n;
      }
    } else {
      while (i--) {
        val = values[i];
        dif = val - n;
        if (dif < 0) {
          dif = -dif;
        }
        if (dif < absDif && val >= min && val <= max) {
          closest = i;
          absDif = dif;
        }
      }
    }
    return values[closest];
  };
  var _parseEnd = function _parseEnd2(curProp, end, max, min, name, radius, velocity) {
    if (curProp.end === "auto") {
      return curProp;
    }
    var endVar = curProp.end, adjustedEnd, p;
    max = isNaN(max) ? _bigNum4 : max;
    min = isNaN(min) ? -_bigNum4 : min;
    if (_isObject5(end)) {
      adjustedEnd = end.calculated ? end : (_isFunction5(endVar) ? endVar(end, velocity) : _getClosest(end, endVar, max, min, radius)) || end;
      if (!end.calculated) {
        for (p in adjustedEnd) {
          end[p] = adjustedEnd[p];
        }
        end.calculated = true;
      }
      adjustedEnd = adjustedEnd[name];
    } else {
      adjustedEnd = _isFunction5(endVar) ? endVar(end, velocity) : _isArray3(endVar) ? _getClosest(end, endVar, max, min, radius) : parseFloat(endVar);
    }
    if (adjustedEnd > max) {
      adjustedEnd = max;
    } else if (adjustedEnd < min) {
      adjustedEnd = min;
    }
    return {
      max: adjustedEnd,
      min: adjustedEnd,
      unitFactor: curProp.unitFactor
    };
  };
  var _getNumOrDefault = function _getNumOrDefault2(vars, property, defaultValue) {
    return isNaN(vars[property]) ? defaultValue : +vars[property];
  };
  var _calculateChange = function _calculateChange2(velocity, duration) {
    return duration * _checkPoint * velocity / _checkPointRatio;
  };
  var _calculateDuration = function _calculateDuration2(start, end, velocity) {
    return Math.abs((end - start) * _checkPointRatio / velocity / _checkPoint);
  };
  var _reservedProps2 = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
  };
  var _processLinkedProps = function _processLinkedProps2(target, vars, getVal, resistance) {
    if (vars.linkedProps) {
      var linkedPropNames = vars.linkedProps.split(","), linkedProps = {}, i, p, curProp, curVelocity, tracker, curDuration;
      for (i = 0; i < linkedPropNames.length; i++) {
        p = linkedPropNames[i];
        curProp = vars[p];
        if (curProp) {
          if (_isNumber5(curProp.velocity)) {
            curVelocity = curProp.velocity;
          } else {
            tracker = tracker || _getTracker(target);
            curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
          }
          curDuration = Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance));
          linkedProps[p] = parseFloat(getVal(target, p)) + _calculateChange(curVelocity, curDuration);
        }
      }
      return linkedProps;
    }
  };
  var _calculateTweenDuration = function _calculateTweenDuration2(target, vars, maxDuration, minDuration, overshootTolerance, recordEnd) {
    if (maxDuration === void 0) {
      maxDuration = 10;
    }
    if (minDuration === void 0) {
      minDuration = 0.2;
    }
    if (overshootTolerance === void 0) {
      overshootTolerance = 1;
    }
    if (recordEnd === void 0) {
      recordEnd = 0;
    }
    _isString5(target) && (target = _toArray3(target)[0]);
    if (!target) {
      return 0;
    }
    var duration = 0, clippedDuration = _bigNum4, inertiaVars = vars.inertia || vars, getVal = _getCache4(target).get, resistance = _getNumOrDefault(inertiaVars, "resistance", _config2.resistance), p, curProp, curDuration, curVelocity, curVal, end, curClippedDuration, tracker, unitFactor, linkedProps;
    linkedProps = _processLinkedProps(target, inertiaVars, getVal, resistance);
    for (p in inertiaVars) {
      if (!_reservedProps2[p]) {
        curProp = inertiaVars[p];
        if (!_isObject5(curProp)) {
          tracker = tracker || _getTracker(target);
          if (tracker && tracker.isTracking(p)) {
            curProp = _isNumber5(curProp) ? {
              velocity: curProp
            } : {
              velocity: tracker.get(p)
            };
          } else {
            curVelocity = +curProp || 0;
            curDuration = Math.abs(curVelocity / resistance);
          }
        }
        if (_isObject5(curProp)) {
          if (_isNumber5(curProp.velocity)) {
            curVelocity = curProp.velocity;
          } else {
            tracker = tracker || _getTracker(target);
            curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
          }
          curDuration = _clamp3(minDuration, maxDuration, Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance)));
          curVal = parseFloat(getVal(target, p)) || 0;
          end = curVal + _calculateChange(curVelocity, curDuration);
          if ("end" in curProp) {
            curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, inertiaVars.radius, curVelocity);
            if (recordEnd) {
              _processingVars === vars && (_processingVars = inertiaVars = _deepClone(vars));
              inertiaVars[p] = _extend3(curProp, inertiaVars[p], "end");
            }
          }
          if ("max" in curProp && end > +curProp.max + _tinyNum2) {
            unitFactor = curProp.unitFactor || _config2.unitFactors[p] || 1;
            curClippedDuration = curVal > curProp.max && curProp.min !== curProp.max || curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.max, curVelocity);
            if (curClippedDuration + overshootTolerance < clippedDuration) {
              clippedDuration = curClippedDuration + overshootTolerance;
            }
          } else if ("min" in curProp && end < +curProp.min - _tinyNum2) {
            unitFactor = curProp.unitFactor || _config2.unitFactors[p] || 1;
            curClippedDuration = curVal < curProp.min && curProp.min !== curProp.max || curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.min, curVelocity);
            if (curClippedDuration + overshootTolerance < clippedDuration) {
              clippedDuration = curClippedDuration + overshootTolerance;
            }
          }
          curClippedDuration > duration && (duration = curClippedDuration);
        }
        curDuration > duration && (duration = curDuration);
      }
    }
    duration > clippedDuration && (duration = clippedDuration);
    return duration > maxDuration ? maxDuration : duration < minDuration ? minDuration : duration;
  };
  var _initCore7 = function _initCore8() {
    gsap4 = _getGSAP5();
    if (gsap4) {
      _parseEase3 = gsap4.parseEase;
      _toArray3 = gsap4.utils.toArray;
      _getUnit2 = gsap4.utils.getUnit;
      _getCache4 = gsap4.core.getCache;
      _clamp3 = gsap4.utils.clamp;
      _getStyleSaver4 = gsap4.core.getStyleSaver;
      _reverting3 = gsap4.core.reverting || function() {
      };
      _power3 = _parseEase3("power3");
      _checkPointRatio = _power3(0.05);
      PropTween2 = gsap4.core.PropTween;
      gsap4.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3
        }
      });
      _config2 = gsap4.config();
      gsap4.registerPlugin(VelocityTracker);
      _coreInitted4 = 1;
    }
  };
  var InertiaPlugin2 = {
    version: "3.12.2",
    name: "inertia",
    register: function register(core) {
      gsap4 = core;
      _initCore7();
    },
    init: function init4(target, vars, tween, index, targets) {
      _coreInitted4 || _initCore7();
      var tracker = _getTracker(target);
      if (vars === "auto") {
        if (!tracker) {
          console.warn("No inertia tracking on " + target + ". InertiaPlugin.track(target) first.");
          return;
        }
        vars = tracker.getAll();
      }
      this.styles = _getStyleSaver4 && typeof target.style === "object" && _getStyleSaver4(target);
      this.target = target;
      this.tween = tween;
      _processingVars = vars;
      var cache = target._gsap, getVal = cache.get, dur = vars.duration, durIsObj = _isObject5(dur), preventOvershoot = vars.preventOvershoot || durIsObj && dur.overshoot === 0, resistance = _getNumOrDefault(vars, "resistance", _config2.resistance), duration = _isNumber5(dur) ? dur : _calculateTweenDuration(target, vars, durIsObj && dur.max || 10, durIsObj && dur.min || 0.2, durIsObj && "overshoot" in dur ? +dur.overshoot : preventOvershoot ? 0 : 1, true), p, curProp, curVal, unit, velocity, change1, end, change2, linkedProps;
      vars = _processingVars;
      _processingVars = 0;
      linkedProps = _processLinkedProps(target, vars, getVal, resistance);
      for (p in vars) {
        if (!_reservedProps2[p]) {
          curProp = vars[p];
          _isFunction5(curProp) && (curProp = curProp(index, target, targets));
          if (_isNumber5(curProp)) {
            velocity = curProp;
          } else if (_isObject5(curProp) && !isNaN(curProp.velocity)) {
            velocity = +curProp.velocity;
          } else {
            if (tracker && tracker.isTracking(p)) {
              velocity = tracker.get(p);
            } else {
              console.warn("ERROR: No velocity was defined for " + target + " property: " + p);
            }
          }
          change1 = _calculateChange(velocity, duration);
          change2 = 0;
          curVal = getVal(target, p);
          unit = _getUnit2(curVal);
          curVal = parseFloat(curVal);
          if (_isObject5(curProp)) {
            end = curVal + change1;
            if ("end" in curProp) {
              curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, vars.radius, velocity);
            }
            if ("max" in curProp && +curProp.max < end) {
              if (preventOvershoot || curProp.preventOvershoot) {
                change1 = curProp.max - curVal;
              } else {
                change2 = curProp.max - curVal - change1;
              }
            } else if ("min" in curProp && +curProp.min > end) {
              if (preventOvershoot || curProp.preventOvershoot) {
                change1 = curProp.min - curVal;
              } else {
                change2 = curProp.min - curVal - change1;
              }
            }
          }
          this._props.push(p);
          this.styles && this.styles.save(p);
          this._pt = new PropTween2(this._pt, target, p, curVal, 0, _emptyFunc5, 0, cache.set(target, p, this));
          this._pt.u = unit || 0;
          this._pt.c1 = change1;
          this._pt.c2 = change2;
        }
      }
      tween.duration(duration);
      return _bonusValidated;
    },
    render: function render3(ratio, data) {
      var pt = data._pt;
      ratio = _power3(data.tween._time / data.tween._dur);
      if (ratio || !_reverting3()) {
        while (pt) {
          pt.set(pt.t, pt.p, _round9(pt.s + pt.c1 * ratio + pt.c2 * ratio * ratio) + pt.u, pt.d, ratio);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    }
  };
  "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(name) {
    return InertiaPlugin2[name] = VelocityTracker[name];
  });
  _getGSAP5() && gsap4.registerPlugin(InertiaPlugin2);

  // node_modules/gsap/MorphSVGPlugin.js
  init_live_reload();
  var gsap5;
  var _toArray4;
  var _lastLinkedAnchor;
  var _doc5;
  var _coreInitted5;
  var PluginClass;
  var _getGSAP7 = function _getGSAP8() {
    return gsap5 || typeof window !== "undefined" && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _isFunction7 = function _isFunction8(value) {
    return typeof value === "function";
  };
  var _atan22 = Math.atan2;
  var _cos3 = Math.cos;
  var _sin3 = Math.sin;
  var _sqrt3 = Math.sqrt;
  var _PI = Math.PI;
  var _2PI2 = _PI * 2;
  var _angleMin = _PI * 0.3;
  var _angleMax = _PI * 0.7;
  var _bigNum5 = 1e20;
  var _numExp2 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi;
  var _selectorExp2 = /(^[#\.][a-z]|[a-y][a-z])/i;
  var _commands = /[achlmqstvz]/i;
  var _log = function _log2(message) {
    return console && console.warn(message);
  };
  var _bonusValidated2 = 1;
  var _getAverageXY = function _getAverageXY2(segment) {
    var l = segment.length, x = 0, y = 0, i;
    for (i = 0; i < l; i++) {
      x += segment[i++];
      y += segment[i];
    }
    return [x / (l / 2), y / (l / 2)];
  };
  var _getSize = function _getSize2(segment) {
    var l = segment.length, xMax = segment[0], xMin = xMax, yMax = segment[1], yMin = yMax, x, y, i;
    for (i = 6; i < l; i += 6) {
      x = segment[i];
      y = segment[i + 1];
      if (x > xMax) {
        xMax = x;
      } else if (x < xMin) {
        xMin = x;
      }
      if (y > yMax) {
        yMax = y;
      } else if (y < yMin) {
        yMin = y;
      }
    }
    segment.centerX = (xMax + xMin) / 2;
    segment.centerY = (yMax + yMin) / 2;
    return segment.size = (xMax - xMin) * (yMax - yMin);
  };
  var _getTotalSize = function _getTotalSize2(rawPath, samplesPerBezier) {
    if (samplesPerBezier === void 0) {
      samplesPerBezier = 3;
    }
    var j = rawPath.length, xMax = rawPath[0][0], xMin = xMax, yMax = rawPath[0][1], yMin = yMax, inc = 1 / samplesPerBezier, l, x, y, i, segment, k, t, inv, x1, y1, x2, x3, x4, y2, y3, y4;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 6; i < l; i += 6) {
        x1 = segment[i];
        y1 = segment[i + 1];
        x2 = segment[i + 2] - x1;
        y2 = segment[i + 3] - y1;
        x3 = segment[i + 4] - x1;
        y3 = segment[i + 5] - y1;
        x4 = segment[i + 6] - x1;
        y4 = segment[i + 7] - y1;
        k = samplesPerBezier;
        while (--k > -1) {
          t = inc * k;
          inv = 1 - t;
          x = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t + x1;
          y = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t + y1;
          if (x > xMax) {
            xMax = x;
          } else if (x < xMin) {
            xMin = x;
          }
          if (y > yMax) {
            yMax = y;
          } else if (y < yMin) {
            yMin = y;
          }
        }
      }
    }
    rawPath.centerX = (xMax + xMin) / 2;
    rawPath.centerY = (yMax + yMin) / 2;
    rawPath.left = xMin;
    rawPath.width = xMax - xMin;
    rawPath.top = yMin;
    rawPath.height = yMax - yMin;
    return rawPath.size = (xMax - xMin) * (yMax - yMin);
  };
  var _sortByComplexity = function _sortByComplexity2(a, b) {
    return b.length - a.length;
  };
  var _sortBySize = function _sortBySize2(a, b) {
    var sizeA = a.size || _getSize(a), sizeB = b.size || _getSize(b);
    return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA;
  };
  var _offsetSegment = function _offsetSegment2(segment, shapeIndex) {
    var a = segment.slice(0), l = segment.length, wrap3 = l - 2, i, index;
    shapeIndex = shapeIndex | 0;
    for (i = 0; i < l; i++) {
      index = (i + shapeIndex) % wrap3;
      segment[i++] = a[index];
      segment[i] = a[index + 1];
    }
  };
  var _getTotalMovement = function _getTotalMovement2(sb, eb, shapeIndex, offsetX, offsetY) {
    var l = sb.length, d = 0, wrap3 = l - 2, index, i, x, y;
    shapeIndex *= 6;
    for (i = 0; i < l; i += 6) {
      index = (i + shapeIndex) % wrap3;
      y = sb[index] - (eb[i] - offsetX);
      x = sb[index + 1] - (eb[i + 1] - offsetY);
      d += _sqrt3(x * x + y * y);
    }
    return d;
  };
  var _getClosestShapeIndex = function _getClosestShapeIndex2(sb, eb, checkReverse) {
    var l = sb.length, sCenter = _getAverageXY(sb), eCenter = _getAverageXY(eb), offsetX = eCenter[0] - sCenter[0], offsetY = eCenter[1] - sCenter[1], min = _getTotalMovement(sb, eb, 0, offsetX, offsetY), minIndex = 0, copy, d, i;
    for (i = 6; i < l; i += 6) {
      d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);
      if (d < min) {
        min = d;
        minIndex = i;
      }
    }
    if (checkReverse) {
      copy = sb.slice(0);
      reverseSegment(copy);
      for (i = 6; i < l; i += 6) {
        d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);
        if (d < min) {
          min = d;
          minIndex = -i;
        }
      }
    }
    return minIndex / 6;
  };
  var _getClosestAnchor = function _getClosestAnchor2(rawPath, x, y) {
    var j = rawPath.length, closestDistance = _bigNum5, closestX = 0, closestY = 0, segment, dx, dy, d, i, l;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 0; i < l; i += 6) {
        dx = segment[i] - x;
        dy = segment[i + 1] - y;
        d = _sqrt3(dx * dx + dy * dy);
        if (d < closestDistance) {
          closestDistance = d;
          closestX = segment[i];
          closestY = segment[i + 1];
        }
      }
    }
    return [closestX, closestY];
  };
  var _getClosestSegment = function _getClosestSegment2(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
    var l = pool.length, index = 0, minSize = Math.min(bezier.size || _getSize(bezier), pool[startIndex].size || _getSize(pool[startIndex])) * sortRatio, min = _bigNum5, cx = bezier.centerX + offsetX, cy = bezier.centerY + offsetY, size, i, dx, dy, d;
    for (i = startIndex; i < l; i++) {
      size = pool[i].size || _getSize(pool[i]);
      if (size < minSize) {
        break;
      }
      dx = pool[i].centerX - cx;
      dy = pool[i].centerY - cy;
      d = _sqrt3(dx * dx + dy * dy);
      if (d < min) {
        index = i;
        min = d;
      }
    }
    d = pool[index];
    pool.splice(index, 1);
    return d;
  };
  var _subdivideSegmentQty = function _subdivideSegmentQty2(segment, quantity) {
    var tally = 0, max = 0.999999, l = segment.length, newPointsPerSegment = quantity / ((l - 2) / 6), ax, ay, cp1x, cp1y, cp2x, cp2y, bx, by, x1, y1, x2, y2, i, t;
    for (i = 2; i < l; i += 6) {
      tally += newPointsPerSegment;
      while (tally > max) {
        ax = segment[i - 2];
        ay = segment[i - 1];
        cp1x = segment[i];
        cp1y = segment[i + 1];
        cp2x = segment[i + 2];
        cp2y = segment[i + 3];
        bx = segment[i + 4];
        by = segment[i + 5];
        t = 1 / ((Math.floor(tally) || 1) + 1);
        x1 = ax + (cp1x - ax) * t;
        x2 = cp1x + (cp2x - cp1x) * t;
        x1 += (x2 - x1) * t;
        x2 += (cp2x + (bx - cp2x) * t - x2) * t;
        y1 = ay + (cp1y - ay) * t;
        y2 = cp1y + (cp2y - cp1y) * t;
        y1 += (y2 - y1) * t;
        y2 += (cp2y + (by - cp2y) * t - y2) * t;
        segment.splice(
          i,
          4,
          ax + (cp1x - ax) * t,
          //first control point
          ay + (cp1y - ay) * t,
          x1,
          //second control point
          y1,
          x1 + (x2 - x1) * t,
          //new fabricated anchor on line
          y1 + (y2 - y1) * t,
          x2,
          //third control point
          y2,
          cp2x + (bx - cp2x) * t,
          //fourth control point
          cp2y + (by - cp2y) * t
        );
        i += 6;
        l += 6;
        tally--;
      }
    }
    return segment;
  };
  var _equalizeSegmentQuantity = function _equalizeSegmentQuantity2(start, end, shapeIndex, map, fillSafe) {
    var dif = end.length - start.length, longer = dif > 0 ? end : start, shorter = dif > 0 ? start : end, added = 0, sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize, sortRatio = map === "position" ? 0 : typeof map === "number" ? map : 0.8, i = shorter.length, shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex], reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0, log = shapeIndex === "log", eb, sb, b, x, y, offsetX, offsetY;
    if (!shorter[0]) {
      return;
    }
    if (longer.length > 1) {
      start.sort(sortMethod);
      end.sort(sortMethod);
      offsetX = longer.size || _getTotalSize(longer);
      offsetX = shorter.size || _getTotalSize(shorter);
      offsetX = longer.centerX - shorter.centerX;
      offsetY = longer.centerY - shorter.centerY;
      if (sortMethod === _sortBySize) {
        for (i = 0; i < shorter.length; i++) {
          longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
        }
      }
    }
    if (dif) {
      if (dif < 0) {
        dif = -dif;
      }
      if (longer[0].length > shorter[0].length) {
        _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
      }
      i = shorter.length;
      while (added < dif) {
        x = longer[i].size || _getSize(longer[i]);
        b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
        x = b[0];
        y = b[1];
        shorter[i++] = [x, y, x, y, x, y, x, y];
        shorter.totalPoints += 8;
        added++;
      }
    }
    for (i = 0; i < start.length; i++) {
      eb = end[i];
      sb = start[i];
      dif = eb.length - sb.length;
      if (dif < 0) {
        _subdivideSegmentQty(eb, -dif / 6 | 0);
      } else if (dif > 0) {
        _subdivideSegmentQty(sb, dif / 6 | 0);
      }
      if (reverse && fillSafe !== false && !sb.reversed) {
        reverseSegment(sb);
      }
      shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";
      if (shapeIndex) {
        if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < 0.5 && Math.abs(sb[1] - sb[sb.length - 1]) < 0.5) {
          if (shapeIndex === "auto" || shapeIndex === "log") {
            shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);
            if (shapeIndex < 0) {
              reverse = true;
              reverseSegment(sb);
              shapeIndex = -shapeIndex;
            }
            _offsetSegment(sb, shapeIndex * 6);
          } else if (shapeIndex !== "reverse") {
            if (i && shapeIndex < 0) {
              reverseSegment(sb);
            }
            _offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
          }
        } else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
          reverseSegment(sb);
          shapeIndices[i] = -1;
          reverse = true;
        } else if (shapeIndex === "auto") {
          shapeIndices[i] = 0;
        } else if (shapeIndex === "reverse") {
          shapeIndices[i] = -1;
        }
        if (sb.closed !== eb.closed) {
          sb.closed = eb.closed = false;
        }
      }
    }
    log && _log("shapeIndex:[" + shapeIndices.join(",") + "]");
    start.shapeIndex = shapeIndices;
    return shapeIndices;
  };
  var _pathFilter = function _pathFilter2(a, shapeIndex, map, precompile, fillSafe) {
    var start = stringToRawPath(a[0]), end = stringToRawPath(a[1]);
    if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) {
      return;
    }
    a[0] = rawPathToString(start);
    a[1] = rawPathToString(end);
    if (precompile === "log" || precompile === true) {
      _log('precompile:["' + a[0] + '","' + a[1] + '"]');
    }
  };
  var _offsetPoints = function _offsetPoints2(text, offset) {
    if (!offset) {
      return text;
    }
    var a = text.match(_numExp2) || [], l = a.length, s = "", inc, i, j;
    if (offset === "reverse") {
      i = l - 1;
      inc = -2;
    } else {
      i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
      inc = 2;
    }
    for (j = 0; j < l; j += 2) {
      s += a[i - 1] + "," + a[i] + " ";
      i = (i + inc) % l;
    }
    return s;
  };
  var _equalizePointQuantity = function _equalizePointQuantity2(a, quantity) {
    var tally = 0, x = parseFloat(a[0]), y = parseFloat(a[1]), s = x + "," + y + " ", max = 0.999999, newPointsPerSegment, i, l, j, factor, nextX, nextY;
    l = a.length;
    newPointsPerSegment = quantity * 0.5 / (l * 0.5 - 1);
    for (i = 0; i < l - 2; i += 2) {
      tally += newPointsPerSegment;
      nextX = parseFloat(a[i + 2]);
      nextY = parseFloat(a[i + 3]);
      if (tally > max) {
        factor = 1 / (Math.floor(tally) + 1);
        j = 1;
        while (tally > max) {
          s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
          tally--;
          j++;
        }
      }
      s += nextX + "," + nextY + " ";
      x = nextX;
      y = nextY;
    }
    return s;
  };
  var _pointsFilter = function _pointsFilter2(a) {
    var startNums = a[0].match(_numExp2) || [], endNums = a[1].match(_numExp2) || [], dif = endNums.length - startNums.length;
    if (dif > 0) {
      a[0] = _equalizePointQuantity(startNums, dif);
    } else {
      a[1] = _equalizePointQuantity(endNums, -dif);
    }
  };
  var _buildPointsFilter = function _buildPointsFilter2(shapeIndex) {
    return !isNaN(shapeIndex) ? function(a) {
      _pointsFilter(a);
      a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
    } : _pointsFilter;
  };
  var _parseShape = function _parseShape2(shape, forcePath, target) {
    var isString = typeof shape === "string", e, type;
    if (!isString || _selectorExp2.test(shape) || (shape.match(_numExp2) || []).length < 3) {
      e = _toArray4(shape)[0];
      if (e) {
        type = (e.nodeName + "").toUpperCase();
        if (forcePath && type !== "PATH") {
          e = convertToPath(e, false);
          type = "PATH";
        }
        shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";
        if (e === target) {
          shape = e.getAttributeNS(null, "data-original") || shape;
        }
      } else {
        _log("WARNING: invalid morph to: " + shape);
        shape = false;
      }
    }
    return shape;
  };
  var _populateSmoothData = function _populateSmoothData2(rawPath, tolerance) {
    var j = rawPath.length, limit = 0.2 * (tolerance || 1), smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
    while (--j > -1) {
      segment = rawPath[j];
      isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
      smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
      isSmooth.length = 4;
      l = segment.length - 2;
      for (i = 6; i < l; i += 6) {
        x = segment[i] - segment[i - 2];
        y = segment[i + 1] - segment[i - 1];
        x2 = segment[i + 2] - segment[i];
        y2 = segment[i + 3] - segment[i + 1];
        a = _atan22(y, x);
        a2 = _atan22(y2, x2);
        smooth = Math.abs(a - a2) < limit;
        if (smooth) {
          smoothData[i - 2] = a;
          smoothData[i + 2] = a2;
          smoothData[i - 1] = _sqrt3(x * x + y * y);
          smoothData[i + 3] = _sqrt3(x2 * x2 + y2 * y2);
        }
        isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
      }
      if (segment[l] === segment[0] && segment[l + 1] === segment[1]) {
        x = segment[0] - segment[l - 2];
        y = segment[1] - segment[l - 1];
        x2 = segment[2] - segment[0];
        y2 = segment[3] - segment[1];
        a = _atan22(y, x);
        a2 = _atan22(y2, x2);
        if (Math.abs(a - a2) < limit) {
          smoothData[l - 2] = a;
          smoothData[2] = a2;
          smoothData[l - 1] = _sqrt3(x * x + y * y);
          smoothData[3] = _sqrt3(x2 * x2 + y2 * y2);
          isSmooth[l - 2] = isSmooth[l - 1] = true;
        }
      }
    }
    return rawPath;
  };
  var _parseOriginFactors = function _parseOriginFactors2(v) {
    var a = v.trim().split(" "), x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]), y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
    return {
      x: x / 100,
      y: y / 100
    };
  };
  var _shortAngle = function _shortAngle2(dif) {
    return dif !== dif % _PI ? dif + (dif < 0 ? _2PI2 : -_2PI2) : dif;
  };
  var _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.";
  var _tweenRotation = function _tweenRotation2(start, end, i, linkedPT) {
    var so = this._origin, eo = this._eOrigin, dx = start[i] - so.x, dy = start[i + 1] - so.y, d = _sqrt3(dx * dx + dy * dy), sa = _atan22(dy, dx), angleDif, _short;
    dx = end[i] - eo.x;
    dy = end[i + 1] - eo.y;
    angleDif = _atan22(dy, dx) - sa;
    _short = _shortAngle(angleDif);
    if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) {
      linkedPT = _lastLinkedAnchor;
    }
    return this._anchorPT = _lastLinkedAnchor = {
      _next: this._anchorPT,
      t: start,
      sa,
      //starting angle
      ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
      //change in angle
      sl: d,
      //starting length
      cl: _sqrt3(dx * dx + dy * dy) - d,
      //change in length
      i
    };
  };
  var _initCore9 = function _initCore10(required) {
    gsap5 = _getGSAP7();
    PluginClass = PluginClass || gsap5 && gsap5.plugins.morphSVG;
    if (gsap5 && PluginClass) {
      _toArray4 = gsap5.utils.toArray;
      _doc5 = document;
      PluginClass.prototype._tweenRotation = _tweenRotation;
      _coreInitted5 = 1;
    } else if (required) {
      _log("Please gsap.registerPlugin(MorphSVGPlugin)");
    }
  };
  var MorphSVGPlugin = {
    version: "3.12.2",
    name: "morphSVG",
    rawVars: 1,
    // otherwise "render" would be interpreted as a function-based value.
    register: function register2(core, Plugin) {
      gsap5 = core;
      PluginClass = Plugin;
      _initCore9();
    },
    init: function init5(target, value, tween, index, targets) {
      _coreInitted5 || _initCore9(1);
      if (!value) {
        _log("invalid shape");
        return false;
      }
      _isFunction7(value) && (value = value.call(tween, index, target, targets));
      var type, p, pt, shape, isPoly, shapeIndex, map, startSmooth, endSmooth, start, end, i, j, l, startSeg, endSeg, precompiled, sData, eData, originFactors, useRotation, offset;
      if (typeof value === "string" || value.getBBox || value[0]) {
        value = {
          shape: value
        };
      } else if (typeof value === "object") {
        type = {};
        for (p in value) {
          type[p] = _isFunction7(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
        }
        value = type;
      }
      var cs = target.nodeType ? window.getComputedStyle(target) : {}, fill = cs.fill + "", fillSafe = !(fill === "none" || (fill.match(_numExp2) || [])[3] === "0" || cs.fillRule === "evenodd"), origins = (value.origin || "50 50").split(",");
      type = (target.nodeName + "").toUpperCase();
      isPoly = type === "POLYLINE" || type === "POLYGON";
      if (type !== "PATH" && !isPoly && !value.prop) {
        _log("Cannot morph a <" + type + "> element. " + _morphMessage);
        return false;
      }
      p = type === "PATH" ? "d" : "points";
      if (!value.prop && !_isFunction7(target.setAttribute)) {
        return false;
      }
      shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);
      if (isPoly && _commands.test(shape)) {
        _log("A <" + type + "> cannot accept path data. " + _morphMessage);
        return false;
      }
      shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
      map = value.map || MorphSVGPlugin.defaultMap;
      this._prop = value.prop;
      this._render = value.render || MorphSVGPlugin.defaultRender;
      this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
      this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
      this._tween = tween;
      if (shape) {
        this._target = target;
        precompiled = typeof value.precompile === "object";
        start = this._prop ? target[this._prop] : target.getAttribute(p);
        if (!this._prop && !target.getAttributeNS(null, "data-original")) {
          target.setAttributeNS(null, "data-original", start);
        }
        if (p === "d" || this._prop) {
          start = stringToRawPath(precompiled ? value.precompile[0] : start);
          end = stringToRawPath(precompiled ? value.precompile[1] : shape);
          if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) {
            return false;
          }
          if (value.precompile === "log" || value.precompile === true) {
            _log('precompile:["' + rawPathToString(start) + '","' + rawPathToString(end) + '"]');
          }
          useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";
          if (useRotation) {
            start = _populateSmoothData(start, value.smoothTolerance);
            end = _populateSmoothData(end, value.smoothTolerance);
            if (!start.size) {
              _getTotalSize(start);
            }
            if (!end.size) {
              _getTotalSize(end);
            }
            originFactors = _parseOriginFactors(origins[0]);
            this._origin = start.origin = {
              x: start.left + originFactors.x * start.width,
              y: start.top + originFactors.y * start.height
            };
            if (origins[1]) {
              originFactors = _parseOriginFactors(origins[1]);
            }
            this._eOrigin = {
              x: end.left + originFactors.x * end.width,
              y: end.top + originFactors.y * end.height
            };
          }
          this._rawPath = target._gsRawPath = start;
          j = start.length;
          while (--j > -1) {
            startSeg = start[j];
            endSeg = end[j];
            startSmooth = startSeg.isSmooth || [];
            endSmooth = endSeg.isSmooth || [];
            l = startSeg.length;
            _lastLinkedAnchor = 0;
            for (i = 0; i < l; i += 2) {
              if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) {
                if (useRotation) {
                  if (startSmooth[i] && endSmooth[i]) {
                    sData = startSeg.smoothData;
                    eData = endSeg.smoothData;
                    offset = i + (i === l - 4 ? 7 - l : 5);
                    this._controlPT = {
                      _next: this._controlPT,
                      i,
                      j,
                      l1s: sData[i + 1],
                      l1c: eData[i + 1] - sData[i + 1],
                      l2s: sData[offset],
                      l2c: eData[offset] - sData[offset]
                    };
                    pt = this._tweenRotation(startSeg, endSeg, i + 2);
                    this._tweenRotation(startSeg, endSeg, i, pt);
                    this._tweenRotation(startSeg, endSeg, offset - 1, pt);
                    i += 4;
                  } else {
                    this._tweenRotation(startSeg, endSeg, i);
                  }
                } else {
                  pt = this.add(startSeg, i, startSeg[i], endSeg[i], 0, 0, 0, 0, 0, 1);
                  pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1], 0, 0, 0, 0, 0, 1) || pt;
                }
              }
            }
          }
        } else {
          pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
        }
        if (useRotation) {
          this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1);
          pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1);
        }
        if (pt) {
          this._props.push("morphSVG");
          pt.end = shape;
          pt.endProp = p;
        }
      }
      return _bonusValidated2;
    },
    render: function render4(ratio, data) {
      var rawPath = data._rawPath, controlPT = data._controlPT, anchorPT = data._anchorPT, rnd = data._rnd, target = data._target, pt = data._pt, s, space, easeInOut, segment, l, angle, i, j, x, y, sin, cos, offset;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      if (ratio === 1 && data._apply) {
        pt = data._pt;
        while (pt) {
          if (pt.end) {
            if (data._prop) {
              target[data._prop] = pt.end;
            } else {
              target.setAttribute(pt.endProp, pt.end);
            }
          }
          pt = pt._next;
        }
      } else if (rawPath) {
        while (anchorPT) {
          angle = anchorPT.sa + ratio * anchorPT.ca;
          l = anchorPT.sl + ratio * anchorPT.cl;
          anchorPT.t[anchorPT.i] = data._origin.x + _cos3(angle) * l;
          anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin3(angle) * l;
          anchorPT = anchorPT._next;
        }
        easeInOut = ratio < 0.5 ? 2 * ratio * ratio : (4 - 2 * ratio) * ratio - 1;
        while (controlPT) {
          i = controlPT.i;
          segment = rawPath[controlPT.j];
          offset = i + (i === segment.length - 4 ? 7 - segment.length : 5);
          angle = _atan22(segment[offset] - segment[i + 1], segment[offset - 1] - segment[i]);
          sin = _sin3(angle);
          cos = _cos3(angle);
          x = segment[i + 2];
          y = segment[i + 3];
          l = controlPT.l1s + easeInOut * controlPT.l1c;
          segment[i] = x - cos * l;
          segment[i + 1] = y - sin * l;
          l = controlPT.l2s + easeInOut * controlPT.l2c;
          segment[offset - 1] = x + cos * l;
          segment[offset] = y + sin * l;
          controlPT = controlPT._next;
        }
        target._gsRawPath = rawPath;
        if (data._apply) {
          s = "";
          space = " ";
          for (j = 0; j < rawPath.length; j++) {
            segment = rawPath[j];
            l = segment.length;
            s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";
            for (i = 2; i < l; i++) {
              s += (segment[i] * rnd | 0) / rnd + space;
            }
          }
          if (data._prop) {
            target[data._prop] = s;
          } else {
            target.setAttribute("d", s);
          }
        }
      }
      data._render && rawPath && data._render.call(data._tween, rawPath, target);
    },
    kill: function kill(property) {
      this._pt = this._rawPath = 0;
    },
    getRawPath,
    stringToRawPath,
    rawPathToString,
    normalizeStrings: function normalizeStrings(shape1, shape2, _ref) {
      var shapeIndex = _ref.shapeIndex, map = _ref.map;
      var result = [shape1, shape2];
      _pathFilter(result, shapeIndex, map);
      return result;
    },
    pathFilter: _pathFilter,
    pointsFilter: _pointsFilter,
    getTotalSize: _getTotalSize,
    equalizeSegmentQuantity: _equalizeSegmentQuantity,
    convertToPath: function convertToPath2(targets, swap) {
      return _toArray4(targets).map(function(target) {
        return convertToPath(target, swap !== false);
      });
    },
    defaultType: "linear",
    defaultUpdateTarget: true,
    defaultMap: "size"
  };
  _getGSAP7() && gsap5.registerPlugin(MorphSVGPlugin);

  // src/utils/createDraggable.ts
  init_live_reload();
  var createDraggable = (className) => {
    gsapWithCSS.registerPlugin(Draggable);
    gsapWithCSS.registerPlugin(InertiaPlugin2);
    Draggable.create(className, {
      bounds: document.getElementById("global-page-wrapper"),
      edgeResistance: 1,
      cursor: "src/assets/cursor-mouse-hover.svg",
      activeCursor: ".src/assets/cursor-mouse-hover.svg",
      inertia: true
    });
  };

  // src/utils/createMenuAnim.ts
  init_live_reload();
  var Matter = __toESM(require_matter(), 1);
  var createMenuAnim = () => {
    gsapWithCSS.registerPlugin(MorphSVGPlugin);
    const icons = [
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/6580968dfb6ef128287a98dc_Paint%20Bucket.webp",
        width: 193,
        height: 235
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/659da9791046197588e22435_Drawing%20Saw.svg",
        width: 127,
        height: 256
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/6580968c4490ea590b88e423_Razor%20Blade.webp",
        width: 180,
        height: 170
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/6580968c4490ea590b88e423_Razor%20Blade.webp",
        width: 180,
        height: 170
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/6566b3a7285148f4dbbd04fa_Drawings_Nail.svg",
        width: 152,
        height: 205
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/659da9782fe90937705435e8_Drawing%20Pencil.svg",
        width: 150,
        height: 150
      },
      {
        link: "https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/659da97917c726a7da326452_Drawing%20Hammer.svg",
        width: 109,
        height: 193
      }
    ];
    const resolutionSettings = [
      { maxWidth: 600, xOffset: 200 },
      { maxWidth: 1200, xOffset: 300 },
      { maxWidth: Infinity, xOffset: 400 }
    ];
    function getSettings() {
      const screenWidth = window.innerWidth;
      return resolutionSettings.find((setting) => screenWidth <= setting.maxWidth);
    }
    function randomInteger(min, max) {
      return Math.random() * (max - min + 1) + min;
    }
    function randomDecimalInteger(min, max) {
      return Math.random() * (max - min + 0.1) + min;
    }
    const { Engine } = Matter, { Render } = Matter, { World } = Matter, { Bodies } = Matter, { Runner } = Matter, { Body } = Matter;
    const engine = Engine.create();
    const animationBody = document.getElementById("animation-canvas");
    const render5 = Render.create({
      element: animationBody,
      engine,
      options: {
        width: animationBody.clientWidth,
        height: animationBody.clientHeight,
        wireframes: false,
        background: "transparent"
      }
    });
    const iconsBodies = [];
    function createIcons() {
      for (let i = 0; i < icons.length; i++) {
        const settings = getSettings();
        const x = window.innerWidth + settings.xOffset;
        const y = randomInteger(window.innerHeight / 2 - 400, window.innerHeight / 2 + 400);
        const icon = icons[i];
        const isMobile = window.innerWidth < 600;
        const scale = randomDecimalInteger(isMobile ? 0.3 : 0.5, isMobile ? 0.8 : 0.9);
        const width = icon.width * scale;
        const height = icon.height * scale;
        const iconBody = Bodies.rectangle(x, y, width, height, {
          friction: 0.8,
          airFriction: 0.1,
          restitution: 0.3,
          isStatic: true,
          render: {
            sprite: {
              texture: icon.link,
              xScale: scale,
              yScale: scale
            }
          }
        });
        iconBody.running = false;
        iconBody.tempWidth = width;
        iconBody.tempHeight = height;
        iconBody.tempScale = scale;
        iconsBodies.push(iconBody);
        World.add(engine.world, iconBody);
      }
    }
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render5);
    function fireIcon(i) {
      const iconBody = iconsBodies[i];
      if (iconBody.running)
        return;
      iconBody.running = true;
      Body.set(iconBody, "isStatic", false);
      const velocity = {
        x: randomInteger(30, 50) * -1,
        y: randomInteger(20, 20) * -1
      };
      Body.setVelocity(iconBody, velocity);
    }
    let isDirty = false;
    let isOpen = false;
    function startAnimation() {
      if (isOpen === false) {
        if (isDirty)
          return;
        isDirty = true;
        for (let i = 0; i < iconsBodies.length; i++) {
          setTimeout(() => {
            fireIcon(i);
          }, i * 20);
        }
        createIcons();
        isDirty = false;
        isOpen = true;
      } else {
        isOpen = false;
      }
    }
    createIcons();
    Matter.Events.on(engine, "beforeUpdate", function() {
      for (let i = 0; i < iconsBodies.length; i++) {
        const iconBody = iconsBodies[i];
        if (iconBody.position.x <= iconBody.tempWidth / 2 + 10) {
          Body.setVelocity(iconBody, { x: 25, y: 5 });
        }
        if (iconBody.position.y <= iconBody.tempHeight / 2 + 10) {
          Body.setVelocity(iconBody, { x: -30, y: 5 });
        }
        if (iconBody.position.y >= window.innerHeight) {
          iconsBodies.splice(i, 1);
        }
      }
    });
    function recreateIcons() {
      World.clear(engine.world, false);
      iconsBodies.length = 0;
      createIcons();
    }
    window.addEventListener("resize", function() {
      render5.options.width = animationBody.clientWidth;
      render5.options.height = animationBody.clientHeight;
      render5.canvas.width = render5.options.width;
      render5.canvas.height = render5.options.height;
      recreateIcons();
    });
    recreateIcons();
    const navToggle = document.getElementById("tvNavToggle");
    if (navToggle != null) {
      navToggle.addEventListener("click", function() {
        startAnimation();
      });
    }
  };

  // src/utils/createNavMenuMorph.ts
  init_live_reload();
  var createNavMenuMorph = () => {
    const navBtn = document.getElementById("tvNavToggle");
    const navBackground = document.getElementById("tvNavBackground");
    if (navBtn !== null) {
      const shapeClosed = document.getElementById("nav-icon-closed");
      const shapeOpen = document.getElementById("nav-icon-open");
      let isOpen = false;
      if (navBackground !== null) {
        if (shapeClosed !== null && shapeOpen !== null) {
          navBackground.addEventListener("click", () => {
            navBtn.click();
          });
        }
      }
      navBtn.addEventListener("click", () => {
        if (shapeClosed !== null && shapeOpen !== null) {
          if (isOpen === false) {
            gsapWithCSS.to(shapeClosed, {
              morphSVG: { shape: shapeOpen, shapeIndex: "auto" },
              duration: 0.75,
              ease: "back.inOut",
              fill: "white"
            });
            isOpen = true;
          } else {
            gsapWithCSS.to(shapeClosed, {
              morphSVG: { shape: shapeClosed, shapeIndex: "auto" },
              duration: 0.75,
              ease: "back.inOut",
              fill: "#262424"
            });
            isOpen = false;
          }
        }
      });
    } else {
      return;
    }
  };

  // src/utils/createWorkMenuMorph.ts
  init_live_reload();
  var createWorkMenuMorph = () => {
    const workFiltersBtn = document.getElementById("work-filter-btn");
    if (workFiltersBtn !== null) {
      const shapeClosed = document.getElementById("filter-closed");
      const shapeOpen = document.getElementById("filter-open");
      let isOpen = false;
      workFiltersBtn.addEventListener("click", () => {
        if (shapeClosed !== null && shapeOpen !== null) {
          if (isOpen === false) {
            gsapWithCSS.to(shapeClosed, {
              morphSVG: { shape: shapeOpen, shapeIndex: "auto" },
              duration: 0.3,
              ease: "back.inOut"
            });
            isOpen = true;
          } else {
            gsapWithCSS.to(shapeClosed, {
              morphSVG: { shape: shapeClosed, shapeIndex: "auto" },
              duration: 0.3,
              ease: "back.inOut"
            });
            isOpen = false;
          }
        }
      });
    } else {
      return;
    }
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    gsapWithCSS.registerPlugin(MorphSVGPlugin);
    createDraggable(".draggable");
    setTimeout(() => {
      createMenuAnim();
    }, 50);
    createWorkMenuMorph();
    createNavMenuMorph();
  });
})();
/*! Bundled license information:

matter-js/build/matter.js:
  (*!
   * matter-js 0.19.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Draggable.js:
  (*!
   * Draggable 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/utils/VelocityTracker.js:
  (*!
   * VelocityTracker: 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/InertiaPlugin.js:
  (*!
   * InertiaPlugin 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/MorphSVGPlugin.js:
  (*!
   * MorphSVGPlugin 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
