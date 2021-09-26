const electionList = document.querySelector("#election-list")
db.collection("admins").get().then((snapshot) => {
  console.log(snapshot.docs);
})
/*
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <p>Candidates</p>
          <br>
          <br>
          <h2>General Secretary (GS)</h2>
        </header>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/values-1.png" class="img-fluid" alt="">
              <h3>Aleena Joseph</h3>
              <p>Chemical Engineering</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/values-1.png" class="img-fluid" alt="">
              <h3>Anu Joseph</h3>
              <p>Electrical and Electronics Engineering</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/values-2.png" class="img-fluid" alt="">
              <h3>Ashish Toby</h3>
              <p>Mechanical Engineering</p>
            </div>
          </div>
     </div>
*/      
function renderCandidate(cand){

    let row= document.createElement("div");
    let cl = document.createElement("div");
    let box= document.createElement("div");
    let img = document.createElement("img");
    let name= document.createElement("h3");
    let branch= document.createElement("p");

    row.setAttribute("class","row");
    cl.setAttribute("class","col-lg-4");
    box.setAttribute("class","box");
    box.setAttribute("data-aos","fade-up");
    box.setAttribute("data-aos-delay","200");

    if(cand.data().gender == 'm'){
        img.setAttribute("src","assets/img/values-2.png")
    }
    else{
        img.setAttribute("src","assets/img/values-1.png")
    }
    name.textContent = "(" + cand.data().batch + ")" + cand.data().name;
    branch.textContent = cand.data().branch;

    row.appendChild(cl);
    cl.appendChild(box);
    box.appendChild(img);
    box.appendChild(h3);
    box.appendChild(branch);

    console.log(row);
}
function renderElection(election ){
    console.log(election);
}
function renderDoc(elections){
    for( var i =0; i< Object.keys(elections).length; i++){
        renderElection(elections[i]);
    }
}
db.collection("elections").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDoc(doc.data("elections").elections);
    });

})