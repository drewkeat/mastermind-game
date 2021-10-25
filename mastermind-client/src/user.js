class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.games = []
    }

    static createUser(userData) {
        let responseObject
        fetch(`${app.url}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json()
            }
            //Replace with AppContainer.setUser()
            return console.log("New User Created")
        })
        .then(errors => {
            for (let error in errors) {
                let ele = document.querySelector(`label[for=${error}]`)
                ele.setAttribute('data-after', `${errors[error]}`);
                document.addEventListener('click', (e) => {
                    const labels = document.querySelectorAll('label')
                    labels.forEach(label => label.setAttribute('data-after',''))
                })
            }
        });
    }
}