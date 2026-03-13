console.log("ARRAY OF STRINGS OF SPECIFIC LENGTH")
let objects = ['apple','computer','keyboard','mouse','monitor','banana','book']
let newArr = objects.filter(function(object){
    return object.length > 5;
})
console.log("Strings of len above 5 : ",newArr)