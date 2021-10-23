class SignUpForm {
// append #signup-form to index.html
    build() {
       document.body.innerHTML += 
       `<div id="form-wrapper">
        <div id="signup-form">
        <form action="http://localhost:3000/users" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="usernameInput">
            <label for="password">Password:</label>
            <input type="password" name="password" id="passwordInput">
            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="passwordConfirmationInput">
            <div class="buttons">
                <input type="submit" value="Create Account">
                <input type="button" value="Login">
            </div>
        </form>
        </div>
    </div>`
   }
// add event listeners to submit and login buttons
   bindListeners() {
        const submitBtn = document.querySelector("#signup-form >* input[type=submit]")
        const loginBtn = document.querySelector("#signup-form >* input[type=button]")
        submitBtn.addEventListener("click", (e) =>{ 
        //prevent standard Form behavior to send POST request via Fetch
            e.preventDefault()
        // define configObject for fetch
            const userData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.getUserData())
            }
            fetch("http://localhost:3000/users", userData)
            .then(response => {
                if (!response.ok) {
                    return response.json()
                }
                return console.log("New User Created")
            })
            .then(errors => {
                // const message = errors
                debugger
                alert(`Something went wrong: ${message}`)
            });
       })

       loginBtn.addEventListener("click", (e) => console.log("clicked"))
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