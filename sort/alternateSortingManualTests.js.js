//sort array so that returns [10,1,9,2,8,3,7,4,6,5]

//var arr1 = [1,4,5,8,3,2,6,9,7,10]
//var arr2 = [1,4,5,8,3,2,6,9,7]

//Test 1
if(JSON.stringify(specialSort([1,4,5,8,3,2,6,9,7,10])) !== JSON.stringify([10,1,9,2,8,3,7,4,6,5])) {
    throw Error("test 1 failed");
}
else console.log(`specialSort([1,4,5,8,3,2,6,9,7,10]): `, specialSort([1,4,5,8,3,2,6,9,7,10]));

//Test 2
if(JSON.stringify(specialSort([1,4,5,8,3,2,6,9,7])) !== JSON.stringify([9,1,8,2,7,3,6,4,5])) {
    throw Error("test 2 failed");
}
else console.log(`specialSort(${[1,4,5,8,3,2,6,9,7]}): `, specialSort([1,4,5,8,3,2,6,9,7]));


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

