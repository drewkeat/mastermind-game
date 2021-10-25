class AppContainer {
    constructor() {
        this.url = 'http://localhost:3000';
        this.user = {};
        this.game = new Game();
    }

    renderBoard() {
        document.querySelector('main').innerHTML = this.game.board
    }
}