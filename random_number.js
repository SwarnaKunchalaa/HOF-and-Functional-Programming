let delay = 3000
let sec = delay/1000
let timer = setInterval(function(){
   console.log(sec +" seconds are remaining")
   sec--;
},1000)

setTimeout(function(){
  clearInterval(timer);
  let number = Math.random();
  console.log("generated random number is"+number)
}
,delay)