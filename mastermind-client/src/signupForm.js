class SignUpForm {
// append #signup-form to index.html
    build() {
       document.body.innerHTML += 
       `<div id="form-wrapper">
        <div id="signup-form">
        <form action="http://localhost:3000/users" method="post">
            <hr>
            <h2 style="text-align: center;"> Sign Up or Login </h2>
            <hr>
            <label for="username">Username:</label>
            <input type="text" name="username" id="usernameInput">
            <label for="password">Password:</label>
            <input type="password" name="password" id="passwordInput">
            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="passwordConfirmationInput">
            <div class="buttons">
                <input type="submit" value="Create Account/Login">
            </div>
        </form>
        </div>
    </div>`
   }
// add event listeners to button
   bindListeners() {
        const submitBtn = document.querySelector("#signup-form >* input[type=submit]")
        submitBtn.addEventListener("click", (e) =>{ 
        //prevent standard Form behavior to send POST request via Fetch
            e.preventDefault()
            User.findOrPersistUser(this.getUserData())
       })
   }

   getUserData() {
        const fields = document.querySelectorAll("#signup-form >* input")
        return {user: {
        username: `${fields[0].value}`,
        password: `${fields[1].value}`,
        password_confirmation: `${fields[2].value}`
        }}
    }
}