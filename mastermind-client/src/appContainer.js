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

    updateUser() {
        fetch(`${this.url}/users/${this.user.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.user.avgScore = data.avg_score
        })
    }

    displayUserAvg() {
        if (this.user.id){
        const avgScore = document.querySelector('#scoreBoard >* i')
        avgScore.innerText = this.user.avgScore
        }
    }

    startNewGame() {
        this.getMasterMind()
        this.updateUser()
        this.displayUserAvg()
        this.game = new Game();
        this.game.user = this.user.id;
        this.game.begin()
    }
}