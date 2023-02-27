// Q1 Write an ES6 function that accepts an array of integers and returns the maximum element in the array.

const getMaxElement = arr => {
    let maxElement = Number.NEGATIVE_INFINITY;
    for(let i = 0 ; i < arr.length ; i++){
     if(arr[i] > arr[i+1] && arr[i] > maxElement){
         maxElement = arr[i]
     }
    }
    return maxElement

}

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array))
 