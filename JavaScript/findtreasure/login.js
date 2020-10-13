var firebaseConfig = {
    apiKey: "AIzaSyBf5-qUD5HcuOSmNTqe558Gl6CMoUQEZys",
    authDomain: "juegos-aac5a.firebaseapp.com",
    databaseURL: "https://juegos-aac5a.firebaseio.com",
    projectId: "juegos-aac5a",
    storageBucket: "juegos-aac5a.appspot.com",
    messagingSenderId: "380851923773",
    appId: "1:380851923773:web:bd024c08e4cc3844f1b354"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const usuario = document.getElementById('usuario');

document.getElementById('acceder').style.display = 'none';

usuario.addEventListener('submit', async e => {
    e.preventDefault();
    
    const name = usuario["nombre"].value;
    const score = 8;

    await guardaScore(name, score);   
    ocultar(); 
})

const guardaScore = (name, score) =>
    db.collection('rank').doc().set({
        name,
        score
    });

function ocultar() {
    document.getElementById('usuario').style.display = 'none';
    document.getElementById('acceder').style.display = 'block';
    
}