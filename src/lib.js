const map = function(mapper,record){
  let mappedRecord = [];
  for(let element of record){
    mappedRecord.push(mapper(element));
  }
  return mappedRecord;
}
const filter = function(predictor,record){
  let filteredRecord = [];
  for(let element of record){
    if(predictor(element)){
      filteredRecord.push(element);
    }
  }
  return filteredRecord;
}
exports.map = map;
exports.filter = filter;
