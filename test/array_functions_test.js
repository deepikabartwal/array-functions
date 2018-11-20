const lib = require("../src/lib.js");
const map = lib.map;
const assert = require("assert");
const identity = function(text){
  return text;
}

const increment = function(number){
  return ++number;
}

const square = function(number){
  return number*number;
}

const calculateLength = function(text){
  return text.length;
}

describe('map',function(){
  it('should return the array with same element as input',function(){
    assert.deepEqual(map(identity,[1]),[1]);
    assert.deepEqual(map(identity,[]),[]);
    assert.deepEqual(map(identity,[1,2]),[1,2]);
    assert.deepEqual(map(identity,["a","b","c"]),["a","b","c"]);
  });
  it('should return increment values of elements in array',function(){
    assert.deepEqual(map(increment,[1]),[2]);
    assert.deepEqual(map(increment,[]),[]);
    assert.deepEqual(map(increment,[1,2,3]),[2,3,4]);
    assert.deepEqual(map(increment,[23,55,67]),[24,56,68]);
  });
  it('should return square of elements of array',function(){
    assert.deepEqual(map(square,[2]),[4]);
    assert.deepEqual(map(square,[]),[]);
    assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
    assert.deepEqual(map(square,[2,4,6]),[4,16,36]);
  });
  it('should return length of each elements of array',function(){
    assert.deepEqual(map(calculateLength,['a']),[1]);
    assert.deepEqual(map(calculateLength,[]),[]);
  });
});

