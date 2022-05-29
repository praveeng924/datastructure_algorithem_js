function selectionSort(arr){
    const swap = (arr,inx1,inx2) =>{
        ([arr[inx1],arr[inx2]] = [arr[inx2],arr[inx1]]);
    }

    for(i=0;i<arr.length;i++){
        let lowest = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            swap(arr,i,lowest);
        }
    }
    return console.log(arr);
}

selectionSort([2,1,5,7,6,9]);