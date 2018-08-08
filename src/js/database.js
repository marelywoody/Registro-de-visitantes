let database = firebase.database();

window.databases = {
  registro: (name, date) => {
    database.ref('/visitante/').push({
      name: name,
      date: date
    });
  }
};