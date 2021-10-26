class AppContainer {
    constructor() {
        this.url = 'http://localhost:3000';
        this.user = {};
        this.game = new Game();
    }

    beginGame() {
        this.game.user = this.user
        this.game.renderBoardState()
    }
}