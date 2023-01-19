// // var header =document.getElementById('main-header');
// // header.style.border='solid 5px black';

// // var addItem =document.getElementById('add-item');

// // addItem.style.fontWeight='bold';
// // addItem.style.color='green';

// // var items =document.getElementsByClassName('list-group-item');
// // items[2].style.backgroundColor='green';

// // for(var i=0;i<items.length;i++){
// //     items[i].style.fontWeight='bold';
// // }

// // var li =document.getElementsByTagName('li');
// // li[2].style.backgroundColor='green';

// // for(var i=0;i<li.length;i++){
// //     li[i].style.color='purple';
// // }

// // var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor='green';
// // var thirdItem =document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.visibility="hidden"

// // var odd = document.querySelectorAll('li:nth-child(odd)');

// // for(var i=0;i<odd.length;i++){
// //     odd[i].style.backgroundColor='green';
// // }

// // var secondItem=document.querySelectorAll('.list-group-item');

// // secondItem[1].style.color='green';

// var itemList =document.querySelector('#items');
// // itemList.parentNode.style.backgroundColor='blue';

// var helloText=document.createTextNode('Hello World');

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// container.insertBefore(helloText,h1);

// var li=document.querySelector('li:nth-child(1)');
// console.log(li);

// itemList.insertBefore(helloText,li);

// var itemList=document.getElementById('items');

// itemList.addEventListener('click',removeItem);

// var form=document.getElementById('addForm');

// form.addEventListener('submit',addItem);

// function addItem(e){
//     e.preventDefault();

//     var newItem=document.getElementById('item').value;
//         var newItem=document.getElementById('item').value;
//     var newItem1=document.getElementById('description').value;
//     var li=document.createElement('li');
//     li.className='list-group-item';
// var _text=document.createTextNode(newItem+'\n'+newItem1);
//     var _pre = document.createElement("pre");
//     _pre.appendChild(_text);

//    li.appendChild(_pre)
//     itemList.appendChild(li);
// }




// function removeItem(e){
// if(e.target.classList.contains('delete')){
//     if(confirm('Are you sure'))
// {
//     var li=e.target.parentElement;
//     itemList.removeChild(li);
// }}
// }

// var editBtn=document.createElement('button');
// editBtn.className='btn btn-primary btn-sm  edit';
// editBtn.appendChild(document.createTextNode('edit'));



//     var li=document.querySelector('li:nth-child(1)');
//     li.appendChild(editBtn);
   
//     var filter =document.getElementById('filter');

//     filter.addEventListener('keyup',filterItems);

//     function filterItems(e){
//         var text=e.target.value.toLowerCase();
//         var items=itemList.getElementsByTagName('li');
//         Array.from(items).forEach(function(item){
//         var itemName=item.firstChild.textContent;
//         if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
//             item.style.display='block';
//         }else{
//             item.style.display='none';
//         }
//         });
//     }


const myForm=document.querySelector('#my-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');




// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    let myobj={
        'name':nameInput.value,
        'Email':emailInput.value
    }
    
    let myobjs=JSON.stringify(myobj);
    localStorage.setItem(emailInput.value,myobjs);
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm  delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);
    
    deleteBtn.onclick=()=>{
        localStorage.removeItem(myobj.Email);
        userList.removeChild(li);
    } 

   
    nameInput.value = '';
    emailInput.value = '';
  }
}

