console.log("CONVERTING RAW NUMBERS INTO PRICE TAGS")
let nums = [10,20,30,40,50]
let priceTag = nums.map(function(num){
    return "$" + num.toString();
})
console.log("After converting to price tag : ",priceTag)