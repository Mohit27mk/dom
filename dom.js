// var header =document.getElementById('main-header');
// header.style.border='solid 5px black';

// var addItem =document.getElementById('add-item');

// addItem.style.fontWeight='bold';
// addItem.style.color='green';

// var items =document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// var li =document.getElementsByTagName('li');
// li[2].style.backgroundColor='green';

// for(var i=0;i<li.length;i++){
//     li[i].style.color='purple';
// }

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';
// var thirdItem =document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility="hidden"

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// var secondItem=document.querySelectorAll('.list-group-item');

// secondItem[1].style.color='green';

var itemList =document.querySelector('#items');
// itemList.parentNode.style.backgroundColor='blue';

var helloText=document.createTextNode('Hello World');

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(helloText,h1);

var li=document.querySelector('li:nth-child(1)');
console.log(li);

itemList.insertBefore(helloText,li);

