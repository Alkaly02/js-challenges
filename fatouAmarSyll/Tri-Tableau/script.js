//6 1.Trier un tableau du plus bas au plus haut avec des nombres entiers
let TriTab=[12,15,312,02,50,22,20]
TriTab.sort((a,b)=>{
   console.log(`${a}-${b}`);
   return a-b;
})
console.log(TriTab); 
//6 2.Trier un tableau du plus bas au plus haut avec des nombres négatifs
let TriTabNegatif=[-12,-15,-312,-02,-50,-22]

//6 3.Trier un tableau du plus bas au plus haut avec des décimaux