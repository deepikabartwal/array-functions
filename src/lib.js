const map = function(mapper,record){
  let mappedRecord = [];
  for(let element of record){
    mappedRecord.push(mapper(element));
  }
  return mappedRecord;
}
const filter = function(predicate,record){
  let filteredRecord = [];
  for(let element of record){
    if(predicate(element)){
      filteredRecord.push(element);
    }
  }
  return filteredRecord;
}

const reduce = function(reducer,record,initialValue){
  let accumulator =  initialValue;
  let index = 0;
  if(accumulator==undefined){
    accumulator = record[0];
    index = 1
  }
  while(index<record.length){
    accumulator = reducer(accumulator,record[index++]);
  }
  return accumulator;
}

const reduceRecursive = function(reducer,record,initialValue){
  let sourceRecord = record.slice();
  let accumulator = initialValue;
  if(initialValue == undefined){
    accumulator = sourceRecord[0];
    sourceRecord = record.slice(1);
  }
  if(sourceRecord.length){
    accumulator = reducer(accumulator,sourceRecord[0]);
    return reduceRecursive(reducer,sourceRecord.slice(1),accumulator);
  }
  return accumulator;
}

exports.reduceRecursive = reduceRecursive;
exports.reduce = reduce;
exports.map = map;
exports.filter = filter;
