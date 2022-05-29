function pivots(arr,start = 0,end=arr.length - 1){
    function swap(arr,idx1,idx2){
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
        return arr;
    }
    pivot = arr[start];
    let swapIdx = start;
    for(let i=start+1;i<=end;i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left = 0,right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivots(arr,left,right);
        left = quickSort(arr,left,pivotIdx - 1);
        right = quickSort(arr,pivotIdx+1,right);
    }
    console.log(arr);
    return arr;
}
quickSort([4,1,2,6,5,9]);