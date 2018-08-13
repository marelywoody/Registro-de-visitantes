const name = document.getElementById('name');
const btnData = document.getElementById('btn-data');
const email = document.getElementById('email');

btnData.addEventListener('click', event => { 
  getName = name.value;
  getEmail = email.value;
  const getDate = (new Date).getTime();
  databases.registro(getName, getEmail, getDate);
  window.location.assign('../src/views/view.html');
});