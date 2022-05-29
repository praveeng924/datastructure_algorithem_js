function binarySearch2(arr,val){
    let min = 0;
    let max = arr.length - 1;

    while(min<=max){
        let middle = Math.floor((min+max)/2);
        if(arr[middle] < val){
            min = middle + 1;
        }
        else if (arr[middle] > val){
            max = middle - 1;
        }
        else {
            return console.log(middle);
        }
    }
    return -1;
}

binarySearch2([1,2,3,4,5,6,7],12);