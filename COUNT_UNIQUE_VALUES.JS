function countUniqueValues(arr){
    let current = 0;
    let forward = 1;
    for(let i=0;i<arr.length-1;i++){
       if(arr[current] == arr[forward]){
           forward++;
       }
       else if(arr[current] !== arr[forward]){
           current++;
           arr[current] = arr[forward];
           forward++;
       }
    }
    return console.log(current + 1);
}

countUniqueValues([-1,1,2,2,3,3,4,4]);