class AppContainer {
    constructor() {
        this.url = 'http://localhost:3000';
        this.user = {};
        this.game = new Game();
    }

    // DO THIS: build fetch method to retrieve high scores
    getHighScores() {
        fetch()
    }

    getMasterMind() {
        fetch(`${this.url}/mastermind`)
        .then(resp => resp.json())
        .then(mm => document.getElementById('mastermindName').innerText = mm.username)
    }

    startNewGame() {
        this.getMasterMind()
        this.game = new Game();
        this.game.user = this.user.id;
        this.game.begin()
    }
}