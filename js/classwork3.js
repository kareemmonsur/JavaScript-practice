// ).Write a JavaScript function to merge two arrays and removes all duplicates elements
// e.g 
// let a = [2,3,1], b = [2,9,5,3] 
// calling afunction(a,b) return [2,3,1,5,9]
// function arrayMerger (array){
//     let array1 = [1,2,3,4];
//     let array2 = [3,4,5,6];
//     console.log(merge_array(array1.concat(array2)))
// }
// arrayMerger (merge_array)
let array1 = [1,2,3,4];
let array2 = [3,4,5,6];
let merge_array = array1.concat(array2); 
//let sort = merge_array.sort

// console.log(merge_array);
sort = merge_array.sort(function(a, b){return b - a});
console.log(sort)

