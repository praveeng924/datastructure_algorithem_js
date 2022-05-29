function multiplePointer(arr){ // function should return the first set of number which return 0
    let left = 0;
    let right= arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum > 0){
            right-- ;
        }
        else if (sum < 0){
            left++;
        }
        else{
            return console.log([arr[left],arr[right]]);
        }
    }
}

multiplePointer([-4,-3,-2,-1,0,1,2,3,10]);