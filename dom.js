var header =document.getElementById('main-header');
header.style.border='solid 5px black';

var addItem =document.getElementById('add-item');

addItem.style.fontWeight='bold';
addItem.style.color='green';

var items =document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}