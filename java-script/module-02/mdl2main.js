let userInput
const numbers = []
let total = 0;
do{
    userInput = prompt('Введіть будь ласка число!');

    if(isNaN(userInput)){
        alert('Було введено не число, спробуйте ще раз')
        continue
    }
    
    if(userInput === null) break

    numbers.push(Number(userInput))
}while (userInput !== null);



if(numbers.length > 0){
    for(let key of numbers){
        total += key;
    }
  alert(`Загальна сума дорівнює ${total}` );
}

