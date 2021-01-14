function Encryption(){
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

