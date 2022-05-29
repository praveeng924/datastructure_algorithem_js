function MergeSort(arr1,arr2){
    var result = [];
    var i=0;
    var j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return console.log(result);

}

MergeSort([1,3],[2,4,6]);

function mergeSplit(arr){
    if(arr.length<=1) return arr;
    middle = Math.floor(arr.length/2);
    left = mergeSplit(0,middle);
    right= mergeSplit(middle);
    return this.MergeSort(left,right);
}