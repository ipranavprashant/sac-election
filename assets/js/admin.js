const electionList = document.querySelector("#election-list")
db.collection("admins").get().then((snapshot) => {
  console.log(snapshot.docs);
})
function renderCandidate(cand){

}
function renderElection(doc){
    let li = document.createElement("li");
    let name = document.createElement("span");

    li.setAttribute('data-id',doc);
    name.textContent = doc.data().name;
    li.appendChild(name);
    console.log(name);
    electionList.appendChild(li);

    
}
db.collection("elections").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderElection(doc);
    });

})