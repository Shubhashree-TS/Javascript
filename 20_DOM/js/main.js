console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent="Hello";

console.log(document.forms);
console.log(document.links);
console.log(document.images);



//getelementbyid
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle);
console.log(headerTitle.textContent="Hello");
headerTitle.style.borderBottom = "solid 3px #000";
//comment

//getelementsbyclassname
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent ="hello 2"
items[1].style.fontWeight="bold"
items[1].style.backgroundColor="yellow"


for(i=0;i<items.length;i++){
    items[i].style.backgroundColor = "grey";
}


//getelementsbytagname
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent ="hello 2"
li[1].style.fontWeight="bold"
li[1].style.backgroundColor="yellow"

for(i=0;i<li.length;i++){
    li[i].style.backgroundColor = "grey";
}

var input = document.querySelector("input");
input.value="Hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue";


var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "coral";


//queryselectorall
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(i=0;i<odd.length ;i++){
    odd[i].style.backgroundColor = "grey"
    even[i].style.backgroundColor = "green"
}





//traversing the DOM//
var itemList = document.querySelector("#items");
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "grey";
console.log(itemList.parentNode.parentNode);


//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "grey";
console.log(itemList.parentElement.parentElement);

//childnodes
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello 1";
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 1";

//siblings
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);


//previous sibling 
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//create element

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = "hello";
//add id
newDiv.id = "hello1";
//add attr
newDiv.setAttribute('title',"hello Div");
//create text 
var newDivText = document.createTextNode("helloworld");
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.backgroundColor = "white";
newDiv.style.color = "black";
console.log(newDiv);
newDiv.style.fontSize ='30px';

container.insertBefore(newDiv, h1);