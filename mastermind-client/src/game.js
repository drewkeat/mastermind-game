class Game {
    constructor () {
        this.user
        this.combo
        this.score = 10000
        this.board = `<div id="board">
        <div id="board-head">
            Head
            <div class="row">
                <div class="hole"></div>
                <div class="hole"></div>
                <div class="hole"></div>
                <div class="hole"></div>
            </div>
        </div>
        <div id="board-guesses">
            Guesses
            <div class="guess-row">
                <div class="feedback-box">
                    <div class="feedback hole"></div>
                    <div class="feedback hole"></div>
                    <div class="feedback hole"></div>
                    <div class="feedback hole"></div>
                </div>
                <div class="row">
                    <div class="hole"></div>
                    <div class="hole"></div>
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
                <div class="action-box">
                    <button>Check Guess</button>
                </div>
            </div>
        </div>
        <div id="board-footer">
            Peg Collection
            <div class="peg-tray">
                <div class="peg color-1"></div>
                <div class="peg color-2"></div>
                <div class="peg color-3"></div>
                <div class="peg color-4"></div>
                <div class="peg color-5"></div>
                <div class="peg color-6"></div>
                <div class="peg color-7"></div>
                <div class="peg color-8"></div>
            </div>
        </div>
    </div>`
    }

    updateBoard() {
        document.querySelector('#board').getInnerHtml
    }
}