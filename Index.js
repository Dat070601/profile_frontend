//Check âm dương

// var num = [1,2,0,-1,-2];

// function CheckNum(num) {
//     let duong = 0
//     let am = 0
//     for (var index of num) {
//         if(index > 0)
//         {
//             duong += 1;
//         }
//         if(index < 0){
//             am += 1;
//         }
//     }
//     return(duong/num.length).toFixed(6) + "\n" + (am/num.length).toFixed(6) + "\n" + (1-(duong/num.length + am/num.length)).toFixed(6) 
// }
// console.log(CheckNum(num));


//Dấu sao 

// function Star(star)
// {
//     let arr = [];
//     for(let i = 1; i <= star;i++){
//         for(let j= 1; j <= star;j++){
//            arr.push("*")
//            if(j==star){
//             console.log(arr)
//            }
//         }
//     }
// }

// Star(5)
var i = 0;
var speed = 100; 
var arr = ["Backend developer","world"]
function typeWriter() {
    let j =0;
    if (i < arr[j].length) {
    document.getElementById("info").innerHTML += arr[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
    // if(i === arr[j].length)
    // {
    //     j += 1;
    //     document.getElementById("info").innerHTML += arr[j].charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    // }
    // if (i < txt.length) {
    //     document.getElementById("info").innerHTML += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    // }
    // if (i === txt.length) {
    //     document.getElementById("info").innerHTML -= txt.charAt(i);
    //     i--;
    //     setTimeout(typeWriter, speed);
    // }
    // console.log(i);
}

window.onload = typeWriter;


// let speed = 100;

// let email = document.getElementById("emailAddress")
// let emailValue = document.getElementById("email_value")

// function getData() {
//     console.log(email.value)
//     emailValue.append(email.value)
    
// }
// console.log("Hello world!");