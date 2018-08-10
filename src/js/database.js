let database = firebase.database();
let company = 'https://raw.githubusercontent.com/marelywoody/Registro-de-visitantes/master/src/data/trabajadores.json';
let refData =  database.ref('/visitante/');
const getData = () => {
  fetch(company).then(res => res.json())
  .then((data) => {
    console.log(data);
  });
};

// const init = () => {
//   getData();
//   let refData =  database.ref('/visitante/');
// }

window.databases = {
  registro: (name) => {
   refData.push({
      name: name,
    });
  }
};

// window.onload =  init;