  
let nameList = [
    " Amro",
    " Alexandra",
    " Andrea",
    " Baran",
    " Kristina",
    " David",
    " Duha",
    " Elizaveta",
    " Isabel",
    " Karolina",
    " Leon",
    " Lorand",
    " Malin",
    " Mona",
    " Philipp",
    " Simon",
    " Vlada",
    " Vladimir",
    " Yasin",
    " Illia"
]

let TableList = [ 
    [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
    ],

    [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""]
    ], 

    [
        ["", ""],
        ["", ""]
    ]
]



var nrOfPlaces = 0;
for(const col of TableList){
    for (const table of col){
        nrOfPlaces += table.length;
    }
}

var nrOfStudents = nameList.length;

console.log(nrOfPlaces)
while(nrOfStudents < nrOfPlaces)
{
    nameList.push("leerer Platz")
    var nrOfStudents = nameList.length;
}

// Array mischen

function shuffleArray(array) {
    let currentIndex = array.length;
  
    while (--currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
function createPlan(){
    shuffleArray(nameList)
    console.log(nameList);  
        let s = 0;
    
        for(let i = 0; i < TableList.length; i++){
        for (let j = 0; j < TableList[i].length; j++){
                TableList[i][j] = Array(nameList[s], nameList[s+1]) // Was ist dann bei Tischen die nicht 2 plätze haben? 
                
                s += 2;
            }
    }
    document.getElementById('t00').textContent = TableList[0][0];
    document.getElementById('t01').textContent = TableList[1][0];
    document.getElementById('t02').textContent = TableList[2][0];
    document.getElementById('t10').textContent = TableList[0][1];
    document.getElementById('t11').textContent = TableList[1][1];
    document.getElementById('t12').textContent = TableList[2][1];
    document.getElementById('t20').textContent = TableList[0][2];
    document.getElementById('t21').textContent = TableList[1][2];
    document.getElementById('t30').textContent = TableList[0][3];
    document.getElementById('t31').textContent = TableList[1][3];
    specialPLan = false;
}
  


