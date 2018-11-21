const {map,filter} = require("../src/lib.js");
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

const isEven = function(number){
  return number%2==0;
}

const aboveThreshold = function(threshold){
  return function(number){
    return number>threshold;
  }
}

const isVowel = function(character){
  let lowerVowels = "aeiou";
  let upperVowels = "AEIOU";
  let vowels = lowerVowels + upperVowels;
  for(let vowelPosition=0; vowelPosition < vowels.length; vowelPosition++){
    if(vowels[vowelPosition]==character){
      return true;
    }
  }
  return false;
}

const containsVowel = function(text){
  for(let letterPosition = 0; letterPosition<text.length; letterPosition++){
    if(isVowel(text[letterPosition])){
      return true;
    }
  }
  return false;
}

describe('map',function(){
  describe('for single element array',function(){
    it('should return single element array for single element array',function(){
      assert.deepEqual(map(identity,[1]),[1]);
      assert.deepEqual(map(increment,[1]),[2]);
      assert.deepEqual(map(square,[2]),[4]);
      assert.deepEqual(map(calculateLength,['a']),[1]);
    });
  });
  describe('for empty array',function(){
    it('should return empty array for empty array',function(){
      assert.deepEqual(map(identity,[]),[]);
      assert.deepEqual(map(increment,[]),[]);
      assert.deepEqual(map(square,[]),[]);
      assert.deepEqual(map(calculateLength,[]),[]);
    });
  });
  describe('for multiple element array',function(){
    it('should return array with equal number of elements',function(){
      assert.deepEqual(map(identity,[1,2]),[1,2]);
      assert.deepEqual(map(identity,["a","b","c"]),["a","b","c"]);
      assert.deepEqual(map(increment,[1,2,3]),[2,3,4]);
      assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
      assert.deepEqual(map(calculateLength,['a','it','is','a','cat']),[1,2,2,1,3]);
    });
  });
});

describe('filter',function(){
  it('should give only even numbers',function(){
    assert.deepEqual(filter(isEven,[1]),[1]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[1,2]),[2]);
    assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  });
  it('should give only the numbers above threshold',function(){
    assert.deepEqual(filter(aboveThreshold(0),[1]),[1]); 
    assert.deepEqual(filter(aboveThreshold(0),[]),[]);
    assert.deepEqual(filter(aboveThreshold(1),[1]),[]);
    assert.deepEqual(filter(aboveThreshold(1),[1,2,3]),[2,3]);
    assert.deepEqual(filter(aboveThreshold(4),[1,15,3,5,6,7,8,9,11,13,2,17]),[15,5,6,7,8,9,11,13,17]);
  });
  it('should give only vowels',function(){
    assert.deepEqual(filter(isVowel,['a']),['a']);
    assert.deepEqual(filter(isVowel,[]),[]);
    assert.deepEqual(filter(isVowel,['b']),[]);
    assert.deepEqual(filter(isVowel,['a','b']),['a']);
    assert.deepEqual(filter(isVowel,['e','b','a']),['e','a']);
  });
  it('should give text with vowels',function(){
    assert.deepEqual(filter(containsVowel,['bbq']),[]);
    assert.deepEqual(filter(containsVowel,[]),[]);
    assert.deepEqual(filter(containsVowel,['are','bd','keep']),['are','keep']);
    assert.deepEqual(filter(containsVowel,['athul','by','grr','bbq','durga','fry','cry','myth']),['athul','durga']);
  });
});

