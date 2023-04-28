let input = "HelloWorld".split('')
function reverse_string(input){
    let i = 0;
    let j = input.length-1;
    console.log(input.length)
    let temp;
    while(i<j){
        temp = input[i];
        input[i] = input[j]
        input[j] = temp;
        i++;
        j--;
        
    }
    input = input.join('')
    console.log(input)
}
let timeout = setTimeout(reverse_string,2000,input);
console.log(timeout)
