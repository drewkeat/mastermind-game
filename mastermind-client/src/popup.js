class Popup{
    constructor(header, content) {
        this.header = header
        this.content = content
    }

    display() {
        document.body.innerHTML += 
        `<div id="overlay">
            <div id="overlay-container">
                <div id="popup">
                    <h1>${this.header}</h1>
                    <div id="content">
                        ${this.content}
                    </div>
                </div>
            </div>
        </div>`
    }
}