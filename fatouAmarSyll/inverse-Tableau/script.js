
//5. Créez une fonction qui inverse un tableau
let inverse=[12,15.5,312,02,50,22]
console.log(`l'inverse du tableau est:`);
console.log(inverse.reverse());

//6.Trier un tableau du plus bas au plus haut avec des nombres entiers
let TriTab=[12,15,312,02,50,22,20]

TriTab.sort((a,b)=>{
   console.log(`${a}-${b}`);
   return a-b;
})
console.log(TriTab); 
//6.Trier un tableau du plus bas au plus haut avec des nombres négatifs
let TriTabNegatif=[-12,-15,-312,-02,-50,-22]

//6.Trier un tableau du plus bas au plus haut avec des décimaux