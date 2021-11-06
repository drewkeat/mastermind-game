class Game {
  constructor() {
    this.id
    this.user;
    this.combo;
    this.score = 11000;
    this.board;
  }

  begin() {
    this.renderBoardState();
    this.generateCombo();
  }

  saveBoardState() {
    const state = document.querySelector("#board").getInnerHTML();
    this.board = `<div id="board"> ${state} </div>`;
    if (this.id) {
      this.updateGame()
    } else {
      this.persistGame()
    }
  }

  renderBoardState() {
    if (this.board) {
      document.querySelector("main").innerHTML = this.board;
      document.getElementById("gameScore").innerText = this.score
      this.bindEventListeners();
    } else {
      this.resetBoardState();
    }
  }

  resetBoardState() {
    document.querySelector("main").innerHTML = document.querySelector(
      "#newBoard"
    ).innerHTML;
    document.getElementById("gameScore").innerText = this.score
    this.bindEventListeners();
  }

  bindEventListeners() {
    const dropzones = document.querySelectorAll("[data-active-row] > .row >*");
    const draggables = document.querySelectorAll("[draggable]");
    const guessButton = document.querySelector(
      "[data-active-row] > .action-box > button"
    );

    draggables.forEach((peg) => {
      peg.addEventListener("dragstart", (e) => {
        e.target.classList.add("dragging");
      });
      peg.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
      });
      peg.addEventListener("drop", (e) => {
        e.preventDefault();
        e.target.classList.remove("dragging");
      });
    });

    dropzones.forEach((hole) => {
      hole.addEventListener("dragenter", (e) => {
        e.target.classList.add(
          document.querySelector(".dragging").classList[1]
        );
      });

      hole.addEventListener("dragleave", (e) => {
        e.target.classList.remove(
          document.querySelector(".dragging").classList[1]
        );
      });

      hole.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.target.className = `hole ${
          document.querySelector(".dragging").classList[1]
        }`;
      });
    });

    guessButton.addEventListener("click", (e) => this.checkGuess());
  }

  generateCombo() {
    const colors = [];
    const pegs = document.querySelectorAll(".peg");
    pegs.forEach((peg) => colors.push(peg.classList[1]));
    this.combo = [];
    for (let i = 0; i < 4; i++) {
      let key = colors[Math.floor(Math.random() * colors.length)];
      this.combo.push(key);
    }
  }

  checkGuess() {
    const guessPegs = document.querySelectorAll(
      "[data-active-row] > .row > .hole"
    );
    const guess = [];
    guessPegs.forEach((peg) => guess.push(peg.classList[1]));
    let accuracy = this.checkAccuracy(guess);
    this.renderFeedback(accuracy);
    this.saveBoardState();
    this.checkWin(accuracy) ? this.offerNewGame() : this.changeActiveRow()
  }

  checkAccuracy(guess) {
    let rightPlace = 0;
    let rightColor = 0;
    let tempCombo = [...this.combo];
    tempCombo.forEach((key, index) => {
      if (guess[index] === key) {
        rightPlace += 1;
        guess[index] = "x";
        tempCombo[index] = "o";
      }
    });

    guess.forEach((color, index) => {
      for (let i = 0; i < tempCombo.length; i++) {
        if (color === tempCombo[i]) {
          rightColor += 1;
          color = "x";
          guess[index] = "x";
          tempCombo[i] = "o";
        }
      }
    });
    return [rightPlace, rightColor];
  }

  checkWin(accuracy) {
    const message = document.querySelector('#board-head > b')
    if (accuracy[0] === 4) {
      this.displayCombo();
      message.innerText = "You Win!"
      return true
    } else {
      return false
    }
  }

  renderFeedback(accuracy) {
    const feedbackHoles = document.querySelectorAll(
      "[data-active-row] > .feedback-box >*"
    );
    const numRightPlace = accuracy[0];
    const numRightColor = accuracy[1];
    for (let i = 0; i < numRightPlace; i++) {
      feedbackHoles[i].classList.add("right-place");
    }
    let startPlacePegs = numRightPlace;
    for (let i = 0; i < numRightColor; i++) {
      feedbackHoles[startPlacePegs].classList.add("right-color");
      startPlacePegs++;
    }
    document.getElementById('gameScore').innerText = this.score
  }

  changeActiveRow() {
    const currentRow = document.querySelector("[data-active-row]");
    const currentRowNum = parseInt(currentRow.id.match(/guessRow(.*)/)[1]);
    const nextRow = document.querySelector(`#guessRow${currentRowNum - 1}`);
    if (currentRowNum === 1) {
      this.displayCombo()
      const message = document.querySelector('#board-head > b')
      message.innerText = "You lost!"
      this.offerNewGame()
    } else {
      this.score = parseInt(currentRowNum) * 1000
      currentRow.childNodes.forEach((node) => {
        let oldNode = node;
        let newNode = node.cloneNode(true);
        oldNode.parentNode.replaceChild(newNode, oldNode);
      });
      currentRow.toggleAttribute("data-active-row");
      nextRow.toggleAttribute("data-active-row");
      this.bindEventListeners();
  }
  }

  displayCombo() {
    const solBoxes = document.querySelectorAll(".box");
    this.combo.forEach(
      (key, index) => (solBoxes[index].className = `hole ${key}`)
    );
  }

  makeConfigObj() {
    return {
      user_id: this.user,
      board: this.board,
      combo: JSON.stringify(this.combo),
      score: this.score,
    };
  }

  persistGame() {
    fetch(`${app.url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(app.game.makeConfigObj()),
    })
    .then(resp => resp.json())
    .then(obj => this.id = obj.id)
  }

  updateGame() {
    fetch(`${app.url}/games/${app.game.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/jason"
      },
      body: JSON.stringify(app.game.makeConfigObj())
      })
  }

  offerNewGame() {
    const btn = document.createElement('button')
    btn.innerText = "New Game"
    btn.addEventListener('click', e => app.startNewGame())
    document.getElementById('board-head').append(btn)
  }
}
