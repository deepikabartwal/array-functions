const {map,filter,reduce,reduceRecursive} = require("../src/lib.js");
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

const makeConstant = (x) => ()=>x;

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

const greaterNumber = function(number1,number2){
  return Math.max(number1,number2);
}

const sum = function(number1,number2){
  return number1+number2;
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
    it('should return array with equal number of elements for multiple element array',function(){
      assert.deepEqual(map(identity,[1,2]),[1,2]);
      assert.deepEqual(map(identity,["a","b","c"]),["a","b","c"]);
      assert.deepEqual(map(increment,[1,2,3]),[2,3,4]);
      assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
      assert.deepEqual(map(calculateLength,['a','it','is','a','cat']),[1,2,2,1,3]);
    });
  });
});

describe('filter',function(){
  describe("for empty array",function(){
    it('should return empty array',function(){
      assert.deepEqual(filter(makeConstant(true),[]),[]);
      assert.deepEqual(filter(isEven,[]),[]);
    });
  });
  describe("for single element array for true value",function(){
    it('should return single element array',function(){
      assert.deepEqual(filter(makeConstant(true),[1]),[1]);
      assert.deepEqual(filter(isEven,[2]),[2]);
    });
  });
  describe("for single element array for false value",function(){
    it('should return empty array',function(){
      assert.deepEqual(filter(makeConstant(false),[1]),[]);
      assert.deepEqual(filter(isEven,[1]),[]);
    });
  });
  describe("for multiple element array",function(){
    it('should return array of equal length as of the input array',function(){
      assert.deepEqual(filter(makeConstant(true),[2,3,4,5,6]),[2,3,4,5,6]);
    });
  });
  describe('for multiple element array when alternate elements fulfil predicator', function(){
    it('should return only alternate elementsof array', function(){
      assert.deepEqual(filter(isEven,[1,2]),[2]);
      assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
    });
  });
});

describe("reduce",function(){
  describe("for empty array",function(){
  it("should return accumulator when array is empty",function(){
    assert.deepEqual(reduce(greaterNumber,[],1),1);
    assert.deepEqual(reduce(sum,[],1),1);
  });
  });
  describe("for no initial value given",function(){
    it("should return value when accumulator is empty and array non empty",function(){
      assert.deepEqual(reduce(greaterNumber,[1,2]),2);
      assert.deepEqual(reduce(sum,[1,2]),3);
    });
  });
  describe("for non empty array and initial value",function(){
    it("should return value when accumulator and array are not empty",function(){
      assert.deepEqual(reduce(greaterNumber,[1,2,3,4],5),5);
      assert.deepEqual(reduce(sum,[1,2,3,4],5),15);
    });
  });
});
describe("reduceRecursive",function(){
  describe("for empty array",function(){
  it("should return accumulator when array is empty",function(){
    assert.deepEqual(reduceRecursive(greaterNumber,[],1),1);
    assert.deepEqual(reduceRecursive(sum,[],1),1);
  });
  });
  describe("for no initial value given",function(){
    it("should return value when accumulator is empty and array non empty",function(){
      assert.deepEqual(reduceRecursive(greaterNumber,[1,2]),2);
      assert.deepEqual(reduceRecursive(sum,[1,2]),3);
    });
  });
  describe("for non empty array and initial value",function(){
    it("should return value when accumulator and array are not empty",function(){
      assert.deepEqual(reduceRecursive(greaterNumber,[1,2,3,4],5),5);
      assert.deepEqual(reduceRecursive(sum,[1,2,3,4],5),15);
    });
  });
});
