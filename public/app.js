document.addEventListener("DOMContentLoader", event => {
    const app = firebase.app();
});

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
function voteGS() {
    if(gs==0) {
        gs=1;
        }
      else {
        alert("Already voted");
        gs=gs+1; }
}
var ss = 0;
function voteSS() {
    if(ss==0) {
        ss=1;
        }
      else {
        alert("Already voted"); }
}
var aas = 0;
function voteAAS() {
    if(aas==0) {
        aas=1;
        }
      else {
        alert("Already voted"); }
}
var js = 0;
function voteJS() {
    if(js==0) {
        js=1;
        }
      else {
        alert("Already voted"); }
}
var ras = 0;
function voteRAS() {
    if(ras==0) {
        ras=1;
        }
      else {
        alert("Already voted"); }
}


let btngs = document.querySelector('#gs');
btngs.addEventListener('click', () => btngs.style.backgroundColor='#4154f1')

let btnss = document.querySelector('#ss');
btnss.addEventListener('click', () => btnss.style.backgroundColor='#4154f1')

let btnaas = document.querySelector('#aas');
btnaas.addEventListener('click', () => btnaas.style.backgroundColor='#4154f1')

let btnfs = document.querySelector('#fs');
btnfs.addEventListener('click', () => btnfs.style.backgroundColor='#4154f1')

let btnras = document.querySelector('#ras');
btnras.addEventListener('click', () => btnras.style.backgroundColor='#4154f1')