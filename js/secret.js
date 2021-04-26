const ok = "Secret"
const URL = "nice.html"

function secret(str) {
    if (str === 'Actinidia') {
        console.error('Nice dude')
        console.log("Click here " + ok.link(URL));
    } else {
        close()
    }
}

let win;

function open() {
    win = window.open("https://x33lys.github.io/secret.html", "_blank", "width=900, height=786");
}

function close() {
    win.close();
}