class AppContainer {
    constructor() {
        this.url = 'http://localhost:3000';
        this.user = {};
        this.game = new Game();
    }

    // build fetch method to retrieve high scores
    getHighScores() {
        fetch()
    }

    getMasterMind() {
        fetch(`${this.url}/mastermind`)
        .then(resp => resp.json())
        .then(mm => document.getElementById('mastermindName').innerText = mm.username)
    }

}