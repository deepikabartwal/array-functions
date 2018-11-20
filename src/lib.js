const map = function(callbackFunction,record){
  let newArray = [];
  for(let element of record){
    newArray.push(callbackFunction(element));
  }
  return newArray;
}
exports.map = map
  ;
