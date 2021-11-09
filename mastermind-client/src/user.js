class User {
  constructor(id, name, avgScore) {
    this.id = id;
    this.name = name;
    this.avgScore = avgScore;
    this.games = [];
  }

  static findOrPersistUser(userData) {
    fetch(`${app.url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw response
        }
        return response.json()
      })
      .then((data) => {
          //Set current user & remove form overlay
          const attr = {...data.data.attributes}
          let user = new User(attr.id, attr.username, attr.avg_score);
          app.user = user;
          app.displayUserAvg();
          app.game.user = user.id;
          let welcomeBadge = document.createElement('h2')
          welcomeBadge.textContent = `Welcome,\n ${user.name}`
          document.getElementById('form-wrapper').remove();
          document.querySelector('sidebar > h2').remove()
          document.getElementById('openSignup').replaceWith(welcomeBadge);
          initializeEvents()
          app.game.bindEventListeners()
      })
      .catch(resp => alert('Review your login information'))
      // .then(data => {
      //     for (let error in data) {
      //       let ele = document.querySelector(`label[for=${error}]`);
      //       ele.setAttribute("data-after", `${data[error]}`);
      //       document.addEventListener("click", (e) => {
      //         const labels = document.querySelectorAll("label");
      //         labels.forEach((label) => label.setAttribute("data-after", ""));
      //       });
      //     }
      // })
  }
}
