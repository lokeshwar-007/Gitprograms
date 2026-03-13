console.log("MULITPLYING EACH ELEMENT OF ARRAY BY 2")
let arr = [1,2,3,4,5]
let result = arr.map(function(num){
    return num * 2;
});
console.log("Array after multiplied by 2:",result)