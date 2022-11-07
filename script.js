const image_input = document.querySelector("#image_input");
var uploaded_image = "";
const ul = document.querySelector(".myclass");
const input = document.getElementById('item');
const greece = document.getElementById('Greece');
const brazil = document.getElementById('Brazil');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];


image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#displayImage").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

var root = document.documentElement;
const lists = document.querySelectorAll('.hs');lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

itemsArray.forEach(divMakerB);
function divMakerB (text){
    const div = document.createElement('div');
    div.innerHTML = text;
    ul.appendChild(div);
    div.id = "Brazil";
}

function addB(){
    itemsArray.push(brazil.innerHTML);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    divMakerB(brazil.innerHTML);
}

function addG(){
    itemsArray.push(greece.innerHTML);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    divMakerG(greece.innerHTML);
}

function delB(){
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
}
