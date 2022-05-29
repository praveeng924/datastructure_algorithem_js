function binarySearch(arr,ele){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start+end)/2);
    console.log(start+''+end+''+middle);
    while(arr[middle]!== ele && start<=end){
        if(ele < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
            console.log(start+""+end);
        }
        middle = Math.floor((start+end)/2);
    }
    if(arr[middle] == ele){
        return console.log(middle);
    }else{
        return -1;
    }
}
arr = [2,5,6,9,12,15,17];
binarySearch(arr,15);

