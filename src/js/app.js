let name = document.getElementById('name');
let date = document.getElementById('date');
let woman = document.getElementById('mujer');
let man = document.getElementById('hombre');
let get = document.getElementById('get');

get.addEventListener('click', event => { 
  getName = name.value;
  getDate = date.value;
  databases.registro(getName,getDate);
});