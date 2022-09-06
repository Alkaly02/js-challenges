let number =[1,2,3,4,5,6,7,8,9,10]
const pair = document.getElementById('pair')

for(let i = 0 ; i<=number.length;i++){
    if (i%2===0){
        pair.innerHTML += i + ' ';
    }
}
