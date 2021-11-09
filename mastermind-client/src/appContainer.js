class AppContainer {
    constructor() {
        this.url = 'http://localhost:3000';
        this.user = {};
        this.game = new Game();
    }

    // DO THIS: build fetch method to retrieve high scores
    getHighScores() {
        const highScoreHTML = document.createElement('div')
        highScoreHTML.id = 'highScores'
        let players = []
        fetch(`${this.url}/users`)
        .then(resp => resp.json())
        .then(object => {
            object.data.forEach(player => players.push({...player.attributes}))
            players.sort((a,b) => (a.avg_score > b.avg_score) ? -1 : ((b.avg_score > a.avg_score) ? 1 : 0))
            this.appendScores(players, highScoreHTML)
            const highScorePopup = new Popup('High Scores', highScoreHTML)
            highScorePopup.display()
        })
    }

    appendScores(userArray, scoreContainer) {
        userArray.forEach(user => {
            let name = document.createElement('h3')
            let score = document.createElement('h3')
            name.innerText = user.username
            score.innerText = user.avg_score
            scoreContainer.append(name, score)
        })
    }

    getMasterMind() {
        fetch(`${this.url}/mastermind`)
        .then(resp => resp.json())
        .then(mm => document.getElementById('mastermindName').innerText = mm.username)
    }

    updateUser() {
        if (this.user.id) {
            fetch(`${this.url}/users/${this.user.id}`)
            .then(resp => resp.json())
            .then(obj => {
                this.user.avgScore = obj.data.attributes.avg_score
                this.displayUserAvg()
            })
        }
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
        this.game = new Game();
        this.game.user = this.user.id;
        this.game.begin()
    }
}