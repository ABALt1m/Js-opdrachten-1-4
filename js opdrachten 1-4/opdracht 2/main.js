//advanced 
const btn = document.querySelector('.button')
const naam = document.querySelector('.name')

btn.addEventListener("click", ()=> {
    naam.innerHTML += "hello its me" 
})

//expert

const voorNaam = document.querySelector('.voornaam').value;
const achterNaam = document.querySelector('.achternaam').value;

const text = document.querySelector('.text')
const btn2 = document.querySelector('.btn')

let x = voorNaam+achterNaam;

btn2.addEventListener("click", ()=>{
   text.innerHTML = x;
})


