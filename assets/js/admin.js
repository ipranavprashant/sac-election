const electionList = document.querySelector("#election-list")
const analysis = document.querySelector('#analysis-graphs')
db.collection("admins").get().then((snapshot) => {
  console.log(snapshot.docs);
})

function renderCandidate(cand,index){
    let row= document.createElement("div");
    let cl = document.createElement("div");
    let box= document.createElement("div");
    let img = document.createElement("img");
    let name= document.createElement("h3");
    let branch= document.createElement("p");

    
    if(!index){
        cl.setAttribute("class","col-lg-4");
    }else{
        cl.setAttribute("class","col-lg-4 mt-4 mt-lg-0")
    }
    box.setAttribute("class","box");
    box.setAttribute("data-aos","fade-up");
    box.setAttribute("data-aos-delay","200");

    if(cand.gender == 'm'){
        img.setAttribute("src","assets/img/values-2.png")
    }
    else{
        img.setAttribute("src","assets/img/values-1.png")
    }
    img.setAttribute("class","img-fluid");
    img.setAttribute("alt","");
    name.textContent = "(" + cand.batch + ") " + cand.name;
    branch.textContent = cand.branch;

    box.appendChild(img);
    box.appendChild(name);
    box.appendChild(branch);
    cl.appendChild(box);

    return cl
}
function renderElectionHeader(election){

    let header = document.createElement("header");
    let name = document.createElement("h2");
    name.textContent = election.name;
    let br= document.createElement("br");
    header.setAttribute("class","section-header");
    header.appendChild(br);
    header.appendChild(br);
    header.appendChild(name);
    return header;
}
/*
<div class="col" data-aos="zoom-in" data-aos-delay="100" test-align-center>
            <div class="addbutton">
              <a id="ss" href="#ss" class="btn-buy" onclick="voteSS()">Add contestant</a>
            </div>
          </div>
*/
function renderElectionCandidates(election ){
    console.log(election);
    let container = document.createElement("div");
    let name = document.createElement("p");
    let br= document.createElement("br");
    container.setAttribute("class", "row justify-content-center");


    for(var i=0; i < election.election.candidates.length; i++){
        container.appendChild(renderCandidate(election.election.candidates[i],i));
    }
    let button = document.createElement("div");
    button.setAttribute("class","col");
    button.setAttribute("data-aos","zoom-in");
    button.setAttribute("data-aos-delay","100");
    button.setAttribute("test-align-center");
    let  addbutton = document.createElement("div");
    addbutton.setAttribute("class","addbutton");
    let  tb = document.createElement("a");
    tb.setAttribute("id","ss"+election.election.name);
    tb.setAttribute("id","ss"+election.election.name);
    console.log(container);
    return container;
}

function renderDoc(elections){
    let e = document.createElement("div");
    let br= document.createElement("br");
    
    e.setAttribute("class","container");

    e.setAttribute("data-aos","fade-up");
    for( var i =0; i< Object.keys(elections).length; i++){
        e.appendChild(renderElectionHeader(elections[i]));
        e.appendChild(renderElectionCandidates(elections[i]));
        e.appendChild(br);
        let x = document.createElement("canvas");
        x.setAttribute("id","graph"+i);
        x.setAttribute("width","130");
        x.setAttribute("height","130");
        e.appendChild(x);
    }

    return e;
    
}
function makeGraph(election,index){
    var ctx = document.getElementById('graph'+i).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '# of Votes',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    for(var i=0; i< election.election.candidates.lenght; i++){
        myChart.labels.append(election.election.candidates[i].name);
        myChart.datasets.data.append(election.election.candidates[i].votes);
    }

}
function makeallGraph(elections){
    for( var i =0; i< Object.keys(elections).length; i++){
        makeGraph(election[i],i);
    }
}

db.collection("elections").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        electionList.appendChild(renderDoc(doc.data("elections").elections));
    });
    snapshot.docs.forEach(doc =>{
        makeallGraph(doc.data("elections").elections)
    })

})
