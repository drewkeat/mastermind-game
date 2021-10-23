class SignUpForm {
// append #signup-form to index.html
    build() {
       document.body.innerHTML += 
       `<div id="form-wrapper">
        <div id="signup-form">
        <form action="http://localhost:3000/users" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="userNameInput">
            <label for="email">Email:</label>
            <input type="email" name="email" id="userEmailInput">
            <label for="password">Password:</label>
            <input type="password" name="password" id="userPasswordInput">
            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="userPasswordConfirmation">
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
            fetch("http://localhost:3000/users", userData).then(response => response.json()).
            then(data => console.log(data));
       })

       loginBtn.addEventListener("click", (e) => console.log("clicked"))
   }

   getUserData() {
        const fields = document.querySelectorAll("#signup-form >* input")
        return {user: {
        name: `${fields[0].value}`,
        email: `${fields[1].value}`,
        password: `${fields[2].value}`,
        password_confirmation: `${fields[3].value}`
        }}
    }
}