import { onLoad, print } from "./utils";

/** Switches to the relevant tab in response a click event. */
function openTab(event) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
        element.className.replace(" active", "")
    }

    var tabLink = document.getElementsByClassName("TabButton active")[0]
    tabLink.className = tabLink.className.replace(" active", "")
    if (tabLink.className == "TabButton special") {
        var elements = document.getElementsByClassName("SpecialSheet")
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            document.head.removeChild(element)
        }
    }

    var tabElement = document.getElementById(event.currentTarget.name)
    if (event.currentTarget.className == "TabButton special") {
        console.log("h")
        var head = document.head
        var newStyle = document.createElement("link")
        newStyle.type = "text/css"
        newStyle.rel = "stylesheet"
        newStyle.className = "SpecialSheet"
        newStyle.href = "/src/special.css"
        head.appendChild(newStyle)
    }
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