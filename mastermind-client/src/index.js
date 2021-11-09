console.log('linked')
const app = new AppContainer();

function initializeEvents() {
    const signupButton = document.getElementById("openSignup")
    if (signupButton) {
        signupButton.addEventListener("click", () => {
        let form = new SignUpForm()
        form.build();
        form.bindListeners();
        })
    }
    const highScoresButton = document.getElementById("showScores")
    highScoresButton.addEventListener('click', e => app.getHighScores())
}
initializeEvents()

app.startNewGame()