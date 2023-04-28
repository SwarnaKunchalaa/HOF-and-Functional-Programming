let books =[{title : "A song of eyes and fire", author : "george martin", year: 1994},
            {title : "sapiens", author :"yuval Noah Hariri",year: 2012},
            {title : "emma", author : "jane austin",year : 2015},
            {title : "The God of small Things", author:"arundathi roy",year : 2005},
            {title : "Harry Potter", author:"j.K Rowling", year : 1990}]


let result = books.filter(element=>element.year<2010).map(element=>{
    element.author = element.author.split("")[0].toUpperCase()+element.author.slice(1)
    return element
})
console.log(result)

// const updatedResult = books.map(element => {
//     return {
//         ...element,
//         author: element.author.split("")[0].toUpperCase() + element.author.slice(1)
//     };
// });

// console.log(updatedResult)
