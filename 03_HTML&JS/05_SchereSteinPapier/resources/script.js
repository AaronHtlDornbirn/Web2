function registerEvents() {
    document.getElementById("schere").addEventListener("click", function () {
        playRound('schere', computerPlay());
    })
    document.getElementById("stein").addEventListener("click", function () {
        playRound('stein', computerPlay());
    }) 
    document.getElementById("papier").addEventListener("click", function () {
        playRound('papier', computerPlay());
    })    
}

function computerPlay() {
	const choices = ['schere', 'stein', 'papier'];
	const randomnum = Math.floor(Math.random() * choices.length);
	return choices[randomnum];
}

function playRound(playerSelection, computerSelection) {
	
	if ((playerSelection === 'schere' && computerSelection === 'papier') ||
		(playerSelection === 'stein' && computerSelection === 'schere') ||
		(playerSelection === 'papier' && computerSelection === 'stein')) {
        document.getElementById("ausgabe").innerHTML = `Du hast gewonnen! ${playerSelection} schlägt ${computerSelection}`;
       }
	
	else if ((playerSelection === 'schere' && computerSelection === 'stein') ||
		(playerSelection === 'stein' && computerSelection === 'papier') ||
		(playerSelection === 'papier' && computerSelection === 'schere')) {
            document.getElementById("ausgabe").innerHTML = `Der Computer hat gewonnen! ${computerSelection} schlägt ${playerSelection}`;
	}
	
	else {
        document.getElementById("ausgabe").innerHTML = `Unentschieden! Beide haben ${playerSelection} ausgewählt`;
	}
}



