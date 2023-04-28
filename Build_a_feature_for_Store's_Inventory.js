let store =[ {name : "item1" , price : 10},
             {name : "item2" , price : 20},
             {name : "item3" , price : 15},
             {name : "item4" , price : 30},
             {name : "item5" , price : 50 }]

let result = store.map(element=>
    element.price = element.price*80)

console.log(result);
console.log(store);