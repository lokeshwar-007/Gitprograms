console.log("ARRAY METHODS")
function addElement(arr,num){
    arr.push(num)
    return arr;
}
function removeElement(arr1){
    arr.shift()
    return arr;
}
function indexOfElement(arr2,ch){
    return arr2.indexOf(ch);
}
function reverseArray(arr2){
    return arr2.reverse();
}
function includesElement(arr3,element){
    return arr3.includes(element)
}
let arr = [10,20,30,40]
let num = 50
console.log("Updated array after push() : ",addElement(arr,num))
let arr1 = [1,2,3,4]
console.log("Updated array after shift() : ",removeElement(arr1))
let arr2 = ['a','b','c','d','e','f']
let ch = "f"
console.log("Index of ",ch," is : ",indexOfElement(arr2,ch))
console.log("Reversed array is : ",reverseArray(arr2))
let arr3 = ['ant','bat','cat','dog','fan','gap','hat','ink']
let element = "hat"
console.log("Element included or not : ",includesElement(arr3,element))
