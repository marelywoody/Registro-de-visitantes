const name = document.getElementById('name');
const btnData = document.getElementById('btn-data');
const email = document.getElementById('email');
const companys = document.getElementById('company');
const companyPerson = document.getElementById('company-person');

drawCompany = (data) => {
  let companySelect = '';
  for (i in data) {
    getCompany = Object.keys(data[i]);
    getCompany.forEach(element => {
      companySelect += `<option value= "${element}">${element}</option>`;
    });
  }
  companys.innerHTML = ` <option disabled selected>Seleccione la empresa</option>${companySelect}`;
  companyPerson.remove(companyPerson.selectedIndex);
};

drawPerson = (data) => {
  let person;
  companyPerson.innerHTML = '<option disabled selected> Selecciona a la persona que viene a visitar</option>';
  companys.addEventListener('change', event => {
    for (let i = 0; companyPerson.length > 0; i++) {
      companyPerson.remove(companyPerson);
    }
    companyPerson.innerHTML = '<option disabled selected> Selecciona a la persona que viene a visitar</option>';
    for (i in data) {
      const getPerson = data[i];
      let companyValue = companys.value;
      companyValue = getPerson[companyValue];
      Object.values(companyValue).forEach((element) => {
        let name = '';
        name = element['nombre:'];
        let prue = name;
        console.log(prue);
        person = document.createElement('option');
        person.setAttribute('value', name);
        person.appendChild(document.createTextNode(name));
        document.getElementById('company-person').appendChild(person);
      });
    }
  });
};

btnData.addEventListener('click', event => { 
  const getName = name.value;
  const getEmail = email.value;
  const getCompany = companys.value;
  const getPerson = companyPerson.value;
  const getDate = (new Date).getTime();
  if (getName !== '' && getEmail !== '' && getCompany !== 'Seleccione la empresa' && getPerson !== 'Selecciona a la persona que viene a visitar') {
    databases.registro(getName, getEmail, getDate, getCompany, getPerson);
    window.location.assign('../src/views/view.html');
  } else {
    alert('Complete el registro');
  }
});