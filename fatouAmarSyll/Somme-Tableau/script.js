//4. Calculer la somme des nombres dans un tableau
let tableau=[12,15.5,-12,02,50,-2]
let somme=0;
for(m=0; m< tableau.length; m++){
   somme=somme+tableau[m];
}
console.log(`la somme des nombres du tableau est:${somme }`);

let tableau2=[
    { 
     age:25,
     annee:1999 ,
     note:20, 
     taille:1.8 
    },
    { 
        age:27,
        annee:1914 ,
        note:20, 
        taille:1.9 
       },
       { 
        age:22,
        annee:2000 ,
        note:15, 
        taille:1.7 
       },
       { 
        age:15,
        annee:2002 ,
        note:20, 
        taille:1.6 
       },
       { 
        age:18,
        annee:2020 ,
        note:12, 
        taille:1.5 
       }
]
somme1=0;
somme2=0;
somme3=0;
for(l=0; l<tableau2.length; l++){
somme1=somme1+tableau2[l].note;
somme2=somme2+tableau2[l].taille;
somme3+=tableau2[l].age+tableau2[l].annee+tableau2[l].note+tableau2[l].taille;
console.log(tableau2[l]);
console.log(`la somme de la ligne est:${somme3 }`);
}
console.log(`la somme de la clonne taille est:${somme2 }`);
console.log(`la somme de la clonne note est:${somme1 }`);
