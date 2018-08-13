const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');
const btnLogin = document.getElementById('login-button');

btnLogin.addEventListener('click', event => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(event => alert(event.message));  
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    window.location.assign('views/main.html');
  }
});

