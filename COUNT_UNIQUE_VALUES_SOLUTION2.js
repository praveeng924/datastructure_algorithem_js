function countUniqueValues(arr){
    let count = 0;
    let current;
    for(let i =0; i<arr.length;i++){
        if(arr[i] != current){
            current = arr[i];
            count++;
        }
    }
    return console.log(count);
}

countUniqueValues([1,1,2,3,3,4]);