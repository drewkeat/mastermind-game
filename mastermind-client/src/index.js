console.log('linked')
const app = new AppContainer();

const signupButton = document.getElementById("openSignup")

signupButton.addEventListener("click", () => {
    let form = new SignUpForm()
    form.build();
    form.bindListeners();
})

app.renderBoard()