// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
saturdayFun("bathe my dog")

function mondayWork(work = "go to the office"){
    return  `This Monday, I will ${work}.`
}
mondayWork("work from home");

function wrapAdjective(flair = '*'){
    return function emphatic(now="special"){
        return `You are ${flair}${now}${flair}!`
    }
}
wrapAdjective("||")("dedicated programmer")