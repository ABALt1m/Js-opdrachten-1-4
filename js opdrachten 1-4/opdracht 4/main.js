let items = [];
const text = document.querySelector('.text')

function addItem() {

    boxvalue = document.querySelector('#box').value;
    items.push(boxvalue);
    document.querySelector('.myForm').reset();
    text.innerHTML += items + "</br>"
    return false;
}

