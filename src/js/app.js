let name = document.getElementById('name');
let get = document.getElementById('get');

get.addEventListener('click', event => { 
  getName = name.value;
  databases.registro(getName);
  window.location.assign('../src/views/view.html');
});
