function anagram(string1,string2){
    if(string1.length != string2.length){
        return false;
    }
    const freq1 = {};
    for(let i = 0 ; i<string1.length ; i++){
        let first = string1[i];
        freq1[first]? freq1[first]+=1 : freq1[first] = 1;
    }

    for (let j = 0; j<string2.length; j++ ){
        let second = string2[j];
        if(!freq1[second]){
            return false;
        }
        else{
            freq1[second] -=1;
        }
    }
    return true;
}
console.log(anagram('sachin',"sachin"));