let humanScore = 0,
    computerScore = 0;


const getComputerChoice = ()=>{
    const randomNumber = Math.random().toFixed(2);

    if(randomNumber <= 0.33){
       
        return "piedra";
    }
    else if(randomNumber <= 0.66){
        
        return "tijeras";
    }
    else{
      
        return "papel";
    }
   
}


const getHumanChoice = ()=>{
    const inputProperty = prompt("Eliga entre: piedra, papel o tijera");

    return inputProperty.toLowerCase();
}



const playRound = (humanChoice, computerChoice)=>{
    console.log(humanChoice,computerChoice);
    const rules = {
        piedra: { piedra: 'empate', tijeras: 'gana', papel: 'pierde' },
        tijeras: { piedra: 'pierde', tijeras: 'empate', papel: 'gana' },
        papel: { piedra: 'gana', tijeras: 'pierde', papel: 'empate' }
    };

    // Verificar el resultado utilizando el objeto de reglas
    const result = rules[humanChoice][computerChoice];

    
    // Actualizar puntajes y mostrar el mensaje basado en el resultado
    if (result === 'empate') {
        console.log("Empate, no se mueven los marcadores");
    } else if (result === 'gana') {
        humanScore++;
        console.log(`¡GANASTE! humano: ${humanScore} - computadora: ${computerScore}`);
    } else if (result === 'pierde') {
        computerScore++;
        console.log(`La computadora ganó, humano: ${humanScore} - computadora: ${computerScore}`);
    }

    alert(`Humano: ${humanScore} - Computadora: ${computerScore}`);
}
    




const playGame = ()=>{
    let i=0;
    while(i < 5){
        playRound(getHumanChoice(),getComputerChoice());
        i++;
    }
}

playGame();