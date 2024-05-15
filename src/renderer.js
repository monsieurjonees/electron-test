// const notifButton = document.getElementById("notifButton");

function sendNotif() {
    console.log("poosh")
    window.ipc.sendNotif()
}

function helloClick() {
    window.ipc.helloClick()
}

function openTab(tab) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
    }

    var tabElement = document.getElementById(tab)
    tabElement.style.display = "block"
}