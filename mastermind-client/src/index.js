console.log('linked')

const signupButton = document.getElementById("openSignup")


signupButton.addEventListener("click", () => {
    let form = new SignUpForm()
    form.build()
})

function clearDoc() {
    document.body.innerHTML=""
}