// Your code here

saturdayFun();

    function saturdayFun(camp ="roller-skate") {
        return `This Saturday, I want to ${camp}!`
}
    saturdayFun()
    

let mondayWork = function(study="go to the office"){
    return `This Monday, I will ${study}.` 

}
    mondayWork()
    

function wrapAdjective (flair="*") {
    return function(angry="special"){
    return `You are ${flair}${angry}${flair}!`
 }
}
    

let Calculator = {
    add: function (a,b){
        return a+b
    } ,
    subtract: (a,b) => {
        return a - b
    } ,
    multiply: (a,b) => {
        return a * b
    } ,
    divide: (a,b) => {
        return a / b
    } ,
}
    

    

    function actionApplyer (start, array){
    let a = start
    for(let i = 0; i < array.length; i++){
    a = array[i](a)
    }
    return a
    }
