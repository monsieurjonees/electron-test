// const notifButton = document.getElementById("notifButton");

function sendNotif() {
    console.log("poosh")
    window.ipc.sendNotif()
}

function helloClick() {
    window.ipc.helloClick()
}

function openTab(event, tab) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
        element.className.replace(" active", "")
    }

    var tabLink = document.getElementsByClassName("TabButton active")[0]
    tabLink.className = "TabButton"

    var tabElement = document.getElementById(tab)
    tabElement.style.display = "block"
    event.currentTarget.className += " active"
}

// peepeepoopoo
// function setColorScheme(event, scheme) {
//     var tabs
// }