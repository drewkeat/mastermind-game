class Game {
    constructor () {
        this.user
        this.combo
        this.score = 10000
        this.board = `<div id="board">
        <div id="board-head">
            <b>Combination</b>
            <div class="row">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
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
                <div class="peg color-1" draggable="true"></div>
                <div class="peg color-2" draggable="true"></div>
                <div class="peg color-3" draggable="true"></div>
                <div class="peg color-4" draggable="true"></div>
                <div class="peg color-5" draggable="true"></div>
                <div class="peg color-6" draggable="true"></div>
                <div class="peg color-7" draggable="true"></div>
                <div class="peg color-8" draggable="true"></div>
            </div>
        </div>
    </div>`
    }

    // resetBoardState
    //     bindEventListeners pegs, holes, active row button
    // createCombo
    // checkGuess
    // renderFeedback
    // changeActiveRow

    updateBoardState() {
        const state = document.querySelector('#board').getInnerHTML()
        this.board = `<div id="board"> ${state} </div>`
    }

    renderBoardState() {
        document.querySelector('main').innerHTML=this.board
        this.bindEventListeners()
    }

    resetBoardState() {
        document.querySelector('#board').innerHTML = `<div id="board-head">
        <b>Combination</b>
        <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
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
            <div class="peg color-1" draggable="true"></div>
            <div class="peg color-2" draggable="true"></div>
            <div class="peg color-3" draggable="true"></div>
            <div class="peg color-4" draggable="true"></div>
            <div class="peg color-5" draggable="true"></div>
            <div class="peg color-6" draggable="true"></div>
            <div class="peg color-7" draggable="true"></div>
            <div class="peg color-8" draggable="true"></div>
        </div>
    </div>`
    }

    bindEventListeners() {
        const draggables = document.querySelectorAll('.peg')
        draggables.forEach(peg => {
            peg.addEventListener('dragstart', (e) => {
                peg.dataset.dragging = 'true';
        });
            peg.addEventListener('dragend', (e) => {
                peg.removeAttribute('data-dragging')
            })
        })
        const dropzones = document.querySelectorAll('.row > .hole')
        dropzones.forEach(hole => {
            hole.addEventListener('dragenter', (e) => {
                e.target.classList = document.querySelector('.peg[data-dragging]').classList
            })

            hole.addEventListener('dragleave', (e) => {
                e.target.classList = 'hole'
            })

            hole.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.target.classList = document.querySelector('.peg[data-dragging]').classList
            })
        })
    }

}