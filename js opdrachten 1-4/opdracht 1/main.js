//advanced
const volNaam = 'anas bal'

const array = volNaam.split(" ")


for (let index = 0; index < array.length; index++) {
    array[index] = array[index].charAt(0).toUpperCase()+array[index].slice(1);
    
}
const volNaam2 = array.join(" ");
console.log(volNaam2);

//expert
const naam = prompt('wat is je naam')

const arr = naam.split(" ")

for (let i = 0; i < array.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);   
}



const naam2 = arr.join(" ")
console.log(naam2);

