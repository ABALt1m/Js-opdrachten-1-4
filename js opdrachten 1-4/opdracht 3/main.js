//advanced
const password = 'h@ack3d'
const empty = "";
let answer = prompt('please type in your password .')

if (answer == null || answer == "") {
    alert('you have entered nothing')
} else if (answer == password) {
    alert('welcome user ')
}
else{
    alert('wrong password ')
}