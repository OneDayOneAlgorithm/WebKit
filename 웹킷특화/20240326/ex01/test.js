
let salaries = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
}

function topSalary(salaries){
    const newSalaries = Object.entries(salaries)
    let mx = newSalaries[0][1];
    let result = newSalaries[0][0]

    for(let salary of newSalaries){
        let [value1, value2] = salary;
        if (mx < value2){
            mx = value2;
            result = value1;
        }
    }
    console.log(result);
}

const dan = [2,3,4,5,6,7,8,9]
const count = [1,2,3,4,5,6,7,8,9]
function gugudan(dan,count){

    const result = dan.map(function(x){
        return count.map(function(y){
            return x*y;
        })
    })

    result.forEach((num)=>{
        console.log(num[0] + "단")
        num.forEach((num2)=>{
            console.log(num2)
        })
    })




}
gugudan(dan,count);