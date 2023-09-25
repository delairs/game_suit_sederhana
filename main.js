class Start {
    constructor(){
        this.winner ="";
        this.playerName = "Kamu";
        this.botName = "Suitbot";
        this.playerOption;
        this.botOption;
    }

    set setBotOption(option){
        this.botOption = option;
    }

    set setPlayerOption(option){
        this.playerOption = option;
    }

    botBrain() { 
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winningCondition() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!`;
        } else {
            return `YAHHH ${this.winner}, Ayo Lagi!!!`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.botOption = start.botBrain();
    start.winner = start.winningCondition();

    const inGame = document.getElementById('inGame');
    const result = document.getElementById('result');

    inGame.textContent = "...";
    result.textContent = "";

    setTimeout(() => {
        inGame.textContent = `${start.playerName} ${start.playerOption}  VS  ${start.botOption} ${start.botName}`;
        result.textContent = start.matchResult();
    }, 1000);
}