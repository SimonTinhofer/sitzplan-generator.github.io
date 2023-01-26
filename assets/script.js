/*
class Table {

    constructor(length){
        this.students = new Array(length);
    }


    get length(){
        return this.students.length;
    }

    getStudent(index){
        return this.students[index];
    }
}

class Room {
    // [[2,2,2] , [2,2,2], [2,2,2,2]]
    constructor(structure){

    }

    getTable()
}


*/



  
let nameList = [
    "Amro",
    "Alexandra",
    "Andrea",
    "Baran",
    "Kristina",
    "David",
    "Duha",
    "Elizaveta",
    "Illia",
    "Isabel",
    "Karolina",
    "Leon",
    "Lorand",
    "Malin",
    "Mona",
    "Philipp",
    "Simon",
    "Vlada",
    "Vladimir",
    "Yasin"
]


let TableList = [ 
    [
        ["",""],
        ["",""],
        ["",""],
        ["",""],
        ["",""]
    ],

    [
        ["",""],
        ["",""],
        ["",""],
        ["",""]
    ], 

    [
        ["",""],
        ["",""]
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
    console.log("Juhu")
    nameList.push("leerer Platz")
    var nrOfStudents = nameList.length;
}
console.log(nameList)


// Array mischen

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array
}


function changeColor(newColor) {
    shuffle(nameList)
    console.log(nameList)
    
    // Schülernamen aus array ziehen und plätze einzeln durchlaufen
    let s = 0;
    for(let i = 0; i < TableList.length; i++){
        for (let j = 0; j < TableList[i].length; j++){
            TableList[i][j] = Array(nameList[s], nameList[s+1]) // Was ist dann bei Tischen die nicht 2 plätze haben? 
            s += 2;
        }
    }
    console.log(TableList)
    const elem0 = document.getElementById('t00');
    elem0.textContent = TableList[0][0]
    const elem1 = document.getElementById('t01');
    elem1.textContent = TableList[1][0]
    const elem2 = document.getElementById('t02');
    elem2.textContent = TableList[2][0]
    const elem3 = document.getElementById('t10');
    elem3.textContent = TableList[0][1]
    const elem4 = document.getElementById('t11');
    elem4.textContent = TableList[1][1]
    const elem5 = document.getElementById('t12');
    elem5.textContent = TableList[2][1]
    const elem6 = document.getElementById('t20');
    elem6.textContent = TableList[0][2]
    const elem7 = document.getElementById('t21');
    elem7.textContent = TableList[1][2]
    const elem8 = document.getElementById('t30');
    elem8.textContent = TableList[0][3]
    const elem9 = document.getElementById('t31');
    elem9.textContent = TableList[1][3]
    const elem10 = document.getElementById('t40');
    elem10.textContent = TableList[0][4]
    
    
  }


