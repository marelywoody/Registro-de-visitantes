// Get a reference to the database service
const database = firebase.database();


const getUserData = () => {
  database.ref().child('visitante').on('value', (snapshot) => {
    const dataUser = snapshot.val();
    for (let userUid in dataUser) {
      let name = dataUser[userUid].name;
      let email = dataUser[userUid].email;
      let date = dataUser[userUid].date;
      printDataUser(name, email, date);
    }; 
  });
};
getUserData();

const printDataUser = (name, email, date) => {
  const root = document.getElementById('root'); 
  const card = document.createElement('div');
  const container = document.createElement('div');
  const namePerson = document.createElement('p');
  const emailPerson = document.createElement('p');
  const datePerson = document.createElement('p');
  const photoPerson = document.createElement('img');
  const time = date;
  const timeToDate = new Date(time)

  card.className = 'card';
  container.className = 'container-info';
  namePerson.className = 'name-person';
  emailPerson.className = 'email-person';
  photoPerson.className = 'photo-person';
  datePerson.className = 'date-person';

  photoPerson.src = '../assets/place-image.png' ;  
  namePerson.innerHTML = 'Nombre: ' + name;
  emailPerson.innerHTML = 'Correo electrónico: ' + email;
  datePerson.innerHTML = 'Hora de registro: ' + timeToDate;
  container.appendChild(namePerson);
  container.appendChild(emailPerson);
  container.appendChild(datePerson);
  card.appendChild(photoPerson);
  card.appendChild(container);
  root.appendChild(card);
};

const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.assign('../index.html');
});