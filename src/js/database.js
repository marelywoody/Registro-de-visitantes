let database = firebase.database();
let company = 'https://raw.githubusercontent.com/marelywoody/Registro-de-visitantes/master/src/data/trabajadores.json';
let refData =  database.ref('/visitante/');

window.onload = () => {
  fetch(company).then(res => res.json())
  .then((data) => {
    console.log(data);
  });
};

window.databases = {
  registro: (name,email) => {
    refData.push({
      name: name,
      email: email
    });
  }
};