console.log("CONVERTING TO UPPER CASE")
let fruits = ['apple','banana','mango','kiwi']
let result = fruits.map(function(fruit){
    return fruit.toUpperCase();
})
console.log("After converting to uppercase : ",result)