function same(arr1,arr2){
    let freq1 = {};
    let freq2 = {};
    if(arr1.length !== arr2.length){
        
        return false;
    }
    for(let ar1 of arr1 ){
        freq1[ar1] = (freq1[ar1] || 0) + 1;
    }
    for (let ar2 of arr2){
        freq2[ar2] = (freq2[ar2] || 0) + 1;
    }
    for (let key in freq1){
        if(!(key ** 2 in freq2)){
            return false;
            
        }
        if(freq1[key] !== freq2[key ** 2]){
            return false;
        }
    }
    return true;
}

const v = same([1,2,3],[1,4,9]);
console.log(v);