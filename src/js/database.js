let database = firebase.database();
let company = 'https://raw.githubusercontent.com/marelywoody/Registro-de-visitantes/master/src/data/trabajadores.json';

window.onload = () => {
  fetch(company).then(res => res.json())
  .then((data) => {
    console.log(data);
  });
};

window.databases = {
  registro: (name, date) => {
    database.ref('/visitante/').push({
      name: name,
      date: date
    });
  }
};