const express = require('express');
const app=express();
    
   
app.get('/sum',(req,res) => {
    let total=0;
    function sum(numbers) {
        for (let index = 0; index < numbers.length; index++) {
            total += numbers[index];  
        }
        return total;
        }
    console.log(sum([]));
    
    res.send( `The sum of list of numbers is : ${total}`);
})

app.get('/product',(req,res) => {
let answer=1;
function product(numbers) {
for (let index = 0; index < numbers.length; index++) {
    answer *= numbers[index];  
}
return answer;
}

console.log(product([]));
res.send(`The product of list of numbers is :${answer}`);
})


app.listen(5000,() => {
    console.log("Server listening on port 5000...")
})
