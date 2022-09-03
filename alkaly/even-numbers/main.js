let evenNumbers = []
let starterNumber = 10
const evenNumbersContainer = document.getElementById('even-numbers')

const isEven = () => {
    for(let i = 2; i <= starterNumber; i++){
        if(i % 2 === 0){
            evenNumbers.push(i)
        }
    }
}

isEven()
evenNumbersContainer.innerHTML = evenNumbers.join(', ')

// console.log(isEven(), evenNumbers);