let arr = [1,2,3,4,5]
function Mirror(a){
 let array = a
 let ar = a
 array.pop(-1)
 array.reverse();
 a = ar.concat(array)
 return a
}

console.log(Mirror[1,2,3,4,5])