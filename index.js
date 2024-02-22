const selectMenu = document.querySelector('#colours');
const btnGetresult = document.querySelector('button');
const resultArea = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');

btnGetresult.addEventListener('click', () => {
    const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
    let resultText  = " ";

    switch(userChoice)  {
        case 'red':
            resultText = 'You seek power and control.';
            break;
        case 'green':
            resultText = 'You are a natural visionary, non-conformist, and problem-solver kind of individual.';
            break;
        case 'yellow':
            resultText = 'You are an optimistic, fun-loving, cheery, creative kind of individual.';
            break;
        case 'blue':
            resultText = "You look for meaning and significance in life.";
            break;
        case 'pink':
            resultText = 'You are a playful, fun, easy-going, smart, genuine child-like, social butterfly kind of individual.';
        case 'black':
            resultText = 'You are a strong-willed, determined, confident, independent, risk-taker kind of individual.';
            break;
        default:
            resultText = 'You are an interesting and a secretive person.';
            break;
            



    }
    

    

    if(userChoice === 'other'){
        resultContainer.style.backgroundColor = '#777';
    }
    
    resultContainer.style.backgroundColor = userChoice;
    
    resultArea.innerHTML = resultText;
    
 
    console.log(resultText);

});

