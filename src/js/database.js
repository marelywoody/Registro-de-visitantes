let database = firebase.database();
let company = 'https://raw.githubusercontent.com/marelywoody/Registro-de-visitantes/master/src/data/trabajadores.json';
let refData = database.ref('/visitante/');

window.onload = () => {
  fetch(company).then(res => res.json())
  .then((data) => {
    drawCompany(data);
    drawPerson(data);
  });
};

window.databases = {
  registro: (name, email, company, companyPerson,getDate) => {
    refData.push({
      name: name,
      email: email,
      company: company,
      companyPerson: companyPerson,
      date: getDate
    });
  },
  getRegistry: () => {
    refData.on('child_added', snapshot => {
      const drawName = snapshot.val().name;
      // console.log(drawName(drawName.length()-1));
    });
  }
};