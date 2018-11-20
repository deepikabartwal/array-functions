const lib = require("../src/lib.js");
const map = lib.map;
const assert = require("assert");
const identity = function(text){
  return text;
}

const increment = function(number){
  return number+1;
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
  });
});

