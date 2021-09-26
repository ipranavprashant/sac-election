document.addEventListener("DOMContentLoader", event => {
    const app = firebase.app();
});

///////////////////////////////////////////////////////////

const firebaseConfig = {
  apiKey: "AIzaSyASGk2VsvJY39KxIEk7aaJKtmyNG_fbpuM",
  authDomain: "sac-elections-5852c.firebaseapp.com",
  projectId: "sac-elections-5852c",
  storageBucket: "sac-elections-5852c.appspot.com",
  messagingSenderId: "616925625510",
  appId: "1:616925625510:web:40fa57e4fee59877b14867",
  measurementId: "G-V62HBHM6CG"
};

firebase.initializeApp(firebaseConfig);
let cloudDB = firebase.firestore();

/////////////////////////////////////////////////////////





function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            location.href = 'voting.html';
            console.log(user)
        })
        .catch(console.log)
    }
var gs = 0;
function voteGS(id) {
    if(gs==0) {
        gs=1;
        }
      else{
        alert("Already voted"); }
}

function update_fields() {
  cloudDB.collection('Voters').doc('cand1').update({votes: '100'})
}
var ss = 0;
function voteSS(id) {
    if(ss==0) {
        ss=1;
        }
      else {
        alert("Already voted"); }
}
var aas = 0;
function voteAAS(id) {
    if(aas==0) {
        aas=1;
        }
      else {
        alert("Already voted"); }
}
var js = 0;
function voteJS(id) {
    if(js==0) {
        js=1;
        }
      else {
        alert("Already voted"); }
}
var ras = 0;
function voteRAS(id) {
    if(ras==0) {
        ras=1;
        }
      else {
        alert("Already voted"); }
}


//let btngs1 = document.querySelector('#gs1');
//btngs1.addEventListener('click', () => btngs1.style.backgroundColor='#4154f1')
//let btngs2 = document.querySelector('#gs2');
//btngs2.addEventListener('click', () => btngs2.style.backgroundColor='#4154f1')
//let btngs3 = document.querySelector('#gs3');
//btngs3.addEventListener('click', () => btngs3.style.backgroundColor='#4154f1')

//let btnss = document.querySelector('#ss');
//btnss.addEventListener('click', () => btnss.style.backgroundColor='#4154f1')
//
//let btnaas = document.querySelector('#aas');
//btnaas.addEventListener('click', () => btnaas.style.backgroundColor='#4154f1')
//
//let btnfs = document.querySelector('#fs');
//btnfs.addEventListener('click', () => btnfs.style.backgroundColor='#4154f1')
//
//let btnras = document.querySelector('#ras');
//btnras.addEventListener('click', () => btnras.style.backgroundColor='#4154f1')