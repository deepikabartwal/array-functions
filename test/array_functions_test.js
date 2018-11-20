const lib = require("../src/lib.js");
const map = lib.map;
const assert = require("assert");
const identity = function(text){
  return text;
}

//testing map for identity function
const testMapIdentityFunctions = function(){
  assert.deepEqual(map(identity,[1]),[1]);
}

const runTest = function(){
  if(!map){
    console.log("map function has not been implemented yet.Test won't run");
    return;
  }
  testMapIdentityFunctions();
  console.log("testMapIdentityFunctions passed");
}
runTest();

