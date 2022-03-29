const containsDuplicate = numb => {
    const duplicateValue = {};//{1:true,2:true}
    for(let i = 0; i < numb.length; i++){
        let tempNum = numb[i];
        
        if(duplicateValue[tempNum]){
            return true;
        }else{
            duplicateValue[tempNum] = true;
        }

    }
    return false
};
// const containsDuplicateArr = numb => {
//     let duplicateValue = [];
//     for(let i = 0; i < numb.length; i++){
//         let tempVal = numb[i];
        
//         if(duplicateValue.includes(tempVal)){
//             return true;
//         }else{
//             // duplicateValue.push(tempVal);
//             duplicateValue =  [...duplicateValue, tempVal];
//         }

//     }
//     return false
// };
// console.log(containsDuplicateArr([1,2,1]))


module.exports = containsDuplicate;
