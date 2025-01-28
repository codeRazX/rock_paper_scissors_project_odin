let humanScore = 0,
    computerScore = 0;
    round = 0;

const container = document.querySelector(".container");
const winner = document.getElementById("winner");
const resultText = document.querySelector(".result");
const score = document.querySelector(".score");

document.addEventListener("DOMContentLoaded", listeners);

function listeners(){

    container.addEventListener("click", playGame);
    setTimeout(()=> alert("Eliga una opción para comenzar a jugar"),1000)
   
}

const playGame = (e)=>{
   
    if(e.target && e.target.tagName ==="BUTTON"){
        if(round < 5){
            const optionHuman = e.target.dataset.accion;
            const optionMachine = getComputerChoice();
            playRound(optionHuman,optionMachine);  
        }
        else{
            if(humanScore === computerScore){
                winner.textContent = "!Empatasteis!";
            }
            else if(humanScore > computerScore){
                winner.textContent = "!El jugador gana!";
            }
            else{
                winner.textContent = "!La máquina gana!";
            }
           resultText.textContent = "";
           setTimeout(()=>{
            const reset = confirm("¿Desea jugar una nueva partida?")

            reset ? location.href = "index.html" : false;
           }, 2000)
           

          
        }
      
    }
}
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


const playRound = (humanChoice, computerChoice)=>{
   
    const rules = {
        piedra: { piedra: 'empate', tijeras: 'gana', papel: 'pierde' },
        tijeras: { piedra: 'pierde', tijeras: 'empate', papel: 'gana' },
        papel: { piedra: 'gana', tijeras: 'pierde', papel: 'empate' }
    };

    const result = rules[humanChoice][computerChoice];
    
    
   updateResult(transformLower(result),humanChoice,computerChoice);
   round++;
}
    
const transformUpper = text => text.charAt(0).toUpperCase() + text.slice(1);   
const transformLower = text => text.toLowerCase();

const updateResult = (result, human,computer)=>{
   
    if (result === 'empate') {
        winner.textContent = "Empate, no se mueven los marcadores";

    } else if (result === 'gana') {
        humanScore++;
        winner.textContent = "¡El jugador gana!";
      
    } else if (result === 'pierde') {
        computerScore++;
        winner.textContent = "¡La máquina gana!";
    }
   
    resultText.textContent = `${transformUpper(human)} VS ${transformUpper(computer)}`;
    score.textContent = `Jugador: ${humanScore} | Máquina: ${computerScore}`;
}



