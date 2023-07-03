function analyzeArray(array){
    const obj = { }     
    if(array.length === 0){
        return obj
    }
    obj.average = array.reduce((acc, el) => acc + el, 0) / array.length;
    obj.min = Math.min(...array);
    obj.max = Math.max(...array);
    obj.length = array.length;

return obj;
}

module.exports = {
    analyzeArray
}