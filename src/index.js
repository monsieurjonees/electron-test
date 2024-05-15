import { onLoad } from "./utils";

/** Switches to the relevant tab in response a click event. */
function openTab(event) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
        element.className.replace(" active", "")
    }

    var tabLink = document.getElementsByClassName("TabButton active")[0]
    tabLink.className = "TabButton"

    var tabElement = document.getElementById(event.currentTarget.name)
    tabElement.style.display = "block"
    event.currentTarget.className += " active"
}

// peepeepoopoo
// function setColorScheme(event, scheme) {
//     var tabs
// }

onLoad(() => {
    // Listen for button clicks (tab changes)
    var buttons = document.getElementsByClassName("TabButton")
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener("click", openTab)
    }
})