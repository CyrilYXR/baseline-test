'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  for(let i=0; i<collectionA.length; i++){
    var collectionBValue=[];
    collectionBValue=objectB.value;
    for(let j=0; j<collectionBValue.length; j++){
      if(collectionA[i].key==collectionBValue[j]){
        result.push(collectionA[i].key);
        break;
      }
    }
  }
  return result;
}
