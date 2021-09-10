function specialSort(array){
    let sortedArr = array.sort((a,b) => a-b);
    let l = sortedArr.length;
    let res = [];
    for(let i=0; i<array.length/2; i++){
        res.push(sortedArr[l-(i+1)], sortedArr[i]);
    }
    if(array.length%2) res.pop();
    return res;
}

module.exports = specialSort;