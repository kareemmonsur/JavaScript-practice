function arrayMerger (array1, array2){

    return arrayMerger = array1.concat(array2);

    console.log (array1.concat(array2))
}

let mergedArray = arrayMerger (array1 = [1,2,3], array2 = [2,4,6]);
console.log ('Array1:',array1)
console.log ('Array2:',array2)
console.log('Merged Array:', arrayMerger);
let uniqueMergedArray = [...new Set(arrayMerger)];
console.log('uniqueMergedArray:' ,uniqueMergedArray);
sortDescending = uniqueMergedArray.sort(function(a, b){return b - a});
console.log('descending order:' ,sortDescending)