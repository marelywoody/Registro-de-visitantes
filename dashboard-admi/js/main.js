// Get a reference to the database service
const btnLogout = document.getElementById('btn-logout');
const database = firebase.database();

const getUserData = () => {
  database.ref().child('visitante').on('value', (snapshot) => {
    const dataUser = snapshot.val();
    for (let userUid in dataUser) {
      let name = dataUser[userUid].name;
      let email = dataUser[userUid].email;
      let date = dataUser[userUid].date;
      let company = dataUser[userUid].company;
      let companyPerson = dataUser[userUid].companyPerson;      
      printDataUser(name, email, company, companyPerson, date);
    }; 
  });
};
getUserData();

const printDataUser = (name, email, company, companyPerson, date) => {
  const root = document.getElementById('root'); 
  const card = document.createElement('div');
  const container = document.createElement('div');
  const namePerson = document.createElement('p');
  const emailPerson = document.createElement('p');
  const nameCompany = document.createElement('p');
  const personCompany = document.createElement('p');
  const datePerson = document.createElement('p');
  const photoPerson = document.createElement('img');
  const time = date;
  const timeToDate = new Date(time);

  card.className = 'card';
  container.className = 'container-info';
  namePerson.className = 'name-person';
  emailPerson.className = 'email-person';
  nameCompany.className = 'company';
  personCompany.className = 'company-person';
  photoPerson.className = 'photo-person';
  datePerson.className = 'date-person';

  photoPerson.src = '../assets/place-image.png' ;  
  namePerson.innerHTML = ' <i class="fas fa-user-circle"></i> Nombre: ' + name;
  emailPerson.innerHTML = '<i class="fas fa-edit"></i> Asunto: ' + email;
  nameCompany.innerHTML = '<i class="far fa-building"></i> Compañía: ' + company;
  personCompany.innerHTML = '<i class="fas fa-users"></i> Host: ' + companyPerson;
  datePerson.innerHTML = '<i class="far fa-clock"></i> Hora de registro: ' + timeToDate;
  container.appendChild(namePerson);
  container.appendChild(emailPerson);
  container.appendChild(nameCompany);
  container.appendChild(personCompany);
  container.appendChild(datePerson);
  card.appendChild(photoPerson);
  card.appendChild(container);
  root.appendChild(card);
};

btnLogout.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.assign('../index.html');
});

