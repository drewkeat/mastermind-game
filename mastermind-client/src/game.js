class Game {
    constructor () {
        this.user
        this.combo
        this.score = 10000
        this.board = document.querySelector('#newBoard').innerHTML
    }

    // resetBoardState
    //     bindEventListeners pegs, holes, active row button
    // createCombo
    // checkGuess
    // renderFeedback
    // changeActiveRow

    begin() {
        this.renderBoardState()
        this.bindEventListeners()
        this.generateCombo()
    }

    updateBoardState() {
        const state = document.querySelector('#board').getInnerHTML()
        this.board = `<div id="board"> ${state} </div>`
    }

    renderBoardState() {
        document.querySelector('main').innerHTML=this.board
        this.bindEventListeners()
    }

    resetBoardState() {
        document.querySelector('main').innerHTML = document.querySelector('#newBoard').innerHTML
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
        const guessButtons = document.querySelectorAll('.guess-row >* button')
        guessButtons.forEach(button => button.addEventListener('click', (e) => this.checkGuess()))
    }

    generateCombo() {
        let colors = []
        let combo = []
        const pegs = document.querySelectorAll('.peg-tray > .peg')
        for (const peg of pegs) {
            colors.push(peg.classList[1])
        }
        do {
            let color = colors[Math.floor(Math.random() * colors.length)]
            if (!combo.includes(color)){
                combo.push(color)
            }
        } while (combo.length < 4)
        this.combo = combo
    }
    checkGuess() {
        const accuracy = this.guessAccuracy();
        const feedbackPegs = document.querySelectorAll('[data-active-row] > .feedback-box >*')
        for (let i = 0; i < accuracy[0]; i++) {
            feedbackPegs[i].classList.add("right-place")
        };

        for (let i=accuracy[0]; i < accuracy[1]; i++) {
            feedbackPegs[i].classList.add("right-color")
        }

        //Finish method with change active row and calculate score
    }
    guessAccuracy() {
        let rightPlace = 0;
        let rightColor = 0;
        let tempCombo = this.combo
        let tempGuess = []
        const nodes = document.querySelectorAll('[data-active-row] > .row >*')
        nodes.forEach(node => tempGuess.push(node.classList[1]))

        tempGuess.forEach((peg, index) => {
            if (tempCombo[index] == peg) {
                rightPlace += 1
                peg= "x"
            }
        })

        tempGuess.forEach((peg, index) => {
            if (tempCombo.includes(peg)) {
                rightColor += 1
            }
        })
        return [rightPlace, rightColor]

        // iterate through combo update rightPlace for # of elements in guess[index] that match combo[index]

        //iterate through combo update rightColor for # of elements that guess.includes()
    }

    displayCombo() {
        const pegs = document.querySelectorAll('.box')
        pegs.forEach((peg, index) => peg.className = `peg ${app.game.combo[index]}`)
    }

}