/*var favouriteBook=[]
function addFavouriteBook(bookName){
    if(bookName.includes("Great")){

    }
    else
     favouriteBook.push(bookName)

}
function favouritebook(){
    console.log("Favourite Books are: "+favouriteBook.length)
    for(book of favouriteBook){
        console.log(book)
    }
}
addFavouriteBook("The  Book");
addFavouriteBook("The Great Book");
addFavouriteBook("Harry Porter");
addFavouriteBook("The naria  Book");
favouritebook();*/
// var teacher="foo"
// function hey(){
//     teacher="suzy"
//    var topic ="react"
//     console.log("welcome")
// }
// hey();
// console.log(teacher)
// console.log(topic)
/*function play(){
    console.log(this)
}
play();
console.log(this)
var person={
    play1(){
        console.log(this)
    }
}
person.play1()*/
/*var pts=0
var c=document.getElementById("Q1")
function myfunc(){
    if(c.value=="bjarne stroustrup"){
     alert("You got it right") 
     pts=pts+10  
    }
    else
    alert("You are wrong")
}
var u=document.getElementById("Q2")
function myfunc1(){
    if(u.value=="dennis ritchie"){
     alert("You got it right") 
     pts=pts+10  
    }
    else
    alert("You are wrong")
}
var d=document.getElementById("Q3")
function myfunc2(){
    if(d.value=="james gosling"){
     alert("You got it right") 
     pts=pts+10  
    }
    else
    alert("You are wrong")
}
var e=document.getElementById("Q4")
function myfunc3(){
    if(e.value=="brendon eich"){
     alert("You got it right") 
     pts=pts+10  
    }
    else
    alert("You are wrong")
}
var f=document.getElementById("Q5")
function myfunc4(){
    if(f.value=="guido van rossum"){
     alert("You got it right") 
     pts=pts+10  
    }
    else
    alert("You are wrong")
}
function check(){
    alert("You Scored: "+ pts)
}*/

//For GET Request use this-https://jsonplaceholder.typicode.com/todos/1
/*function fetch(){
    const xhr=new XMLHttpRequest();
    //Get method
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
   //post method
  // xhr.open('POST','http://dummy.restapiexample.com/api/v1/employee/1',true)
  // xhr.getResponseHeader('content-type','application/json')
    let y=document.getElementById('hello')
    xhr.onload=function(){
        //console.log(this.responseText);
        let obj=(this.responseText);
        console.log(obj)
        y.innerHTML=obj;
    }
   // params=`{"name":"aniket12","salary":"0","age":"87"}`
    
//xhr.send(params)
xhr.send()
console.log("API Completed")
}*/
/*let url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
*/
//TO DO List using Vanilla JS
/*
var y=document.getElementById("append")
var x=document.getElementById("btn")
function list(){
   var q=document.createElement("li")
   var f=document.createTextNode(y.value)
   q.appendChild(f);
   document.getElementById("list").appendChild(q)
}
*/
//Playing with Github API
//Public API-https://api.github.com/users
//omdb API-http://www.omdbapi.com/?i=tt3896198&apikey=d77486ed'
//http://www.omdbapi.com/?t=Hero&apikey=d77486ed
/*document.getElementById('btn').addEventListener('click',loadusers)
let v=document.getElementById('input').nodeValue
let url=new URL('http://www.omdbapi.com/')



url.searchParams.set('t',v)
url.searchParams.set('apikey','d77486ed')*/

function Encryption(){
    // var b="Hero"
    // let x=url

    // var xhr=new XMLHttpRequest();
    // xhr.open('GET',url,true)//true-aysn
    // xhr.onprogress=()=>{
    //     console.log("On progress")
    // }
    // xhr.onload=function(){
    //    var output=JSON.parse(this.responseText);
      
       
    //    console.log(output)
    // }
  
    // xhr.send()
    // 
    let input=document.getElementById("input")
    let btn=document.getElementById("btn")
    let encrypted=document.getElementById("encrypted")
    let decrypted=document.getElementById("decrypted")
    let Password=String(input.value)
    let Encry=Password.split("")
    for(let u=0;u<Encry.length;u++){
        let q=Math.random()
        Encry[u]=q
    }

    encrypted.innerHTML="Encrypted Data:- "+Encry.join("");
    decrypted.innerHTML="Decrypted Data:- "+Password
}

/*for(let i=0;i<1000;i++){
    console.log(i)
}
console.log("Hello world")*/
/*console.table({name:{ //In table form
    firstName:"Aniket",
    lastName:"Singh"
},age:25,
addr:"kamatwade"})
console.warn("This is warning")//This is warning
var a="aniket"
let b="pushkar"

function ani(){
    // console.log(a)
    a="singh"
    b="khadas";
    console.log(b)
}
ani();
console.log(a)
console.log(b)
 */