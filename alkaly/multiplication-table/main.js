const multiplicationTable = []
const singleTable = []
const multiplication = () => {
    for(let i = 1; i <= 12; i++){
        singleTable.length = 0
        for(let j = 1; j <= 10; j++){
            singleTable.push(i * j)
        }
        multiplicationTable.push([...singleTable])
    }
}
multiplication()
console.log(multiplicationTable, singleTable);