class SignUpForm {
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
   
   bindListeners() {
        let submitBtn = document.querySelector("#signup-form >* input[type=submit]")

        let loginBtn = document.querySelector("#signup-form >* input[type=button]")

       submitBtn.addEventListener("click", (e) =>{ 
        e.preventDefault()
        // Replace below with fetch(baseURL, postObject)
        console.log("clicked")
       })
       
       loginBtn.addEventListener("click", (e) => console.log("clicked"))
   }

}