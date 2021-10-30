class Game {
    constructor () {
        this.user
        this.combo
        this.score = 10000
        this.board
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

    saveBoardState() {
        const state = document.querySelector('#board').getInnerHTML()
        this.board = `<div id="board"> ${state} </div>`
    }

    renderBoardState() {
        if (this.board) {
            document.querySelector('main').innerHTML = this.board
        } else {
            this.resetBoardState()
        }
        this.bindEventListeners()
    }

    resetBoardState() {
        document.querySelector('main').innerHTML = document.querySelector('#newBoard').innerHTML
    }

    bindEventListeners() {
        const dropzones = document.querySelectorAll('[data-active-row] > .row >*')
        const draggables = document.querySelectorAll('[draggable]')
        const guessButton = document.querySelectorAll('[data-active-row] >* button')

        draggables.forEach(peg => 
            {
                peg.addEventListener('dragstart', e => {
                e.target.classList.add('dragging')
                })
                peg.addEventListener('dragend', e => {
                    e.target.classList.remove('dragging')
                })
                peg.addEventListener('drop', e => {
                    e.preventDefault()
                    e.target.classList.remove('dragging')
                })
            }
        )

        dropzones.forEach(hole => {
            hole.addEventListener('dragenter', e => {
                e.target.classList.add( document.querySelector('.dragging').classList[1])
            }
            )

            hole.addEventListener('dragleave', e => {
                e.target.classList.remove( document.querySelector('.dragging').classList[1])
            })

            hole.addEventListener('dragover', e => {
                e.preventDefault()
                e.target.className = `hole ${document.querySelector('.dragging').classList[1]}`
            }
            )
        })

        guessButton.addEventListener('click', checkGuess())
    
    }

    generateCombo() {
    }

    checkGuess() {
        }


    displayCombo() {
    }

}