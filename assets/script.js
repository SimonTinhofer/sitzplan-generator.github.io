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
    "Chirstina",
    "David",
    "Duha",
    "Elisaveta",
    "Illia",
    "Isa",
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
    nameList.push("leerer PLatz")
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

