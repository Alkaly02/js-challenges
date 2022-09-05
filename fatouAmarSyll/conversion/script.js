
// 3 :Créer une fonction de conversion de longueur
// une conversion de kilomètres en miles
const conversion=()=>{ 
const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers est equivalant a ${miles} miles.`);

}
conversion();



