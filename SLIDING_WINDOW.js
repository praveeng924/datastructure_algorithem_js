function slidingWindow(arr,num){ //inorder to get the sum of num in an array.
    let temp = 0;
    let max=0;
    if(arr.length<num){
        return null;
    }
    for(let i =0;i<num;i++){
        max +=arr[i];
    }
    temp = max;
    for(i=num;i<arr.length;i++){
        temp = temp - arr[i-num] + arr[i];
        max = Math.max(temp,max);

    }
    return console.log(max);
}

slidingWindow([2,6,5,2,1,8,9,6,3],3);