// // code your solution here

// function saturdayFun(activity = "roller-skate") {
//     return (`This Saturday, I want to ${activity}!`)
// }

// function mondayWork(location = "go to the office"){
//     return (`This Monday, I will ${location}.`)

// }

// function wrapAdjective(symbol) {
//     return function inner(special) {
//         return `You are ${symbol}${special}${symbol}!`;
//     }
// }


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(adj = "special"){
        return `You are ${visualFlair}${adj}${visualFlair}!`;
    }

}