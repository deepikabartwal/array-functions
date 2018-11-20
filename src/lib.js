const map = function(callbackFunction,record){
  let newArray = [];
  for(let element of record){
    newArray.push(callbackFunction(element));
  }
  return newArray;
}
const filter = function(callbackFunction,record){
  let newArray = [];
  for(let element of record){
    if(callbackFunction(element)){
      newArray.push(element);
    }
  }
  return newArray;
}
exports.map = map;
exports.filter = filter;
